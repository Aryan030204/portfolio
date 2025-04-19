import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl w-[22rem] h-[35rem] lg:w-[40rem] mx-auto bg-white shadow-md rounded-md p-8">
      <h2 className="text-3xl lg:text-2xl font-bold text-gray-800 mb-4">
        <span className="text-red-500 underline underline-offset-4">Send</span>{" "}
        a message
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <textarea
          name="message"
          placeholder="Message *"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <button
          type="submit"
          className="bg-red-400 text-white font-semibold py-3 rounded-md hover:bg-red-500 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
