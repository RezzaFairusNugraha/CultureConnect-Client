import Footer from "../UI/Footer";
import NavbarGuest from "../UI/Navbar/Navbar-home";

<<<<<<< HEAD
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
=======
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
>>>>>>> 44d69b0 (Add style,SplashScreen and Contact(progres))
