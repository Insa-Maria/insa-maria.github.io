import { Link } from "react-router-dom";

export default function BottomCtaSection({ id }) {
  return (
    <section id={id} className="section bottom-cta-section">
      <div className="container bottom-cta">
        <div>
          <p className="section-kicker">Next</p>
          <h2>Need someone who can turn complex systems into clear tools?</h2>
        </div>
        <div className="bottom-cta-copy">
          <p>
            Recruiters and collaborators can jump into the full work archive or
            get in touch directly from here.
          </p>
          <div className="bottom-cta-actions">
            <Link className="btn btn-primary" to="/contact">Get in touch</Link>
            <Link className="btn" to="/about">About Maria</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
