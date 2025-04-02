import { useEffect } from "react";
import LayoutGuest from "../components/Layout/CommonLayout";
import HeroAbout from "../components/About/HeroAbout";
import WhyCreated from "../components/About/WhyCreated";
import HowToFix from "../components/About/HowToFix";
import HowToWork from "../components/About/HowToWork";
import PositiveImpact from "../components/About/PositiveImpact";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
