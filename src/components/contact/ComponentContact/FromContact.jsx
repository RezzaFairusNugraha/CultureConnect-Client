import React from "react";
import useContactForm from "../../../hooks/UseContactForm";
import Alert from "./Alerts/Alerts";

function FormContact() {
  const { form, loading, alert, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="max-w-3xl mx-auto pb-10" data-aos="zoom-in">
      <form
        className="space-y-6 bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {alert.message && <Alert type={alert.type} message={alert.message} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-right">
            <label
              className="block mb-2 font-semibold text-gray-700"
              htmlFor="nama"
            >
              Nama Anda*
            </label>
            <input
              id="nama"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
              required
            />
          </div>
          <div data-aos="fade-left">
            <label
              className="block mb-2 font-semibold text-gray-700"
              htmlFor="email"
            >
              Email Anda*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div data-aos="fade-up">
          <label
            className="block mb-2 font-semibold text-gray-700"
            htmlFor="pesan"
          >
            Pesan Anda*
          </label>
          <textarea
            id="pesan"
            rows="8"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tulis pesan Anda di sini"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`text-white bg-amber-800 hover:bg-amber-900 focus:ring-1 focus:outline-none focus:ring-amber-600 cursor-pointer font-medium rounded-lg text-center text-sm px-5 py-2.5 transition duration-300 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
