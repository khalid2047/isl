"use client";

export default function VideosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT VIDEO */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-black-700 mb-8">
              ISL Corporate Overview
            </h2>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/0XlnfOLK4Zk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="lg:col-span-6">
            
            <h2 className="text-3xl font-bold text-black-700 mb-8">
              ISL Manufacturing Process
            </h2>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/c_mzyuPM-dM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
