import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-blue-50 text-gray-600 py-6 px-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-sm">©2025 CultureConnect</span>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm">
                    Follow Us
                </button>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-6 text-gray-500 text-sm">
                    <a href="#" className="hover:text-gray-700">Home</a>
                    <a href="#" className="hover:text-gray-700">About</a>
                    <a href="#" className="hover:text-gray-700">Contact</a>
                </div>
                <div className="flex space-x-4 text-gray-400">
                    <FontAwesomeIcon icon={faFacebookF} className="hover:text-gray-700" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-gray-700" />
                    <FontAwesomeIcon icon={faTwitter} className="hover:text-gray-700" />
                    <FontAwesomeIcon icon={faYoutube} className="hover:text-gray-700" />
                    <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-700" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
