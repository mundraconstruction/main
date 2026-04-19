import { useState } from "react";
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
    alert("Form submitted!");
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-6 py-20">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-xl border border-gray-700"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Request Consultation
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-600"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-600"
          />

          <textarea
            name="message"
            placeholder="Your Requirement"
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded-lg bg-black border border-gray-600"
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
