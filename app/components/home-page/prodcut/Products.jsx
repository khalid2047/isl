
"use client";

import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      title: "COLD ROLLED STEEL",
      image: "/images/cold-rolled.png",
      description:
        "ISL's Cold Rolled steel is manufactured on a modern, state-of-the-art Cold Rolling mill designed by SMS Siemag...",
    },
    {
      title: "HOT DIPPED GALVANIZED STEEL",
      image: "/images/Hot_Dip_img.png",
      description:
        "Galvanization is the process of applying a protective zinc coating to steel, to prevent rust and corrosion...",
    },
    {
      title: "COLOR COATED STEEL",
      image: "/images/color_coated_coil_img.png",
      description:
        "Color Coated Steel is ISL’s high value-added product. Polyester (PE), Polyvinylidene Difluoride (PVDF)...",
    },
    {
      title: "SERVICE CENTER",
      image: "/images/service-center.png",
      description:
        "ISL Service Center shapes flat rolled steel into various forms for a wide range of industrial and commercial applications...",
      icons: true,
    },
  ];

  return (
    <section className="bg-white">
       {/* Section Title */}
        <h1 className="text-white bg-green-700 text-center py-9  md:text-[45px] text-2xl sm:text-3xl">
  PRODUCTS & VALUE-ADDED SERVICES OFFERED
</h1>

      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-[#eef1ef] px-6 py-10 text-center flex flex-col items-center py-18
              ${index !== products.length - 1 ? `
                after:content-['']
                after:absolute
                after:top-0
                after:right-[-40px]
                after:w-[80px]
                after:h-full
                after:bg-gradient-to-r
                after:from-black/20
                after:via-black/10
                after:to-transparent
                after:skew-y-[-12deg]
                after:origin-left
                after:blur-sm
                after:pointer-events-none
                hidden lg:flex
              ` : ""}`}
            >
              {/* Title */}
              <h3 className="text-green-700  mb-6 text-[25px] ">
                {product.title}
              </h3>

              {/* Image */}
              <div className="relative w-64 h-64 mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {product.description}
              </p>

             
              {/* Buttons */}
              <div className="flex gap-1 flex-wrap justify-center mt-auto">
                <button className="border border-gray-400 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-200 transition">
                  Explore
                </button>
                <button className="border border-gray-400 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-200 transition">
                  Get Inquiry
                </button>
                <button className="border border-gray-400 text-gray-600 px-2 py-2 rounded-full hover:bg-gray-200 transition">
                  Brochure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
