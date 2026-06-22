import { site } from "@/data/site";

export default function QuoteForm() {
  return (
    <div id="quote" className="quote-card">
      <p className="quote-kicker">Request a Quote</p>
      <h2>Tell us what needs cleaned.</h2>
      <p>
        Send over the basics and TrueClean Solutions can get you pointed in the
        right direction.
      </p>

      <form className="quote-form">
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Your name" />
        </div>

        <div className="form-row">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Phone number" />
        </div>

        <div className="form-row">
          <label htmlFor="service">Service Needed</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Choose a service
            </option>
            <option>Soft Washing</option>
            <option>House Washing</option>
            <option>Spiderweb Removal</option>
            <option>Storefront Cleaning</option>
            <option>Concrete Cleaning</option>
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
          />
        </div>

        <button type="submit" className="quote-submit">
          Send Quote Request
        </button>
      </form>

      <div className="quote-callout">
        <span>Prefer to call?</span>
        <a href={site.phoneHref}>{site.phone}</a>
      </div>
    </div>
  );
}