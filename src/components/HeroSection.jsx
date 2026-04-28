import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectImageSources } from "../utils/projectImages";
import "./HeroSection.css";

const visibleImageCount = 8;

export default function HeroSection() {
  const [gridImages, setGridImages] = useState(
    projectImageSources.slice(0, visibleImageCount)
  );

  useEffect(() => {
    let previousIndex = -1;

    const intervalId = window.setInterval(() => {
      setGridImages((currentImages) => {
        let nextIndex = Math.floor(Math.random() * currentImages.length);

        if (currentImages.length > 1) {
          while (nextIndex === previousIndex) {
            nextIndex = Math.floor(Math.random() * currentImages.length);
          }
        }

        const replacementOptions = projectImageSources.filter(
          (src) => !currentImages.includes(src)
        );
        const nextImages = [...currentImages];

        if (replacementOptions.length > 0) {
          nextImages[nextIndex] =
            replacementOptions[
              Math.floor(Math.random() * replacementOptions.length)
            ];
        } else {
          let swapIndex = Math.floor(Math.random() * currentImages.length);

          while (swapIndex === nextIndex) {
            swapIndex = Math.floor(Math.random() * currentImages.length);
          }

          [nextImages[nextIndex], nextImages[swapIndex]] = [
            nextImages[swapIndex],
            nextImages[nextIndex],
          ];
        }

        previousIndex = nextIndex;

        return nextImages;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        {gridImages.map((src, index) => (
          <div key={index} className="hero-grid-item">
            <img key={src} src={src} alt="" />
          </div>
        ))}
      </div>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            <span className="hero-title-highlight">
              Maria Insa designs and builds
              <br />
              intelligent systems for decision-making.
            </span>
            <br />
            <span className="hero-subtitle">She makes complex systems simple.</span>
          </h1>

          <div className="hero-buttons">
            <Link to="/work">
              <button className="btn btn-work">View work</button>
            </Link>

            <a href="#work">
              <button className="btn btn-glow">Top projects</button>
            </a>

            <Link to="/contact">
              <button className="btn">Get in touch</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
