import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function PortfolioCategoriesSection() {

  const grouped = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <section className="section">
      <div className="container">
        <h2>Work Categories</h2>
        <p className="section-intro">
          This portfolio is organised around the types of challenges I’ve taken on.
          Each category highlights work that helped people understand data, use it
          more easily, and move forward with confidence.
        </p>

        <div className="grid grid-3">

          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="category-card">

              <h3>{category}</h3>

              <p style={{ marginBottom: "16px" }}>
                {getCategoryDescription(category)}
              </p>

              <div className="project-links">
                {items.map(p => (
                  <Link key={p.id} to={`/project/${p.id}`} className="project-link-card">
                    {p.title}
                  </Link>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

function getCategoryDescription(category) {
  switch (category) {
    case "Data Products":
      return "Production-grade tools that enable real-world decisions.";
    case "Complex Data":
      return "Making complex and abstract data understandable.";
    case "AI Systems":
      return "Machine learning integrated into decision-support tools.";
    case "Scalable Systems":
      return "Reusable systems for consistent and scalable analytics.";
    case "Immersive":
      return "Experimental and immersive interaction experiences.";
    default:
      return "";
  }
}
