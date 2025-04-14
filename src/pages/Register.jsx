import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutGuest from "../components/Layout/CommonLayout";
import MainForm from "../components/UI/Form/MainForm";
import RegisterForm from "../components/UI/Form/RegisterForm";
import { useAuth } from "../context/UseAuth";
import { toast } from "react-toastify";

const Register = () => {
  const [pending, setPending] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    setPending(true);
    setFormErrors({});

    try {
      // eslint-disable-next-line
      const response = await handleRegister(form.name, form.email, form.password);
      toast.success("Registrasi berhasil!");
      navigate("/fill-user-data");
    } catch (err) {
      if (err.email || err.password || err.name) {
        setFormErrors(err);
      } else {
        toast.error(err.general || "Terjadi kesalahan, coba lagi nanti.");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <LayoutGuest>
      <MainForm
        title="Daftar Akun CultureConnect"
        linkTo={{
          text: "Sudah Punya Akun?",
          href: "/login",
          label: "Masuk Sekarang",
        }}
      >
        <RegisterForm
          onSubmit={handleSubmit}
          pending={pending}
          errors={formErrors}
        />
      </MainForm>
    </LayoutGuest>
  );
};

export default Register;
