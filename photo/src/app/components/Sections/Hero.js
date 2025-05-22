"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = ["/images/hero1.webp", "/images/hero6.jpg", "/images/hero5.jpg"];

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div>
      <div className="min-h-[80vh]  flex items-center justify-center p-4 sm:p-6 overflow-x-hidden">
        <div className="w-full max-w-[83rem] flex flex-col md:flex-row md:items-center gap-12">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="md:w-1/2 flex flex-col justify-center p-4"
          >
            <h1 className="md:text-7xl text-4xl font-bold text-gray-800 mb-4">
              Unleash the <br />
              Art of <br />
              Photography
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
              className="bg-red-600 text-white font-semibold rounded-md px-6 py-3 w-max flex items-center gap-2"
            >
              Book Your Session Now
              <ChevronRight size={16} />
            </motion.button>
          </motion.div>

          {/* Image Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-4">
            {/* Main Image */}

            <Image
              src={images[0]}
              alt="Main Hero Image"
              width={600}
              height={400}
              className="rounded-lg object-cover w-[24rem] md:w-[40rem] aspect-[3/2] md:h-[22rem] "
            />

            {/* Thumbnails */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 w-full max-w-[40rem]">
              {images.slice(1).map((src, index) => (
                <div key={index} className="w-full sm:w-1/2">
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    width={400}
                    height={267}
                    className="rounded-lg object-cover w-full aspect-[3/2] h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
