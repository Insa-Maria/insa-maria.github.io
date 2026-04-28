import { Link } from "react-router-dom";
import BottomCtaSection from "../components/BottomCtaSection";
import "./ContactPage.css";

const collaborationTypes = [
  "Product and UX roles",
  "Data visualisation work",
  "AI decision-support tools",
  "Research and prototyping"
];

const contactEmail = "marialuzana@hotmail.com";

const ContactPage = () => (
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

      <div className="contact-panel">
        <h2>Start a Conversation</h2>
        <p>
          Send a short note with the context, the kind of work you are thinking
          about, and any useful links.
        </p>
        <div className="contact-panel-actions">
          <a className="btn btn-primary" href={`mailto:${contactEmail}`}>
            Get in touch
          </a>
          <Link className="btn" to="/about">About Maria</Link>
        </div>
      </div>
    </section>

    <section className="contact-section contact-band">
      <div className="container contact-grid">
        <div>
          <h2>Good Fits</h2>
          <p>
            The strongest match is work where the interface has to help people
            understand, compare, prioritise, or act.
          </p>
        </div>

        <div className="contact-tags">
          {collaborationTypes.map(type => (
            <span key={type} className="badge badge-highlight">{type}</span>
          ))}
        </div>
      </div>
    </section>

    <BottomCtaSection />
  </main>
);

export default ContactPage;
