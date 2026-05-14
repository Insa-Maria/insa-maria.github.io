import { useState } from "react";
import { projects } from "../data/projects";
import ProjectGrid from "../components/ProjectGrid";
import "./Portfolio.css";

export default function Portfolio() {
  const [activeContext, setActiveContext] = useState("All");
  const [activeOutput, setActiveOutput] = useState("All");

  const contexts = ["All", ...new Set(projects.flatMap(p => p.contexts ?? []))];
  const outputs = ["All", ...new Set(projects.flatMap(p => p.outputs ?? []))];

  const filteredProjects = projects.filter(project => {
    const matchesContext =
      activeContext === "All" || project.contexts?.includes(activeContext);

    const matchesOutput =
      activeOutput === "All" || project.outputs?.includes(activeOutput);

    return matchesContext && matchesOutput;
  });

  return (
    <section className="section portfolio-page">
      <div className="container">
        <h1>Work</h1>
        <p className="section-intro portfolio-intro">
          Filter the archive by the context of the work and the kind of output I
          delivered. This replaces generic industry labels with categories that
          better describe complex data, HCI, AI, and visual communication work.
        </p>

        <div className="portfolio-filters" aria-label="Project filters">
          <FilterGroup
            label="Context"
            options={contexts}
            activeOption={activeContext}
            onChange={setActiveContext}
          />
          <FilterGroup
            label="Output"
            options={outputs}
            activeOption={activeOutput}
            onChange={setActiveOutput}
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
