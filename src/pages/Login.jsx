import { useNavigate } from "react-router-dom";
import LayoutGuest from "../components/Layout/CommonLayout";
import MainForm from "../components/UI/Form/MainForm";
import LoginForm from "../components/UI/Form/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  return (
    <LayoutGuest>
      <MainForm 
      title="Masuk ke akun anda"
      linkTo={{ text: "Belum Punya Akun?", href: "/register", label: "Daftar Sekarang" }}
      >
        <LoginForm onSuccess={() => navigate("/dashboard")} /> 
      </MainForm>
    </LayoutGuest>
  );
};

export default Login;
