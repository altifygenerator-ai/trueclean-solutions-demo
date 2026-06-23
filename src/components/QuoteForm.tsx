"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div id="quote" className="quote-card">
      <p className="quote-kicker">Request a Quote</p>
      <h2>Tell us what needs cleaned.</h2>
      <p>
        Send over the basics and TrueClean Solutions can get you pointed in the
        right direction.
      </p>

      <form className="quote-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden-field"
          aria-hidden="true"
        />

        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address optional"
          />
        </div>

        <div className="form-row">
          <label htmlFor="service">Service Needed</label>
          <select id="service" name="service" defaultValue="" required>
            <option value="" disabled>
              Choose a service
            </option>
            <option>Soft Washing</option>
            <option>House Washing</option>
            <option>Spiderweb Removal</option>
            <option>Storefront Cleaning</option>
            <option>Concrete & Walkways</option>
            <option>Commercial Cleaning</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="message">Project Details</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what needs cleaned..."
            required
          />
        </div>

        <button
          type="submit"
          className="quote-submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Quote Request"}
        </button>

        {status === "success" && (
          <p className="form-success">
            Quote request sent. TrueClean Solutions will follow up soon.
          </p>
        )}

        {status === "error" && <p className="form-error">{errorMessage}</p>}
      </form>

      <div className="quote-callout">
        <span>Prefer to call?</span>
        <a href={site.phoneHref}>{site.phone}</a>
      </div>
    </div>
  );
}