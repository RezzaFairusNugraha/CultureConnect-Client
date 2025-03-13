import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;