import { useEffect } from "react";
import Layout from "../components/Layout/CommonLayout";
import ContactComponent from "../components/contact/ContactComponent";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
