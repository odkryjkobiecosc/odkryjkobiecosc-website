// components/PortfolioGallery.tsx

"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

type GalleryItem = {
  image: StaticImageData;
  alt: string;
  className: string;
};

type PortfolioGalleryProps = {
  images: GalleryItem[];
};

const INITIAL_VISIBLE = 15;

export default function PortfolioGallery({
  images,
}: PortfolioGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const visibleImages = expanded
    ? images
    : images.slice(0, INITIAL_VISIBLE);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false);

      requestAnimationFrame(() => {
        galleryRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      return;
    }

    setExpanded(true);
  };

  return (
    <>
      <div
        ref={galleryRef}
        className={`galleryGrid ${
          expanded ? "galleryGridExpanded" : "galleryGridCollapsed"
        }`}
      >
        {visibleImages.map((item, index) => (
          <div className={item.className} key={item.image.src}>
            <Image
              src={item.image}
              alt={item.alt}
              sizes="(max-width: 560px) 92vw, (max-width: 980px) 45vw, (max-width: 1280px) 31vw, 24vw"
              className="galleryImage"
              loading={index < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {images.length > INITIAL_VISIBLE && (
        <div className="galleryMoreWrap">
          <button
            type="button"
            className="galleryMoreButton"
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-controls="portfolio"
          >
            <span>
              {expanded ? "Pokaż mniej" : "Pokaż więcej zdjęć"}
            </span>

            <span
              className={`galleryMoreArrow ${
                expanded ? "isExpanded" : ""
              }`}
              aria-hidden="true"
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </>
  );
}
