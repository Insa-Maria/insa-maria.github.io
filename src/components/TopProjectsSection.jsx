import { projects } from "../data/projects";
import ProjectGrid from "./ProjectGrid";

export default function TopProjectsSection() {
  const topProjects = projects.filter(p => p.top);
  const topProjectLabels = {
    "crop-monitoring": ["Used in prod"],
    "3d-inspection-platform": ["Used in real tunnels"],
    "rave-of-fairness": ["Research workshop"]
  };

  return (
    <section id="work" className="section top-projects-section">
      <div className="container">
        <h2>Top Projects</h2>
        <p className="section-intro">
          These are projects that made a real difference, and show why the
          work mattered for the product and the people using them as decision-support tools.
        </p>

        <ProjectGrid
          projects={topProjects}
          getLabels={(project) => topProjectLabels[project.id] ?? [project.impact]}
        />
      </div>
    </section>
  );
}
