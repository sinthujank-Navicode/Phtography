"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
  "/images/thumb1.jpg",
  "/images/thumb2.jpg",
  "/images/thumb1.jpg",
];

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row md:items-center gap-8">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center p-4"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Unleash the Art of Photography
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
          <div className="md:w-1/2 flex flex-col gap-4">
            <motion.div
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={images[0]}
                alt="Main Hero Image"
                width={400}
                height={400}
                className="rounded-lg object-cover "
              />
            </motion.div>
            <div className="flex gap-4 mt-4">
              {images.slice(1).map((src, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }}>
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
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
