import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (
      !process.env.QUOTE_FROM_EMAIL ||
      !process.env.QUOTE_CLIENT_EMAIL ||
      !process.env.QUOTE_INTERNAL_EMAIL
    ) {
      return NextResponse.json(
        { message: "Missing quote email settings" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = clean(body.name);
    const phone = clean(body.phone);
    const email = clean(body.email);
    const service = clean(body.service);
    const message = clean(body.message);
    const company = clean(body.company);

    // Honeypot. If filled, pretend it worked and do nothing.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone || !service || !message) {
      return NextResponse.json(
        { message: "Please fill out all required fields." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const subject = `New TrueClean Quote Request - ${service}`;

    const clientHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        ${email ? `<p><strong>Email:</strong> ${safeEmail}</p>` : ""}
        <p><strong>Service:</strong> ${safeService}</p>

        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

        <p><strong>Project Details:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    const internalHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
        <h2>TrueClean Quote Copy</h2>
        <p style="color:#555;">This is your private Hometown Web Services copy. The client was sent a separate email.</p>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        ${email ? `<p><strong>Email:</strong> ${safeEmail}</p>` : ""}
        <p><strong>Service:</strong> ${safeService}</p>

        <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />

        <p><strong>Project Details:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    const text = `
New TrueClean Quote Request

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ""}
Service: ${service}

Project Details:
${message}
    `.trim();

    const clientEmail = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL,
      to: process.env.QUOTE_CLIENT_EMAIL,
      subject,
      html: clientHtml,
      text,
      replyTo: email || undefined,
    });

    if (clientEmail.error) {
      console.error("Client email error:", clientEmail.error);

      return NextResponse.json(
        { message: "Quote request could not be sent." },
        { status: 500 }
      );
    }

    const internalEmail = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL,
      to: process.env.QUOTE_INTERNAL_EMAIL,
      subject: `[Copy] ${subject}`,
      html: internalHtml,
      text,
      replyTo: email || undefined,
    });

    if (internalEmail.error) {
      console.error("Internal copy email error:", internalEmail.error);

      return NextResponse.json(
        { message: "Quote request sent to client, but internal copy failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote route error:", error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}