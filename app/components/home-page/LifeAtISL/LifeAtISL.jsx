"use client";

import { FaArrowRight, FaBriefcase } from "react-icons/fa";

export default function LifeAtISL() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-50"
      style={{
        backgroundImage:
          "url('images/life-with-isl.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
        {/* <h2 className="text-4xl md:text-5xl font-bold mb-6"> */}
             <h2 className="text-5xl md:text-6xl font-extralight  mb-8">
          Life at ISL
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-10 text-gray-200">
          ISL is driven by the passion of its people, who work tirelessly to
          create value for the various stakeholders of the company. Over the
          years, we have consistently embraced management best practices and
          adopted policies that ensure a fair and competitive workplace, free
          from discrimination and biases of any nature.
        </p>

{/* Buttons */}
<div className="flex flex-row flex-wrap gap-5 justify-center">
  
  {/* Learn More */}
  <button className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 transition px-8 py-4 rounded-full text-white font-semibold tracking-wide text-center">
    Learn More
    <FaArrowRight className="text-lg" />
  </button>

  {/* Apply Now */}
  <button className="inline-flex items-center gap-3 bg-white text-green-700 hover:bg-gray-100 transition px-8 py-4 rounded-full font-semibold tracking-wide text-center">
    Apply Now
    <FaBriefcase className="text-lg" />
  </button>

</div>

      </div>
    </section>
  );
}
