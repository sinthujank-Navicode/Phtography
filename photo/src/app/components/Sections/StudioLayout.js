import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";

export default function StudioLayout() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] md:min-h-[70vh] px-5">
      <div className="bg-red-600 md:min-h-[56vh]  min-h-[60vh] text-white p-6 md:p-8 md:rounded-[3rem] rounded-lg flex flex-col md:flex-row gap-6 items-center relative w-full max-w-[97rem]">
        {/* Text Section */}
        <div className="space-y-12 text-center md:text-left ">
          <h2 className="text-3xl md:text-6xl font-bold">
            Step Into Our World
          </h2>
          <p className="text-base md:text-lg">
            Explore our studio like never before with our cutting-edge 3D{" "}
            <br className="hidden md:block" />
            visualization. Take a virtual tour and experience the ambiance,
            creativity, and innovation.
          </p>
          <button className="bg-white text-red-600 font-semibold py-2 md:py-3  md:px-7 px-4 rounded-md hover:bg-gray-200 transition flex items-center gap-2 mx-auto md:mx-0">
            Explore Our Studio <SlArrowRightCircle />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-[420px] flex justify-center">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
            <Image
              src="/images/thumb2.jpg"
              alt="Studio Image 1"
              width={200}
              height={300}
              className="rounded-xl right-4 "
            />
            <Image
              src="/images/thumb2.jpg"
              alt="Studio Image 2"
              width={200}
              height={300}
              className="rounded-xl md: absolute md:right-[-23rem] md:w-[10rem] md:top-[4.5rem] md:h-[12rem]"
            />
          </div>

          {/* Absolute positioned image - only on md and above */}
          <Image
            src="/images/thumb2.jpg"
            alt="Studio Image 3"
            width={200}
            height={500}
            className="rounded-xl hidden md:block md:h-[16rem] "
            style={{
              position: "absolute",
              bottom: "60px",
              right: "-400px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
