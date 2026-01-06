import React from 'react';

export default function Sustainability() {
    

  const cards = [
    {
      title: "INVESTING IN OUR PEOPLE",
      image: "images/imgi_6_s_1.png",
    },
    {
      title: "MAKING STEEL MORE SUSTAINABLE",
      image: "images/imgi_27_s_2.png",
    },
    {
      title: "ENRICHING OUR COMMUNITIES",
      image: "images/imgi_28_s_3.png",
    },
    {
      title: "TRANSPARENT GOVERNANCE",
      image: "images/imgi_29_s_4.png",
    },
  ];

  return (
    <section className="w-full bg-white font-sans">
      {/* Top Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-16 text-center">
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-gray-600 mb-8 text-center">
  SUSTAINABILITY
</h2>

        <p className="text-gray-500 leading-relaxed text-lg max-w-4xl mx-auto">
          ISL aspires to be a carbon negative organization. Driven by the{" "}
          <span className="text-green-600 font-bold">Clean, Lean</span> and{" "}
          <span className="text-green-600 font-bold">Green</span> approach towards responsible 
          and sustainable manufacturing, we are always working towards making our operations 
          as environment friendly as possible, from investing in green technologies to reducing 
          and treating our waste.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="relative h-[500px] overflow-hidden group cursor-pointer border-r border-gray-100 last:border-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-white text-3xl font-medium mb-6 leading-tight tracking-wide">
                {card.title}
              </h3>
              
              <button className="px-8 py-2 border border-white text-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2">
                Read More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

