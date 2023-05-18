import { useState } from "react";
import images from "./images";
import "./Index.css";
export const CarruselImge = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="image">
        <button onClick={handlePrevClick}>Previous</button>
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex - 1}`}
        />
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};
