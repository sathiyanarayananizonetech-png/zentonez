import React from "react";

// Asset Imports
import interiorImg from "../../assets/salon_interior_luxury.png";
import heroImg from "../../assets/hero_salon.png";
import hairImg from "../../assets/hair_styling.png";
import makeupImg from "../../assets/makeup_artist.png";
import bridalImg from "../../assets/bridal_makeup.png";
import bridal2Img from "../../assets/bridal makeup2.png";
import skinImg from "../../assets/skin_care.png";
import spaImg from "../../assets/spa_treatment.png";
import nailImg from "../../assets/nail_art.png";
import vesselImg from "../../assets/luxury_salon_vessel.png";
import logoImg from "../../assets/zentonsz.png";

const BookGallery: React.FC = () => {
  const pages = [
    { front: heroImg, back: interiorImg },
    { front: hairImg, back: makeupImg },
    { front: bridalImg, back: bridal2Img },
    { front: skinImg, back: spaImg },
    { front: nailImg, back: vesselImg },
    { front: heroImg, back: logoImg }, // Final branded page
  ];

  return (
    <div className="book-gallery-container w-full h-full min-h-svh relative flex items-center justify-center overflow-hidden bg-white">
      <style>{`
        @property --page-rotate {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }
        @property --spine-shift {
          syntax: "<length>";
          inherits: true;
          initial-value: 0px;
        }

        .scene {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .bg-typography {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          font-size: clamp(3rem, 12vw, 12rem);
          font-weight: 800;
          line-height: 0.8;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5vw;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: exclusion;
          color: white;
          text-transform: uppercase;
        }

        .galeria-book-3d {
          position: relative;
          width: 280px;
          height: 400px;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
          transform: translateX(var(--spine-shift, 0px)) scale(var(--book-scale, 1));
          /* No transition on spine-shift/scale to let GSAP handle it */
        }

        .book-page {
          position: absolute;
          width: 280px;
          height: 400px;
          perspective: 1200px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-origin: left center;
          --page-rotate: 0deg;
          transform: rotateY(var(--page-rotate));
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          /* No transition here, let GSAP control it */
        }

        .book-page img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          background: #fdfcfb;
          backface-visibility: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .book-page img:nth-child(2) {
          transform: rotateY(180deg) translateZ(1px);
          z-index: 1;
        }

        /* Adjustments for mobile */
        @media (max-width: 768px) {
           .galeria-book-3d, .book-page {
             width: 180px;
             height: 260px;
           }
        }
      `}</style>

      <div className="scene w-full h-full flex items-center justify-center">
        <div className="bg-typography">
          <span>Book</span>
          <span>Gallery</span>
        </div>

        <div className="galeria-book-3d">
          {pages.map((page, index) => (
            <div
              key={index}
              className="book-page"
              data-index={index}
              style={
                {
                  "--i": index,
                  zIndex: 10 - index,
                } as React.CSSProperties
              }
            >
              <img src={page.front} alt={`Front ${index + 1}`} />
              <img src={page.back} alt={`Back ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookGallery;
