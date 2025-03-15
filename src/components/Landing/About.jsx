import AboutImage from "/images/About.png";
import { HiOutlineLightBulb, HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <section className="homePage pb-10" data-aos="fade-up-left">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="about grid md:grid-cols-2 grid-cols-1 items-center pt-10 gap-12">
          {/* Bagian Gambar */}
          <div className="box flex justify-center">
            <img
              data-aos="fade-up-right"
              src={AboutImage}
              alt="Hero Image"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>

          {/* Bagian Teks dan Card */}
          <div className="box">
            <h1 className="text-4xl md:text-5xl font-bold mb-7 leading-tight text-gray-900">
              Mari temukan pengalaman hebat bersama kami
            </h1>
            <p className="text-lg leading-relaxed mb-7 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              alias est necessitatibus soluta facere quisquam dolore rerum hic
              aliquam nostrum?
            </p>

            {/* Cards */}
            <div className="flex gap-6 flex-wrap">
              {/* CARD 1 */}
              <div
                className="w-64 p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
                data-aos="flip-left"
              >
                <HiOutlineLightBulb className="w-12 h-12 text-[#1E2A59] mb-4" />
                <h5 className="mb-2 text-xl font-semibold text-gray-900">
                  Butuh Bantuan?
                </h5>
                <p className="text-base text-gray-600">
                  Lihat panduan langkah demi langkah untuk klaim manfaat mingguan.
                </p>
              </div>

              {/* CARD 2 */}
              <div
                className="w-64 p-5 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
                data-aos="flip-right"
              >
                <HiOutlineDocumentText className="w-12 h-12 text-[#1E2A59] mb-4" />
                <h5 className="mb-2 text-xl font-semibold text-gray-900">
                  Panduan Lengkap
                </h5>
                <p className="text-base text-gray-600">
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
