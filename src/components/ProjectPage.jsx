import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import {
  getProjectImageSrc,
  projectAssetFiles,
  resolveProjectImageSrc
} from "../utils/projectImages";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="section container">Not found</div>;

  const automaticImageSections = getAutomaticImageSections(project);
  const imageSections = mergeImageSections(
    project.imageSections ?? [],
    automaticImageSections
  );
  const coverImageSrc = resolveProjectImageSrc(project.coverImage);
  const supportingImageSections = imageSections.filter(
    section => resolveProjectImageSrc(section.src) !== coverImageSrc
  );

  const overviewParagraphs =
    project.overview ?? [project.description, project.problem, project.solution].filter(Boolean);
  const detailSections = [
    { title: "Impact", items: project.impactDetails },
    { title: "Decisions Enabled", items: project.ux },
    { title: "Technical Overview", items: project.tech }
  ].filter(section => section.items?.length);

  return (
    <main className="project-page">
      <article className="container project-article">
        <Link to="/work" className="project-back-link">
          Back to work
        </Link>

        <header className="project-intro">
          <h1>{project.title}</h1>
          <p className="project-hero-lead">
            {project.hook ?? project.description}
          </p>

          <div className="project-meta-row">
            <span>{project.category}</span>
            <span>{project.impact}</span>
            {project.top && <span>Top project</span>}
          </div>

          {project.sourceLinks?.length > 0 && (
            <div className="project-source-links">
              {project.sourceLinks.map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <figure className="project-main-figure">
          <img src={coverImageSrc} alt="" />
        </figure>

        <section className="project-overview">
          <div>
            <h2>Overview</h2>
          </div>

          <div className="project-overview-copy">
            {overviewParagraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {supportingImageSections.length > 0 && (
          <section className="project-visual-story">
            {supportingImageSections.map(section => (
              <figure key={`${section.src}-${section.title}`}>
                <img src={resolveProjectImageSrc(section.src)} alt="" />
                <figcaption>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </figcaption>
              </figure>
            ))}
          </section>
        )}

        {detailSections.length > 0 && (
          <section className="project-evidence-list">
            {detailSections.map(section => (
              <ProjectListBlock
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </section>
        )}
      </article>
    </main>
  );
}

function getAutomaticImageSections(project) {
  const matchingFiles = projectAssetFiles.filter(fileName => {
    const baseName = fileName.replace(/\s\(\d+\)(?=\.)/, "").replace(/\.[^.]+$/, "");
    return baseName === project.id || `/assets/full/${fileName}` === project.coverImage;
  });

  return matchingFiles.map((fileName, index) => ({
    src: getProjectImageSrc(fileName),
    title: index === 0 ? "Project View" : `Project View ${index + 1}`,
    description: project.description
  }));
}

function mergeImageSections(primarySections, fallbackSections) {
  const seenSources = new Set();

  return [...primarySections, ...fallbackSections].filter(section => {
    if (!section?.src || seenSources.has(section.src)) return false;
    seenSources.add(section.src);
    return true;
  });
}

function ProjectListBlock({ title, items }) {
  return (
    <section className="project-evidence-row">
      <h2>{title}</h2>
      <ul className="project-detail-list">
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
