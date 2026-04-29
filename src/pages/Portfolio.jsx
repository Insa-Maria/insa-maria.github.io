import { useState } from "react";
import { projects } from "../data/projects";
import ProjectGrid from "../components/ProjectGrid";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState([]);

  // --- Categories (auto-generated)
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  // --- Tags (auto-generated)
  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  // --- Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // --- Filtering logic
  const filteredProjects = projects.filter(project => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every(tag => project.tags.includes(tag));

    return matchesCategory && matchesTags;
  });

  return (
    <section className="section">
      <div className="container">
        <h1>Work</h1>

        {/* CATEGORY FILTER */}
        <div style={{ marginBottom: "24px" }}>
          {categories.map(cat => (
            <button
              key={cat}
              className="btn"
              onClick={() => setActiveCategory(cat)}
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                background: activeCategory === cat ? "#111" : "white",
                color: activeCategory === cat ? "white" : "black"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* TAG FILTER */}
        <div style={{ marginBottom: "32px" }}>
          {allTags.map(tag => (
            <button
              key={tag}
              className="badge"
              onClick={() => toggleTag(tag)}
              style={{
                marginRight: "8px",
                marginBottom: "8px",
                cursor: "pointer",
                background: selectedTags.includes(tag) ? "#111" : "#f0f0f0",
                color: selectedTags.includes(tag) ? "white" : "black"
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* RESULTS */}
        <p style={{ marginBottom: "16px" }}>
          {filteredProjects.length} projects found
        </p>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
}
