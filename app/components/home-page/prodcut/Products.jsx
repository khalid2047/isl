"use client";

import Image from "next/image";

export default function ProductsSection() {
  const products = [
    {
      title: (
        <>
          COLD ROLLED <br /> STEEL
        </>
      ),
      image: "/images/colled-rolled.png",
      description:
        "ISL's Cold Rolled steel is manufactured on a modern, state-of-the-art Cold Rolling mill designed by SMS Siemag...",
    },
    {
      title: (
        <>
          HOT DIPPED <br /> GALVANIZED STEEL
        </>
      ),
      image: "/images/hot-dip.png",
      description:
        "Galvanization is the process of applying a protective zinc coating to steel, to prevent rust and corrosion...",
    },
    {
      title: (
        <>
          COLOR COATED <br /> STEEL
        </>
      ),
      image: "/images/Color-Coated.png",
      description:
        "Color Coated Steel is ISL’s high value-added product. Polyester (PE), Polyvinylidene Difluoride (PVDF)...",
    },
    {
      title: (
        <>
          SERVICE <br /> CENTER
        </>
      ),
      image: "/images/service-center.png",
      description:
        "ISL Service Center shapes flat rolled steel into various forms for a wide range of industrial and commercial applications...",
    },
  ];

  return (
    <section className="bg-white">
      <h1 className="text-white bg-green-700 text-center py-9 md:text-[45px] text-[30]">
        PRODUCTS & VALUE-ADDED SERVICES OFFERED
      </h1>

      <div className="mx-auto">
        {/* ✅ MOBILE: 2x2 = 4 PRODUCTS */}
       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
  {products.map((product, index) => (
    <div
      key={index}
      className={`relative bg-[#eef1ef] px-3 py-4 md:px-4 md:py-8
      text-center flex flex-col items-center
      ${
        index !== products.length - 1
          ? `
          lg:after:content-['']
          lg:after:absolute
          lg:after:top-0
          lg:after:right-[-55px]
          lg:after:w-[80px]
          lg:after:h-full
          lg:after:bg-gradient-to-r
          lg:after:from-black/5
          lg:after:via-black/10
          lg:after:to-transparent
          lg:after:skew-y-[-12deg]
          lg:after:origin-left
          lg:after:blur-sm
          lg:after:pointer-events-none
        `
          : ""
      }`}
    >
      {/* TITLE */}
      <h3 className="text-green-700 mb-2 text-[14px] md:text-[35px] leading-tight md:py-15">
        {product.title}
      </h3>

      {/* IMAGE */}
      <div className="relative w-24 h-24 md:w-64 md:h-64 mb-2 float-left">
        <Image
          src={product.image}
          alt="product"
          fill
          className="object-contain"
        />
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-[11px] md:text-sm mb-3 leading-snug">
        {product.description}
      </p>

      {/* BUTTONS */}
      <div className="flex gap-1 flex-wrap justify-center mt-auto md:pb-15">
        <button className="border border-gray-400 text-gray-600 px-2 py-1 rounded-full text-[11px] md:text-[14px] hover:bg-green-700 hover:text-white transition md:text-[17px] md:p-3">
          Explore
        </button>
        <button className="border border-gray-400 text-gray-600 px-2 py-1 rounded-full text-[11px] md:text-[14px] hover:bg-green-700 hover:text-white transition md:text-[17px]">
          Inquiry
        </button>
        <button className="border border-gray-400 text-gray-600 px-2 py-1 rounded-full text-[11px] md:text-[14px] hover:bg-green-700 hover:text-white transition md:text-[17px]">
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
