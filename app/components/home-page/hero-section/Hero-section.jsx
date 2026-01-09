"use client";

import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen -mt-[0px] overflow-hidden">
      {/* Background YouTube Video */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          className="w-[250%] h-[310%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video"
          src="https://www.youtube.com/embed/bHwGakPZo6M?si=0NBHorYxnvnA9POI&autoplay=1&mute=1&loop=1&playlist=bHwGakPZo6M&controls=0&showinfo=0&rel=0"
          title="Background Video"
          allow="autoplay; encrypted-media"
        ></iframe>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        
        {/* Center Capital Text */}
        <div className="pt-40 flex-grow flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-7xl  uppercase tracking-widest">
            LARGEST FLAT ROLLED STEET<br/>MANUFACTURER AND <br/> EXPORTER OF PAKISTAN
          </h2>
          
        </div>

        {/* Bottom Social Links */}
        <nav className="flex space-x-6 p-6 mb-8 text-white text-xl md:text-2xl sm:p-3">
          <a
            href="https://www.facebook.com/internationalsteelslimited"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/channel/UCH6m9uAhBlFY449QNLpuVuA"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://pk.linkedin.com/organization-guest/company/international-steels-limited"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/internationalsteelslimited/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
        </nav>
      </div>
    </section>
  );
}