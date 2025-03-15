import { useNavigate } from "react-router-dom";
import MainForm from "../components/UI/Form/MainForm";
import Layout from "../components/Layout/CommonLayout";
import LoginForm from "../components/UI/Form/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <MainForm 
      title="Masuk ke akun anda"
      linkTo={{ text: "Belum Punya Akun?", href: "/register", label: "Daftar Sekarang" }}
      >
        <LoginForm onSuccess={() => navigate("/dashboard")} /> 
      </MainForm>
    </Layout>
  );
};

export default Login;
