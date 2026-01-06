"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuData = {
    "ABOUT US": [
      "Vision",
      "Mission",
      "Core Values",
      "Strategic Objectives",
      "Shaping Tomorrow",
      "Journey & Milestones",
      "Global Footprints",
      "Partners",
    ],
    "INVESTORS": [
      "Investor Performance",
      "Reports & Filings",
      "Reports & Filings (Urdu)",
      "Financial Highlights",
    ],
    "PRODUCTS & SERVICES": [
      "Products",
      "Services Center",
      "Advantages of ISL Products",
      "Certifications",
      "ISL Customer Portal",
      "Inquiries",
    ],
    "LEADERSHIP": ["Board of Directors", "The Management"],
    "SUSTAINABILITY": [
      "Corporate Philosophy",
      "The Steel Story",
      "Sustainability Pillars",
    ],
    "MEDIA": ["Latest Newsletter", "Past Newsletter", "News & Media", "Media Gallery"],
    "CAREERS": ["Life at ISL", "Vacant Position"],
    "CONTACT US": ["Disclaimer", "Privacy Policy"],
  };

  const navItems = [
    "ABOUT US",
    "INVESTORS",
    "PRODUCTS & SERVICES",
    "CAREERS",
    "BLOG",
    "MEDIA",
  ];

  return (
    <>
      {/* HEADER */}
      <header className="h-20 flex items-center justify-between px-4 md:px-10 bg-transparent relative z-40 pt-10">
        {/* LOGO */}
        <div className="flex-none md:flex-1">
          <Link href="/">
            <Image
              src="/images/isl_logo.svg"
              alt="ISL Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
        </div>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex  justify-center gap-8 text-white text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item}
              href="/about"
              className="relative group hover:text-green-300 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-300 scale-x-0 group-hover:scale-x-100 transition origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* HAMBURGER */}
        <div className="flex-none md:flex-1 flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className="w-11 h-11 rounded-full border border-white text-white flex items-center justify-center text-lg hover:bg-white hover:text-green-800 transition"
          >
            ☰
          </button>
        </div>
      </header>

      {/* MODAL */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full z-[110] bg-transparent transition-transform duration-700 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* SINGLE SCROLL CONTAINER */}
        <div className="flex flex-col md:flex-row h-full w-full overflow-y-auto">
          
          {/* LEFT GREEN */}
          <div className="w-full md:w-[70%] bg-gradient-to-br from-[#1B5E20] to-[#004D40] p-6 md:p-14 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center text-xl"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-14">
              {Object.entries(menuData).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-green-200 text-xs md:text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-2 mb-3">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block text-white text-[13px] md:text-[14px] hover:text-green-300 transition"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT GREY */}
          <div className="w-full md:w-[30%] bg-[#263238] p-6 md:p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-green-300 mb-4">
                Newsletters
              </h3>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 p-2.5 text-xs text-white placeholder-gray-400 outline-none mb-3"
              />

              <button className="w-full bg-green-600 hover:bg-green-700 py-2.5 text-xs font-semibold transition">
                Subscribe →
              </button>
            </div>

            <div className="mt-10 space-y-6 text-xs opacity-90">
              <div>
                <h3 className="uppercase text-green-300 font-bold mb-2">
                  Contact
                </h3>
                <p>
                  101 Beaumont Plaza<br />
                  Karachi-75530
                </p>
              </div>

              <div>
                <p>Tel: +92 (21) 111 019 019</p>
                <p>Email: info@isl.com.pk</p>
              </div>

              <div>
                <h3 className="uppercase text-green-300 font-bold mb-2">
                  Social
                </h3>
                <div className="flex gap-4 text-lg">
                  <span>f</span>
                  <span>in</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
