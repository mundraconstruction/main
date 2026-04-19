import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Consultation request submitted!");
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />

      <div className="pt-28 pb-16 px-6 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-xl"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Request Consultation
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-gray-700"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Your Requirement"
            onChange={handleChange}
            rows="4"
            className="w-full mb-6 p-3 rounded-lg bg-black/50 border border-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-bold"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Form;
