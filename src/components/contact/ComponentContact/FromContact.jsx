import React from "react";
import useContactForm from "../../../hooks/UseContactForm";
import Alert from "./Alerts/Alerts";
import InputField from "../../UI/Form/AllUiComponents/InputField";
import ReusableButton from "../../UI/Form/AllUiComponents/ReusableButton";

function FormContact() {
  const { form, loading, alert, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="max-w-3xl mx-auto pb-10">
      <form
        className="space-y-6 bg-white p-8 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        {alert.message && <Alert type={alert.type} message={alert.message} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Nama Anda*"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama Anda"
            required
          />
          <InputField
            label="Email Anda*"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email Anda"
            required
          />
        </div>
        <InputField
          label="Pesan Anda*"
          type="textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tulis pesan Anda di sini"
          required
          className="h-32"
        />
        <div className="flex justify-center">
          <ReusableButton text="Kirim Pesan" pending={loading} />
        </div>
      </form>
    </div>
  );
}

export default FormContact;
