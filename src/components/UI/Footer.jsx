import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-blue-50 text-gray-600 py-6">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <span className="text-sm">©2025 CultureConnect</span>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm">
                        Follow Us
                    </button>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-between items-center">
                    <div className="flex space-x-6 text-gray-500 text-sm">
                        <a href="#" className="hover:text-gray-700">Home</a>
                        <a href="#" className="hover:text-gray-700">About</a>
                        <a href="#" className="hover:text-gray-700">Contact</a>
                    </div>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="#" className="hover:text-gray-700"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-700"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-gray-700"><FaTwitter /></a>
                        <a href="#" className="hover:text-gray-700"><FaYoutube /></a>
                        <a href="#" className="hover:text-gray-700"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
