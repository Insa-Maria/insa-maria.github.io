import { Link } from "react-router-dom";
import BottomCtaSection from "../components/BottomCtaSection";
import backgroundBegin from "../assets/content-images/background_begin.png";
import "./AboutPage.css";

const focusAreas = [
  "Data visualisation",
  "Human-computer interaction",
  "Decision-support tools",
  "AI and complex systems",
  "Front-end engineering",
  "Research communication"
];

const AboutPage = () => (
  <main className="profile-page">
    <section className="profile-hero container">
      <div className="profile-hero-copy">
        <p className="section-kicker">About</p>
        <h1>Designing intelligent tools for people making complex decisions.</h1>
        <p className="profile-lead">
          With a background spanning data visualisation, human-computer
          interaction, and engineering, my work focuses on making complex
          systems understandable and usable.
        </p>
        <div className="profile-actions">
          <Link className="btn btn-primary" to="/contact">Get in touch</Link>
          <Link className="btn" to="/about">About Maria</Link>
        </div>
      </div>

      <figure className="profile-hero-figure">
        <img src={backgroundBegin} alt="" />
      </figure>
    </section>

    <section className="profile-section container">
      <div className="profile-story">
        <h2>How I Work</h2>
        <div className="profile-copy">
          <p>
            I work across the full path from shaping the problem, to working
            with data, designing the interaction, building the system, and
            getting it into use.
          </p>
          <p>
            Many of the tools I have built translate complex outputs, such as
            sensor data, AI models, or large-scale systems, into interfaces that
            support real-world decisions.
          </p>
          <p>
            My approach is grounded in making complexity usable: structuring
            systems so people can understand what matters, ask better
            questions, and move forward with confidence.
          </p>
        </div>
      </div>
    </section>

    <section className="profile-section profile-band">
      <div className="container profile-grid">
        <div>
          <p className="section-kicker">Domains</p>
          <h2>Comfortable with messy, high-context problems.</h2>
        </div>
        <div className="profile-copy">
          <p>
            I have worked across agriculture, cybersecurity, infrastructure,
            healthcare, environmental research, immersive experiences, and
            public sector projects.
          </p>
          <p>
            That means designing for very different users, from engineers and
            operators to researchers and non-technical audiences, while keeping
            a consistent focus on clarity and decision-making.
          </p>
        </div>
      </div>
    </section>

    <section className="profile-section container">
      <div className="profile-focus">
        {focusAreas.map(area => (
          <span key={area} className="badge badge-highlight">{area}</span>
        ))}
      </div>
      <p className="profile-location">Based in Edinburgh, regularly in Barcelona.</p>
    </section>

    <BottomCtaSection />
  </main>
);

export default AboutPage;
