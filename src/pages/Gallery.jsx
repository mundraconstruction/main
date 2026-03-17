import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Put your video and image filenames here from public/videos and public/images
const videoFiles = [
  "herov1.mp4",
  "herov2.mp4",
  "herov3.mp4"
  "herov4.mp4"
  "herov5.mp4"
  "herov6.mp4"
  
];

const imageFiles = [
  "hero1.jpg",
  "hero2.jpg",
  "hero3.jpg",
  "hero4.jpg",
  "hero5.jpg",
  "hero6.jpg"
];

function Gallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen">

    <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
          Our Project Gallery
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A visual journey through our construction projects, structural transformations and engineering excellence.
        </p>
      </section>

      {/* VIDEOS */}
      <section className="px-6 pb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">
          Project Videos
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {videoFiles.map((video, i) => (
            <div
              key={i}
              className="group cursor-pointer transform hover:-translate-y-4 transition duration-500"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-xl">
                <video
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-700"
                >
                  <source src={`/videos/${video}`} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg border border-white/20 group-hover:scale-110 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTOS */}
      <section className="bg-gray-900 py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">
          Project Photos
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {imageFiles.map((photo, i) => (
            <div
              key={i}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-xl"
              onClick={() => setActivePhoto(photo)}
            >
              <img
                src={`/images/${photo}`}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                alt="construction work"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-10 right-12 text-4xl hover:text-yellow-400"
          >
            ✕
          </button>
          <video
            controls
            autoPlay
            className="max-w-[90%] max-h-[85vh] rounded-xl shadow-2xl"
          >
            <source src={`/videos/${activeVideo}`} type="video/mp4" />
          </video>
        </div>
      )}

      {/* PHOTO MODAL */}
      {activePhoto && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999]">
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-10 right-12 text-4xl hover:text-yellow-400"
          >
            ✕
          </button>
          <img
            src={`/images/${activePhoto}`}
            className="max-w-[90%] max-h-[85vh] rounded-xl shadow-2xl"
            alt="construction"
          />
        </div>
      )}

      <Footer />

    </div>
  );
}

export default Gallery;
