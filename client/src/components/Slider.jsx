import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full mx-auto">
      {imageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div
            className="absolute left-4 cursor-pointer z-50"
            onClick={() => changeSlide("left")}
          >
            <IoIosArrowBack className="text-6xl md:text-8xl text-white" />
          </div>
          <div className="imgContainer max-w-full max-h-full">
            <img
              src={images[imageIndex]}
              alt="Current Slide"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div
            className="absolute right-4 cursor-pointer z-50"
            onClick={() => changeSlide("right")}
          >
            <IoIosArrowForward className="text-6xl md:text-8xl text-white" />
          </div>
          <div
            className="absolute top-4 right-4 cursor-pointer text-white text-xl z-50"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}
      <div className="bigImage mb-4">
        <img
          src={images[0]}
          alt="Main Image"
          className="w-full h-auto max-h-80 object-cover cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages flex justify-center space-x-4 overflow-x-auto">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            key={index}
            className="w-24 h-24 object-cover cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
