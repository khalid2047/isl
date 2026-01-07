import React from 'react';

const InvestorsSection = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('images/imgi_30_investor_bg.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-extralight mb-8 ">
          Investors
        </h2>
        
        <p className="text-lg md:text-xl leading-[1.8] font-light mb-10 max-w-4xl mx-auto">
          ISL aspires to be a modern corporate citizen by upholding and creating value for our shareholders, ensuring transparency and openness while practicing the most stringent level of corporate governance.
        </p>

        <button className="px-10 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
          Learn More &gt;
        </button>
      </div>
    </section>
  );
};

export default InvestorsSection;