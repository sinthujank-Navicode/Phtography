"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/images/thumb1.jpg",
  "/images/thumb1.jpg",
  "/images/thumb1.jpg",
];

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div>
      <div className="min-h-[70vh]  flex items-center justify-center p-4 sm:p-6 overflow-x-hidden">
        <div className="w-full max-w-[83rem] flex flex-col md:flex-row md:items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center p-4"
          >
            <h1 className="md:text-7xl text-4xl font-bold text-gray-800 mb-4">
              Unleash the <br/>Art of <br/>Photography
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              At Capture Studio, we specialize in capturing life’s most precious
              moments, transforming them into timeless works of art.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              }}
              className="bg-red-600 text-white font-semibold rounded-md px-6 py-2 w-max flex items-center gap-2"
            >
              Book Your Session Now
              <ChevronRight size={16} />
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-4">
          {/* Main Image */}
          <motion.div
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Image
              src={images[0]}
              alt="Main Hero Image"
              width={600}
              height={360}
              className="rounded-lg object-cover md:w-full w-[22rem]  h-[30vh]"
            />
          </motion.div>

          {/* Thumbnails */}
          <div className="md:right-[15px] flex flex-col sm:flex-row md:gap-5 gap-3 md:w-[74.6vh] w-[22.5rem] relative">
            {images.slice(1).map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} className="flex-1">
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover md:w-[39rem] w-[27rem] md:h-[20vh]"
                />
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
