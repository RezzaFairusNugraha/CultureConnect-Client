import Layout from "../components/Layout/CommonLayout";
import Banner from "../components/Landing/Banner";
import About from "../components/Landing/About";
import ExploreCulture from "../components/Landing/ExploreCulture";
import ExploreLodging from "../components/Landing/ExploreLodging";
import ExploreCulinary from "../components/Landing/ExploreCulinary";
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
        <Banner />
        <About />
        <ExploreCulture />
        <ExploreLodging />
        <ExploreCulinary />
      </Layout>
    </>
  );
};

export default Landing;
