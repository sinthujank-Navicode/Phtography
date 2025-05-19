// components/CreativitySection.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/thumb1.jpg",
  "/images/thumb2.jpg",
  "/images/thumb1.jpg",
  "/images/vintage-camera.jpg",
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = (end / duration) * 20;
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);
  }, [end]);

  return <span>{count}+</span>;
};

const CreativitySection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 gap-6">
      <div className="flex justify-center gap-4 md:w-1/2 w-full bg-pink-100 p-4 sm:p-6 lg:p-10 rounded-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 rounded-2xl">
          {/* First Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-span-2 sm:col-span-2 lg:col-span-2 row-span-4 lg:row-span-3 rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={images[0]}
              alt="Creative Image 1"
              width={400}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-md row-span-4 col-span-1"
          >
            <Image
              src={images[1]}
              alt="Creative Image 2"
              width={400}
              height={300}
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>

          {/* Third Image */}
          <motion.div
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="rounded-xl overflow-hidden shadow-md row-span-1 col-span-1"
          >
            <Image
              src={images[2]}
              alt="Creative Image 3"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>

          {/* Fourth Image  */}
          <motion.div
            key={3}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="rounded-xl overflow-hidden shadow-md row-span-1 col-span-1"
          >
            <Image
              src={images[3]}
              alt="Creative Image 4"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Text and Counters */}
      <div className="md:w-1/2 w-full text-center md:text-left p-4">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          className=" sm:text-3xl md:text-4xl font-bold mb-4 text-gray-600"
        >
          Unmatched Creativity
        </motion.h2>{" "}
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 text-gray-700 text-sm sm:text-base md:text-lg"
        >
          With over 10 years of experience, we have captured countless moments
          and crafted stunning visuals.Our team&apos;s dedication and passion
          have led to numerous awards and...
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-800 md:mt-[4rem]">
          <div className="text-lg sm:text-xl md:text-sm font-bold">
            <p className="md:text-2xl">
              <Counter end={550} />
            </p>
            <p className="text-gray-500 md:text-sm">Happy Clients</p>
          </div>
          <div className="text-lg sm:text-xl md:text-sm font-bold">
            <p className="md:text-2xl">
              <Counter end={38} />
            </p>
            <p className="text-gray-500 ">Awards Won</p>
          </div>
          <div className="text-lg sm:text-xl md:text-sm font-bold">
            <p className="md:text-2xl">
              <Counter end={9000} />
            </p>
            <p className="text-gray-500">Captured Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativitySection;
