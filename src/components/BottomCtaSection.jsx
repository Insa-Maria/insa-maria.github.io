import { Link } from "react-router-dom";

export default function BottomCtaSection({
  id,
  showContact = true,
  showAbout = true,
  showWork = false,
  kicker = "Next",
  title = "I enjoy turning complex systems into clear tools people can trust.",
  text = "I find real joy in making something obscure become plain, reducing processes that take days to minutes, and helping teams feel confident in the way they understand and use their data.",
  closing = "Sound like a good fit for your next project? Get in touch and we'll make a plan."
}) {
  return (
    <section id={id} className="bottom-cta-section" aria-label="Next step">
      <div className="container bottom-cta">
        <div>
          <p className="section-kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <div className="bottom-cta-copy">
          <p>{text}</p>
          {closing && <p>{closing}</p>}
          <div className="bottom-cta-actions">
            {showContact && (
              <Link className="btn" to="/contact">Get in touch</Link>
            )}
            {showAbout && (
              <Link className="btn btn-primary" to="/about">About Maria</Link>
            )}
            {showWork && (
              <Link className="btn btn-work" to="/work">View Work</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
