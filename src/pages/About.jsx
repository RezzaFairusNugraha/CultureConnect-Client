import LayoutGuest from "../components/Layout/CommonLayout";
import HeroAbout from "../components/About/HeroAbout";
import WhyCreated from "../components/About/WhyCreated";
import HowToFix from "../components/About/HowToFix";
import HowToWork from "../components/About/HowToWork";
import PositiveImpact from "../components/About/PositiveImpact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 200,
      duration: 1000,
      animatedClassName: "aos-animate",
    });
  }, []);
  return (
    <LayoutGuest>
      <HeroAbout />
      <WhyCreated />
      <HowToFix />
      <HowToWork />
      <PositiveImpact />
    </LayoutGuest>
  );
};

export default AboutPage;
