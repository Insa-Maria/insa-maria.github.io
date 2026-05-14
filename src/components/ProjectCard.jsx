import { Link } from "react-router-dom";
import { resolveProjectThumbnailSrc } from "../utils/projectImages";

export default function ProjectCard({ project, labels = [project.impact], index = 0 }) {
  const visibleTags = project.tags.slice(0, 3);
  const remainingTagCount = project.tags.length - visibleTags.length;
  const coverImageSrc = resolveProjectThumbnailSrc(project.coverImage);
  const isPriorityImage = index < 3;

  return (
    <Link to={`/project/${project.id}`} className="project-card-link">
      <div className="card">
        <div className="project-card-media">
          <img
            src={coverImageSrc}
            alt=""
            loading={isPriorityImage ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={isPriorityImage ? "high" : "auto"}
          />
          <div className="project-card-impact">{project.impact}</div>
        </div>

        <div className="project-card-body">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-card-footer">
            {labels.length > 0 && (
              <div className="project-labels" aria-label="Project highlights">
                {labels.map(label => (
                  <span key={label} className="badge badge-highlight">
                    {label}
                  </span>
                ))}
              </div>
            )}

            <div className="project-tags" aria-label="Project tags">
              {visibleTags.map(tag => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
              {remainingTagCount > 0 && (
                <span className="badge badge-muted">+{remainingTagCount}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
