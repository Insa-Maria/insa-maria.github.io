import { Link } from "react-router-dom";
import BottomCtaSection from "../components/BottomCtaSection";
import "./AboutPage.css";

const focusAreas = [
  "Data visualisation",
  "Human-computer interaction",
  "Decision-support tools",
  "AI and complex systems",
  "Front-end engineering",
  "Research communication"
];

const contactEmail = "insaiglesias.maria@gmail.com";
const linkedInUrl = "https://uk.linkedin.com/in/maria-insa-iglesias";

const AboutPage = () => (
  <main className="profile-page">
    <section className="profile-hero profile-intro container">
      <aside className="profile-card" aria-label="Maria profile details">
        <div className="profile-photo-placeholder">
          <span>Photo coming soon</span>
        </div>
        <div className="profile-facts">
          <p>BSc | PhD</p>
          <p>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
          <p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
          <p>Based in Edinburgh, often between the UK and Barcelona.</p>
        </div>
      </aside>

      <div className="profile-hero-copy">
        <p className="section-kicker">About</p>
        <h1>Hi, I'm Maria.</h1>
        <p className="profile-lead">
          I design and build interfaces that make complex data, AI outputs, and
          decision-heavy systems easier to understand and act on.
        </p>
        <p>
          My work sits between data visualisation, human-computer interaction,
          research communication, and front-end engineering. I like the space
          where a technical system becomes a usable product: clearer evidence,
          better questions, and fewer decisions hidden inside messy data.
        </p>
        <p>
          I have worked across agriculture, cybersecurity, infrastructure,
          healthcare, environmental research, immersive experiences, education,
          and public-sector projects.
        </p>
        <div className="profile-actions">
          <Link className="btn" to="/contact">Get in touch</Link>
        </div>
      </div>
    </section>

    <section className="profile-section profile-story-section container">
      <div className="profile-story">
        <h2>How I Work</h2>
        <div className="profile-copy">
          <p>
            I work across the full path from shaping the problem and
            understanding the users, to working with data, designing the
            interaction, building the front end, and helping the system get into
            use.
          </p>
          <p>
            Many of the tools I have built translate complex outputs, such as
            sensor data, AI models, spatial inspection data, or large-scale
            systems, into interfaces that support real-world decisions.
          </p>
          <p>
            My approach is grounded in making complexity usable: structuring
            information so people can see what matters, test assumptions,
            explain trade-offs, and move forward with confidence.
          </p>
        </div>
      </div>
    </section>

    <section className="profile-section profile-story-section profile-section-divided container">
      <div className="profile-grid">
        <div>
          <h2>Comfortable with messy, high-context problems.</h2>
        </div>
        <div className="profile-copy">
          <p>
            I have worked across agriculture, cybersecurity, infrastructure,
            healthcare, environmental research, immersive experiences, and
            public-sector projects.
          </p>
          <p>
            That means designing for very different users, from engineers and
            operators to researchers, students, clinicians, and non-technical
            audiences, while keeping a consistent focus on clarity, trust, and
            decision-making.
          </p>
        </div>
      </div>
    </section>

    <section className="profile-section profile-focus-section container">
      <div className="profile-focus-card">
        <p className="profile-location">Based in the UK (Edinburgh), often traveling to Spain (Barcelona).</p>
        <div className="profile-focus">
          {focusAreas.map(area => (
            <span key={area} className="badge badge-highlight">{area}</span>
          ))}
        </div>
      </div>
    </section>

    <BottomCtaSection
      showAbout={false}
      showWork
      text="I find real joy in making something obscure become plain, reducing processes that take days to minutes, and helping teams feel confident in the way they understand and use complex information."
      closing="You can explore selected projects or get in touch if the way I work sounds like a fit."
    />
  </main>
);

export default AboutPage;
