import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, getLabels }) {
  return (
    <div className="grid grid-3">
      {projects.map(p => (
        <ProjectCard
          key={p.id}
          project={p}
          labels={getLabels ? getLabels(p) : undefined}
        />
      ))}
    </div>
  );
}
