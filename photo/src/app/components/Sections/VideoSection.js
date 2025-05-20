"use client";

import React, { useState, useEffect } from "react";

// Video data array
const videos = [
  {
    title: "Suprise",
    category: "Wedding",
    rating: 4.8,
    views: "1.2M",
    isFree: true,
    video: "/videos/london.mp4",
  },
  {
    title: "Wedding Gallery",
    category: "Wedding",
    rating: 4.6,
    views: "980K",
    isFree: false,
    video: "/videos/barcelona.mp4",
  },
  {
    title: "Wedding hands",
    category: "Wedding",
    rating: 4.9,
    views: "2.3M",
    isFree: false,
    video: "/videos/newyork.mp4",
  },
  {
    title: "Wedding couples",
    category: "Wedding",
    rating: 4.7,
    views: "1.1M",
    isFree: true,
    video: "/videos/rome.mp4",
  },
];

// Video Card Component
const VideoCard = ({ videoData }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-105 bg-white">
      <div className="relative">
        <video
          src={videoData.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-48 sm:h-56 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">
          {videoData.title}
        </h3>
        <p className="text-sm text-gray-500">{videoData.category}</p>
        <div className="flex items-center mt-2 space-x-2 text-sm">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded">
            {videoData.rating}
          </span>
          <span className="text-gray-600">· {videoData.views} views</span>
        </div>
        <p className="mt-2 text-sm font-medium text-gray-700">
          {videoData.isFree ? "Free to watch" : "Premium content"}
        </p>
      </div>
    </div>
  );
};

// Carousel Navigation Buttons
const CarouselControls = ({ scrollRef }) => (
  //
  <></>
);

// Main Video Section
const VideoSection = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const scrollRef = React.useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="px-4 md:px-8 py-10 bg-gray-50 ">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Discover Our Featured Wedding Videos
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Handpicked wedding moments from cities around the world. Explore and
          enjoy!
        </p>
      </div>

      {isMobileOrTablet ? (
        <div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide pb-4"
          >
            {videos.map((video, index) => (
              <div key={index} className="min-w-[80%] sm:min-w-[60%]">
                <VideoCard videoData={video} />
              </div>
            ))}
          </div>
          <CarouselControls scrollRef={scrollRef} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} videoData={video} />
          ))}
        </div>
      )}
    </main>
  );
};

export default VideoSection;
