import { useState } from "react";
import { projects } from "../data/projects";
import ProjectGrid from "../components/ProjectGrid";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDeliverable, setActiveDeliverable] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const deliverables = [
    "All",
    ...[...new Set(projects.flatMap(p => p.outputs ?? []))].sort((a, b) => a.localeCompare(b))
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    const matchesDeliverable =
      activeDeliverable === "All" || project.outputs?.includes(activeDeliverable);

    return matchesCategory && matchesDeliverable;
  });

  return (
    <section className="section portfolio-page">
      <div className="container">
        <h1>Work</h1>
        <p className="section-intro portfolio-intro">
          Filter the archive by the portfolio category and the kind of output I
          delivered. The first filter uses the main portfolio signals and outcomes,
          while the second filter is based on deliverables such as tools, stories,
          research outputs and immersive experiences.
        </p>

        <div className="portfolio-filters" aria-label="Project filters">
          <FilterGroup
            label="Category"
            options={categories}
            activeOption={activeCategory}
            onChange={setActiveCategory}
          />
          <FilterGroup
            label="Deliverables"
            options={deliverables}
            activeOption={activeDeliverable}
            onChange={setActiveDeliverable}
          />
        </div>

        <p className="portfolio-results">
          {filteredProjects.length} projects found
        </p>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
}

function FilterGroup({ label, options, activeOption, onChange }) {
  return (
    <div className="portfolio-filter-group">
      <h2>{label}</h2>
      <div className="portfolio-filter-options">
        {options.map(option => (
          <button
            key={option}
            type="button"
            className={`portfolio-filter-chip${activeOption === option ? " is-active" : ""}`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
