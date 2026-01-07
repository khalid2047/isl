"use client";

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
       <h2 className="text-5xl md:text-6xl font-extralight mb-8 ">
          News & Events
        </h2>

        {/* Facebook Feed */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <iframe
            src="https://widgets.sociablekit.com/facebook-page-posts/iframe/25572639"
            className="w-full h-[1000px]"
            frameBorder="0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
