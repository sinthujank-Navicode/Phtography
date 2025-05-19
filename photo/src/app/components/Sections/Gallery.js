import Image from "next/image";

const images = [
  { src: "/images/img1.jpg", classes: "col-span-2" },
  { src: "/images/img1.jpg", classes: "col-start-3 row-start-1" },
  { src: "/images/img1.jpg", classes: "row-span-2 col-start-1 row-start-2" },
  { src: "/images/img1.jpg", classes: "col-span-2 col-start-2 row-start-2" },
  { src: "/images/img1.jpg", classes: "col-start-2 row-start-3" },
  { src: "/images/img1.jpg", classes: "col-start-3 row-start-3" },
];

export default function GalleryPage() {
  return (
    <div className=" min-h-screen p-6">
      {/* Header Section */}
      <div className="text-start max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Journey Through Our Gallery
        </h1>
        <p className="text-gray-600 text-lg">
          Immerse yourself in the captivating world of photography.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 md:gap-7 gap-1 max-w-7xl mx-auto  h-auto md:h-[90vh]">
      {images.map((img, index) => (
          <div key={index} className={`${img.classes} p-1`}>
            <Image
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              width={1000} // Change to a larger dimension to fit your design
              height={1000} // Adjust based on the actual image size or aspect ratio
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
