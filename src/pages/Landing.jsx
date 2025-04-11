import { useEffect } from "react";
import LayoutGuest from "../components/Layout/CommonLayout";
import SplashScreen from "../components/Landing/SplashScreen";
import Banner from "../components/Landing/Banner";
import About from "../components/Landing/About";
import ExploreCulture from "../components/Landing/ExploreCulture";
import ExploreLodging from "../components/Landing/ExploreLodging";
import ExploreCulinary from "../components/Landing/ExploreCulinary";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <LayoutGuest>
        <SplashScreen />
        <Banner />
        <About />
        <ExploreCulture />
        <ExploreLodging />
        <ExploreCulinary />
      </LayoutGuest>
    </>
  );
};

export default Landing;
