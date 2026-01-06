import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#10853f] text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Column 1: Logo & Description */}
        <div className="lg:col-span-1">
        <Link href="/">
      <Image
        src="/images/isl_logo.svg"
        alt="ISL Logo"
        width={150}
        height={40}
        className="object-contain mb-10"
      />
    </Link>
          <p className="text-sm leading-relaxed opacity-90">
            International Steels Limited is the largest flat steel manufacturer and exporter in Pakistan.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white/30 pb-2 w-fit">Company</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {['Our Vision', 'Our Mission', 'Core Values', 'Strategic Objectives', 'Board of Directors', 'The Management'].map((item) => (
              <li key={item} className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-[10px]">&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Sitemap */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white/30 pb-2 w-fit">Sitemap</h3>
          <ul className="space-y-2 text-sm opacity-90">
            {['Our Products', 'Investors', 'Sustainability', 'Media Gallery', 'News & Media', 'Life at ISL', 'ISL Customer Portal', 'Inquiries'].map((item) => (
              <li key={item} className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer">
                <span className="text-[10px]">&gt;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Latest News */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white/30 pb-2 w-fit">Latest News</h3>
          <div className="flex gap-3 mb-4 cursor-pointer group">
            <img src="images/imgi_6_s_1.png" alt="News" className="w-16 h-12 object-cover rounded" />
            <p className="text-xs group-hover:underline">Ensuring Food Safety</p>
          </div>
          <p className="text-xs opacity-80 leading-relaxed">
            Navigating the Steel Landscape: Unraveling the Depths of Hot Dip Galvanizing and Beyond in Karachi
          </p>
        </div>

        {/* Column 5: Contact Us & Socials */}
        <div>
          <h3 className="text-lg font-bold mb-4 border-b-2 border-white/30 pb-2 w-fit">Contact Us</h3>
          <div className="text-sm space-y-3 opacity-90">
            <p><strong>Inquiries</strong></p>
            <p>101 Beaumont Plaza, 10 Beaumont Road, Karachi-75530</p>
            <p>Tel: +92 (21) 111 019 019</p>
            <p>Fax: +92 (21) 35013108</p>
            <p>Email: info@isl.com.pk</p>
          </div>
          {/* Social Icons Placeholder */}
          <div className="flex gap-4 mt-6 text-xl">
            <span className="cursor-pointer hover:opacity-70"><FaFacebookF /></span>
            <span className="cursor-pointer hover:opacity-70"> <FaYoutube /></span>
            <span className="cursor-pointer hover:opacity-70"> <FaLinkedin /></span>
            <span className="cursor-pointer hover:opacity-70"> <FaInstagram /></span>
          </div>
        </div>
      </div>

      {/* Certification Logos Section */}
      <div className="bg-[#10853f] border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
          <div className="flex gap-4 items-center">
              <img src="images/imgi_7_Group-1153.png" alt="Group" className="h-10" />
          </div>
           <img src="images/imgi_8_secp-1.jpg" alt="Jama Punji" className="h-10" />
          <img src="images/imgi_9_jama_punji_logo.png" alt="Jama Punji" className="h-10" />
          <img src="images/imgi_10_Agahi-Logo.png" alt="Agahi" className="h-12" />
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-[#333333] text-[11px] py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-80">
          <p>© International Steels Limited 2022 - 2024. All Rights Reserved. - Maintained by A2Z Creatorz</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-white cursor-pointer">Contact Us</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;