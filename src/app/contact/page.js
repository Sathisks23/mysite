"use client";
import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [contactDetail, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function inputHandler(event) {
    const { name, value } = event.target;
    setContact({ ...contactDetail, [name]: value });
  }

  async function formHandler(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/addContact", contactDetail);
      setSuccessMessage(res.data.message);
      setTimeout(() => {
        setSuccessMessage("");
        setContact({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Me</h2>
        <form className="space-y-4" onSubmit={formHandler}>
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="name"
            type="text"
            placeholder="Name"
            value={contactDetail.name}
            onChange={inputHandler}
            required
          />
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="email"
            type="email"
            placeholder="Email"
            value={contactDetail.email}
            onChange={inputHandler}
            required
          />
          <input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            name="subject"
            type="text"
            placeholder="Subject"
            value={contactDetail.subject}
            onChange={inputHandler}
            required
          />
          <textarea
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Message"
            name="message"
            rows="4"
            value={contactDetail.message}
            onChange={inputHandler}
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
