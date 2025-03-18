import Layout from "../components/Layout/CommonLayout";
import HeroAbout from "../components/About/HeroAbout";
import WhyCreated from "../components/About/WhyCreated";
import HowToFix from "../components/About/HowToFix";
import HowToWork from "../components/About/HowToWork";
import PositiveImpact from "../components/About/PositiveImpact";

const AboutPage = () => {
    return (
        <Layout>
            <HeroAbout />
            <WhyCreated />
            <HowToFix />
            <HowToWork />
            <PositiveImpact />
        </Layout>
    );
};

export default AboutPage;