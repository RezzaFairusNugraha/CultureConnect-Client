import NavbarAuth from "../UI/Navbar/Navbar-auth";
import Footer from "../UI/Footer";

const LayoutAuth = ({ children, name }) => {
    return (
        <>
            <NavbarAuth name={name}/>
            {children}
            <Footer />
        </>
    )
}

export default LayoutAuth;