import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function FormContact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          to_name: "Rezza Fairus Nugraha",
          email: form.email,
          to_email: "rezafairusnugraha@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. This message has been sent ");
          console.log(form);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="max-w-3xl mx-auto pb-10" data-aos="zoom-in">
      <form
        className="space-y-6 bg-white p-8 rounded-lg shadow-md"
        ref={formRef}
        onSubmit={handleSubmit}
      >
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
          />
        </div>
        <div className="flex justify-center" data-aos="fade-bottom">
          <button
            type="submit"
            className="text-white bg-amber-800 hover:bg-amber-900 focus:ring-1 focus:outline-none focus:ring-amber-600 cursor-pointer font-medium rounded-lg text-center text-sm px-5 py-2.5 transition duration-300 ease-in-out"
          >
            Kirim {""} {loading ? "Pesan..." : "Pesan"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
