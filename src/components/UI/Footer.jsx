import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#EAE0C8] text-text-color py-6">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <span className="text-sm">©2025 CultureConnect</span>
                    <button className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-amber-700 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out">
                        Follow Us
                    </button>
                </div>
                <hr className="my-4 border-text-color" />
                <div className="flex justify-between items-center">
                    <div className="flex space-x-6 text-text-color text-sm">
                        <a href="#" className="hover:text-accent">Home</a>
                        <a href="#" className="hover:text-accent">About</a>
                        <a href="#" className="hover:text-accent">Contact</a>
                    </div>
                    <div className="flex space-x-4 text-text-color">
                        <a href="#" className="hover:text-accent"><FaFacebookF /></a>
                        <a href="#" className="hover:text-accent"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-accent"><FaTwitter /></a>
                        <a href="#" className="hover:text-accent"><FaYoutube /></a>
                        <a href="#" className="hover:text-accent"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
