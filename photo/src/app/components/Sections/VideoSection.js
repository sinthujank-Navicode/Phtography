"use client";

import React from "react";

// Only YouTube video URLs
const videos = [
  { video: "https://www.youtube.com/embed/ScMzIvxBSi4" },
  { video: "https://www.youtube.com/embed/kXYiU_JCYtU" },
  { video: "https://www.youtube.com/embed/e-ORhEE9VVg" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  { video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
];

// Video Card Component
const VideoCard = ({ videoData }) => {
  return (
    <div className="min-w-[300px] md:min-w-[400px] snap-start rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-105 bg-white">
      <iframe
        src={videoData.video}
        className="w-full h-56 sm:h-64 md:h-72"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Main Video Section Component
const VideoSection = () => {
  return (
    <main className="px-4 md:px-8 py-10">
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

      {/* Horizontal scrollable area with scrollbar hidden */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 custom-scrollbar">
        {videos.map((video, index) => (
          <VideoCard key={index} videoData={video} />
        ))}
      </div>

      {/* Inline CSS to hide scrollbar */}
      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </main>
  );
};

export default VideoSection;
