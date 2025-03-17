import Layout from "../components/Layout/CommonLayout";
import HeroAbout from "../About/HeroAbout";
import WhyCreated from "../About/WhyCreated";
import HowToFix from "../About/HowToFix";
import HowToWork from "../About/HowToWork";
import PositiveImpact from "../About/PositiveImpact";

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