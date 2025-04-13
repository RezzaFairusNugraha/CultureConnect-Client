import { useState } from "react";
import { register } from "../api/index";
import { useNavigate } from "react-router-dom";
import LayoutGuest from "../components/Layout/CommonLayout";
import MainForm from "../components/UI/Form/MainForm";
import RegisterForm from "../components/UI/Form/RegisterForm";
import { useAuth } from "../context/UseAuth";
import { toast } from "react-toastify";

const Register = () => {
  const [pending, setPending] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { setIsAuthenticated, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    setPending(true);
    setFormErrors({});

    try {
      const response = await register(form.name, form.email, form.password);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      setIsAuthenticated(true);
      setUser(response.user);
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
