import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, getLabels }) {
  return (
    <div className="grid grid-3">
      {projects.map((p, index) => (
        <ProjectCard
          key={p.id}
          project={p}
          index={index}
          labels={getLabels ? getLabels(p) : undefined}
        />
      ))}
    </div>
  );
}
