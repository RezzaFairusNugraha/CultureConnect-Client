import Footer from "../UI/Footer";
import NavbarGuest from "../UI/Navbar/Navbar-home";

const LayoutGuest = ({ children }) => {
    return (
        <>
            <NavbarGuest/>
            {children}
            <Footer />
        </>
    )
}

export default LayoutGuest;