"use client";
import React, { useState } from "react";

const expertiseData = [
  {
    imgSrc: "/images/thumb1.jpg",
    title: "Map",
  },
  {
    imgSrc: "/images/thumb2.jpg",
    title: "Culture",
  },
  {
    imgSrc: "/images/thumb1.jpg",
    title: "Personality",
  },
  {
    imgSrc: "/images/thumb2.jpg",
    title: "Step 4",
  },
  {
    imgSrc: "/images/thumb1.jpg",
    title: "Step 5",
  },
  {
    imgSrc: "/images/thumb2.jpg",
    title: "Step 6",
  },
];

export default function ExpertiseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (expertiseData.length / 3)
    );
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + expertiseData.length / 3) % (expertiseData.length / 3)
    );
  };

  const displayedImages = expertiseData
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(currentIndex * 3, currentIndex * 3 + 3);

  const progressPercentage = (currentIndex + 1) * 50;

  return (
    <div className="bg-pink-50 p-4 md:p-1 md:py-13 max-w-7xl mx-auto">
      <h1 className="text-xl md:text-3xl font-bold mb-4 text-gray-600 text-center md:text-left">
        Your Vision, Our Expertise
      </h1>
      <p className="mb-6 text-gray-600 text-sm md:text-base text-center md:text-left">
        At Capture Studio, we understand that <br /> every client has unique
        needs and desires.
        <br /> That’s why we collaborate closely with you, <br /> ensuring that
        your vision is brought to life.
      </p>

      <div className="flex justify-center md:justify-start">
        <button className="bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded mb-4 md:mb-8">
          Request a Consultation
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className={`transform transition-all duration-300 md:ml-[-1rem] ${
              index % 3 === 1
                ? "mt-4 md:mt-8"
                : index % 3 === 2
                ? "mt-8 md:mt-16"
                : ""
            }`}
          >
            <div className="p-2 md:p-4 w-full sm:w-40 flex flex-col items-center justify-center">
              <img
                src={image.imgSrc}
                alt={image.title}
                className="rounded-lg mb-2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover"
              />
              <h2 className="text-md md:text-lg font-semibold text-center text-gray-600">
                {image.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center mt-4 gap-2">
        <div
          className="w-1/4 md:w-1/3 bg-gray-300 rounded-full h-1 cursor-pointer"
          onClick={(e) => {
            const { left, width } = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - left;
            const newIndex = clickX < width / 2 ? 0 : 1;
            setCurrentIndex(newIndex);
          }}
        >
          <div
            className="bg-blue-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <button
          onClick={handleNext}
          className="text-blue-500 text-sm md:text-base"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}
