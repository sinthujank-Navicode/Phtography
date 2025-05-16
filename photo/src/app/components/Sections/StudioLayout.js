import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
export default function StudioLayout() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-screen px-5 ">
      <div className="bg-red-600 text-white p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold">Step Into Our World</h2>
          <p className="text-lg">
            Explore our studio like never before with our cutting-edge 3D <br />
            visualization. Take a virtual tour and experience the ambiance,
            creativity, and innovation.
          </p>
          <button className="bg-white text-red-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition flex items-center gap-2">
            Explore Our Studio <SlArrowRightCircle />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/images/thumb2.jpg"
            alt="Studio Image 1"
            width={200}
            height={300}
            className="rounded-xl"
          />
          <Image
            src="/images/thumb2.jpg"
            alt="Studio Image 2"
            width={200}
            height={300}
            className="rounded-xl"
          />
          <Image
            src="/images/thumb2.jpg"
            alt="Studio Image 3"
            width={200}
            height={300}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
