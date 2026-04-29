import React from "react";

const VideoArticle = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      <h1 className="text-3xl md:text-4xl font-serif mb-4">
        Serious Toxins Removed in Just 5-7 Days with Ayurvedic Panchakarma
      </h1>

      <p className="text-gray-500 mb-6">October 31, 2025</p>

      {/* YouTube Embed */}
      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/yzdBFo9K8s0"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-gray-600 mb-4">
        Imagine removing over 50% of the most toxic chemicals from your body in just 5–7 days...
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>Organochloride pesticides</li>
        <li>Heavy metals</li>
        <li>Environmental pollutants</li>
      </ul>

    </div>
  );
};

export default VideoArticle;