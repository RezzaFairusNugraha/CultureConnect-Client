import Layout from "../components/Layout/CommonLayout";
import Banner from "../components/Landing/Banner";
import About from "../components/Landing/About";
import ExploreCulture from "../components/Landing/ExploreCulture";
import ExploreLodging from "../components/Landing/ExploreLodging";
import HeroSection from "../components/Landing/HeroSection";
import ExploreCulinary from "../components/Landing/ExploreCulinary";


const Landing = () => {
  return (
    <>
      <Layout>
            <Banner />
            <About />
            <ExploreCulture />
            <ExploreLodging />
            <ExploreCulinary />
            <HeroSection />
      </Layout>
    </>
  );
};

export default Landing;
