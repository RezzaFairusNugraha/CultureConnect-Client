import NavbarAuth from "../UI/Navbar/Navbar-auth";
import Footer from "../UI/Footer";

const LayoutAuth = ({ children }) => {
    return (
        <>
            <NavbarAuth/>
            {children}
            <Footer />
        </>
    )
}

export default LayoutAuth;