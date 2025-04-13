import { useState } from "react";
import emailjs from "@emailjs/browser";

const useContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setAlert({
        type: "warning",
        message: "Silakan isi semua kolom yang diperlukan.",
      });
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
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
      );
      setAlert({
        type: "success",
        message: "Pesan Anda telah berhasil dikirim!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email yang dikirim error", error);
      setAlert({
        type: "danger",
        message: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  return { form, loading, alert, handleChange, handleSubmit };
};

export default useContactForm;