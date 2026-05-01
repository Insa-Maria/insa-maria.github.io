import { useState } from "react";
import BottomCtaSection from "../components/BottomCtaSection";
import "./ContactPage.css";

const collaborationTypes = [
  "Product and UX roles",
  "Data visualisation work",
  "AI decision-support tools",
  "Research and prototyping"
];

const contactEmail = "insaiglesias.maria@gmail.com";
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const ContactPage = () => {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setStatus("error");
      setStatusMessage("The contact form is not configured yet. Please email me directly.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Thanks, your message has been sent.");
    } catch {
      setStatus("error");
      setStatusMessage(`Something went wrong. Please email me at ${contactEmail}.`);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero container">
        <div>
          <p className="section-kicker">Contact</p>
          <h1>Got a complex data challenge or role in mind?</h1>
          <p className="contact-lead">
            I am interested in teams building clear, useful tools from complex
            data, AI outputs, spatial systems, or research-heavy products.
          </p>
        </div>

        <form
          className="contact-form"
          action={formspreeEndpoint}
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New portfolio contact form message" />
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="6" required />
          </div>
          <button className="btn" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Submit"}
          </button>
          {statusMessage && (
            <p className={`contact-status contact-status-${status}`}>{statusMessage}</p>
          )}
          <p className="contact-email-fallback">
            Or email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
        </form>
      </section>

      <section className="contact-section contact-band">
        <div className="container contact-grid">
          <div>
            <h2>Good Fits</h2>
            <p>
              The strongest match is work where the interface has to help people
              understand, compare, prioritise, or act.
            </p>
            <div className="contact-tags">
              {collaborationTypes.map(type => (
                <span key={type} className="badge badge-highlight">{type}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCtaSection
        showContact={false}
        showWork
        title="Curious about the way I work?"
        text="If you want more context before reaching out, the work archive shows examples of data visualisation, AI decision-support, research tools, and front-end systems in practice."
        closing="You can browse the projects or read the short version of my background."
      />
    </main>
  );
};

export default ContactPage;
