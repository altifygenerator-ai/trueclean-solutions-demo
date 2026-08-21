import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-grid">
        <div className="faq-heading">
          <p className="section-kicker">Questions</p>
          <h2>Frequently Asked Questions</h2>
          <p>
            A few quick answers about TrueClean Solutions, service areas, and
            exterior cleaning services in South Georgia.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}