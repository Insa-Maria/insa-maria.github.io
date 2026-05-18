import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";
import {
  getProjectImageSrc,
  projectAssetFiles,
  resolveProjectImageSrc
} from "../utils/projectImages";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) return <div className="section container">Not found</div>;

  const automaticImageSections = getAutomaticImageSections(project);
  const imageSections = mergeImageSections(
    project.imageSections ?? [],
    automaticImageSections
  );
  const coverImageSrc = resolveProjectImageSrc(project.coverImage);

  // Build flat list of all images for lightbox
  const allImages = imageSections.map(section => ({
    src: resolveProjectImageSrc(section.src),
    title: section.title,
    description: section.description
  }));

  const supportingImages = imageSections.filter(
    section => resolveProjectImageSrc(section.src) !== coverImageSrc
  );
  const singleImage = supportingImages.length === 0;

  const handlePrevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const overviewParagraphs =
    project.overview ?? [project.description, project.problem, project.solution].filter(Boolean);
  const detailSections = [
    { title: "Impact", items: project.impactDetails },
    { title: "Decisions Enabled", items: project.ux },
    { title: "Technical Overview", items: project.tech }
  ].filter(section => section.items?.length);
  const relatedProjects = (project.relatedProjectIds ?? [])
    .map(relatedId => projects.find(candidate => candidate.id === relatedId))
    .filter(Boolean);

  return (
    <main className="project-page">
      <article className="container project-article">
        <Link to="/work" className="project-back-link">
          Back to work
        </Link>

        <header className="project-intro">
          <div className="project-intro-top">
            <div>
              <h1>{project.title}</h1>
              <p className="project-hero-lead">
                {project.hook ?? project.description}
              </p>
            </div>

            {project.sourceLinks?.length > 0 && (
              <div className="project-source-actions">
                {project.sourceLinks.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="project-meta-row">
            <span>{project.category}</span>
            <span>{project.impact}</span>
            {project.top && <span>Top project</span>}
          </div>
        </header>

        {imageSections.length > 0 && (
          <section className="project-image-gallery">
            <div className={`project-image-grid${singleImage ? " project-image-grid--single" : ""}`}>
              <div className="project-image-main">
                <img
                  src={coverImageSrc}
                  alt={imageSections[0]?.title || "Project"}
                  onClick={() => handleImageClick(0)}
                  style={{ cursor: "pointer" }}
                />
              </div>
              {supportingImages.length > 0 && (
                <div className="project-image-thumbnails">
                  {supportingImages.map((section, idx) => (
                    <img
                      key={`${section.src}-thumb`}
                      src={resolveProjectImageSrc(section.src)}
                      alt={section.title}
                      onClick={() => handleImageClick(idx + 1)}
                      style={{ cursor: "pointer" }}
                      className="project-image-thumbnail"
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {lightboxOpen && allImages.length > 0 && (
          <div className="project-lightbox-overlay" onClick={() => setLightboxOpen(false)}>
            <div className="project-lightbox" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>×</button>
              <img src={allImages[lightboxIndex].src} alt="" className="lightbox-image" />
              <div className="lightbox-info">
                <h3>{allImages[lightboxIndex].title}</h3>
                <p>{allImages[lightboxIndex].description}</p>
              </div>
              {allImages.length > 1 && (
                <div className="lightbox-nav">
                  <button onClick={handlePrevImage} className="lightbox-prev">←</button>
                  <span className="lightbox-counter">{lightboxIndex + 1} / {allImages.length}</span>
                  <button onClick={handleNextImage} className="lightbox-next">→</button>
                </div>
              )}
            </div>
          </div>
        )}

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

        {relatedProjects.length > 0 && (
          <section className="project-related">
            <h2>Related Work</h2>
            <div className="project-related-list">
              {relatedProjects.map(relatedProject => (
                <Link
                  key={relatedProject.id}
                  to={`/project/${relatedProject.id}`}
                  className="project-related-card"
                >
                  <span>{relatedProject.category}</span>
                  <strong>{relatedProject.title}</strong>
                  <p>{relatedProject.description}</p>
                </Link>
              ))}
            </div>
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
