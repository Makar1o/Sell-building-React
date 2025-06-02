import React, { useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/house-carusel-1.jpg", alt: "House 1" },
  { src: "/images/house-carusel-2.jpg", alt: "House 2" },
  { src: "/images/house-carusel-3.jpg", alt: "House 3" },
  { src: "/images/house-carusel-4.jpg", alt: "House 4" },
];

export default function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) newIndex = images.length - 1;
    else if (newIndex >= images.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      updateIndex(currentIndex + 1);
    }, 4000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    resetInterval();
  };

  return (
    <section className="about-container">
      <h2 className="topic-about">About Us</h2>
      <div className="about-content">
        <div className="about-text">
          <h3 className="about-under-topic">
            Building Foundations Creating Futures
          </h3>
          <p className="about-p">
            We build more than just houses—we create strong foundations for your
            future. With reliability, quality, and comfort at our core, we use
            modern innovations.
          </p>
          <p className="about-p">
            Our team is committed to offering the highest standard of service,
            ensuring every step of the process is as seamless as possible.
            Whether you are looking for a new home or an investment opportunity,
            we're here to guide you.
          </p>
          <button className="bigger-primary-btn primary-btn">Learn More</button>
        </div>
        <div
          className="benefits-building"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="image-carousel">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
            <button
              className="carousel-arrow prev"
              onClick={() => {
                updateIndex(currentIndex - 1);
                resetInterval();
              }}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              className="carousel-arrow next"
              onClick={() => {
                updateIndex(currentIndex + 1);
                resetInterval();
              }}
              aria-label="Next slide"
            >
              ›
            </button>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleDotClick(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
