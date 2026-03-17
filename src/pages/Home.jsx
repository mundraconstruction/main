import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <-- import Link
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const heroVideos = ["herov1.mp4", "herov2.mp4", "herov3.mp4"];
const projectImages = ["before.jpg", "demolition.jpg", "after.jpg"];

function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  // Custom cursor
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if ("ontouchstart" in window) setIsDesktop(false);
  }, []);

  // Hero video slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) =>
        prev === heroVideos.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Cursor movement
  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const handleHover = (e) => setHovering(!!e.target.closest("a, button"));

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mouseout", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mouseout", handleHover);
    };
  }, [isDesktop]);

  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white min-h-screen overflow-x-hidden scroll-smooth cursor-none">

    <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20">
        {heroVideos.map((video, i) => (
          <video
            key={i}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentVideo ? "opacity-100" : "opacity-0"
            }`}
            src={`/videos/${video}`}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-6xl font-bold text-yellow-400 leading-tight">
            Building The Future With Strength
          </h1>
          <p className="mt-5 text-sm md:text-lg text-gray-300 max-w-xl mx-auto">
            Experts in Structural Renovation, Home Remodeling & Commercial Construction Across UK.
          </p>
          <button className="request-btn mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold shadow-2xl transform hover:scale-105 transition duration-300">
            Request Consultation
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-950 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: "🏗", title: "Structural Renovation", desc: "Safe removal of load-bearing walls and steel beam installation following UK safety standards." },
            { icon: "🧱", title: "Home Remodeling", desc: "Complete interior renovations including framing, drywall, plastering and finishing." },
            { icon: "🏢", title: "Commercial Projects", desc: "Professional commercial build-outs and structural upgrades delivered on time." }
          ].map((service, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl transform transition duration-500 hover:-translate-y-4 hover:rotate-1">
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400">Recent Project Transformation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {projectImages.map((img, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700 ease-out hover:-translate-y-6 hover:shadow-yellow-500/20">
              <div className="h-[350px] md:h-[420px] overflow-hidden">
                <img src={`/images/${img}`} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" alt="project" />
              </div>
              <p className="text-center py-5 font-semibold bg-black/60 text-lg tracking-wide">{img.split(".")[0]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="about" className="py-20 bg-black px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-yellow-400">Why Choose Mundra Construction?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Licensed & Insured", desc: "Fully compliant with UK building and safety regulations." },
            { title: "Experienced Team", desc: "Skilled professionals delivering precision construction work." },
            { title: "Quality Guarantee", desc: "Durable and long-lasting structural solutions you can trust." }
          ].map((item, i) => (
            <div key={i} className="bg-gray-900 p-10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="font-bold mb-4 text-yellow-400 text-xl">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;
