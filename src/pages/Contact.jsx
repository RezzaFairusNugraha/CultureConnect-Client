import Layout from "../components/Layout/CommonLayout";
import ContactComponent from "../components/contact/ContactComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 200,
      duration: 1000,
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <>
      <Layout>
        <ContactComponent />
      </Layout>
    </>
  );
};

export default Landing;
