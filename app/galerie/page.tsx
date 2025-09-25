"use client";

import Image from "next/image";

const photos = [
  {
    src: "/images/pasteur.jpg",
    alt: "Pasteur de l église",
  },
  {
    src: "/images/interieur.jpg",
    alt: "Intérieur de l église pendant un culte",
  },
  {
    src: "/images/mpila.jpg",
    alt: "Le representant légal de la communauté MIEVI",
  },
  {
    src: "/images/culte.jpg",
    alt: "Pendant le culte",
  },
  {
    src: "/images/temple.jpg",
    alt: "Le temple de l&apos;église",
  },
  {
    src: "/images/duo.jpg",
    alt: "Père et Fils",
  },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Galerie de l&apos;Église
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez en images la vie de notre église, nos cultes et nos
            événements spéciaux.
          </p>
        </div>

        {/* Grid de photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Légende au survol */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-medium transition duration-300">
                {photo.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
