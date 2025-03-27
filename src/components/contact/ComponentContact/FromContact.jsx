import React from "react";

function FromContact() {
  return (
    <div className="max-w-3xl mx-auto pb-10" data-aos="zoom-in">
      <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-right">
            <label
              className="block mb-2 font-semibold text-gray-700"
              htmlFor="name"
            >
              Your Name*
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div data-aos="fade-left">
            <label
              className="block mb-2 font-semibold text-gray-700"
              htmlFor="email"
            >
              Your Email*
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <label
            className="block mb-2 font-semibold text-gray-700"
            htmlFor="message"
          >
            Your Message*
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:shadow-lg transition duration-200 block mx-auto"
          data-aos="fade-bottom"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default FromContact;
