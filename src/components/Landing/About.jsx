import AboutImage from "/images/Ilustrasi-budaya-nusantara.png";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <section className="homePage pb-16 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-10 md:px-12 lg:px-20">
        <div
          className="grid xl:grid-cols-2 grid-cols-1 items-center pt-16 gap-12"
          data-aos="fade-up"
        >
          <div className="flex justify-center">
            <img
              data-aos="fade-up-right"
              src={AboutImage}
              alt="Ilustrasi Budaya Nusantara"
              className="w-full max-w-[400px] md:max-w-full mx-auto rounded-lg"
            />
          </div>

          <div>
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
              Temukan pengalaman hebat bersama{" "}
              <span className="text-[#973C00]">
                kami
              </span>
            </h1>
            <hr />
            <p className="text-md leading-relaxed mb-8 text-gray-700">
              Jelajahi keunikan budaya dan kelezatan kuliner khas daerah bersama
              kami. Temukan cerita di balik setiap tempat yang Anda kunjungi dan rasakan pengalaman yang tak terlupakan di setiap perjalanan Anda.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                <HiOutlineLightBulb className="w-12 h-12 text-primary mb-4" />
                <h5 className="text-xl font-semibold text-gray-900">
                  Butuh Bantuan?
                </h5>
                <p className="text-gray-600">
                  Lihat panduan langkah demi langkah untuk klaim manfaat mingguan.
                </p>
              </div>
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
                <HiOutlineDocumentText className="w-12 h-12 text-primary mb-4" />
                <h5 className="text-xl font-semibold text-gray-900">
                  Panduan Lengkap
                </h5>
                <p className="text-gray-600">
                  Pelajari semua informasi penting yang perlu Anda ketahui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
