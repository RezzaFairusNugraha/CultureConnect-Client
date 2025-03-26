import HeroImage from "/images/Ilustrasi-kuliner-nusantara.-.jpeg";
import FromContact from "./FromContact";

const Banner = () => {
  return (
    <section className="relative h-screen flex items-center pt-20 md:pt-0 ">
      <div
        className="absolute top-0 left-0 h-full w-full hidden md:block"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0), rgba(151, 60, 0, 0.5),rgba(151, 60, 0, 0.9),rgba(151, 60, 0, 1) ,rgba(151, 60, 0, 1),rgba(151, 60, 0, 1)), url(${HeroImage})`,
          backgroundSize: "contain",
          backgroundPosition: "140% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FromContact />
      </div>
      <div className="relative container mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-1 items-center gap-12">
          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mt-10 relative">
            <img
              src={HeroImage}
              alt="Hero Section"
              className="w-full sm:w-full rounded-lg"
            />
          </div>
          <div className="text-left max-w-xl">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-serif text-[#f5f5f5]"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              Mari menjelajah <br />{" "}
              <span>
                bersama kami. <hr />
              </span>
            </h1>
            <p
              className="text-[#ffe8d6] text-lg leading-relaxed"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              Temukan pesona budaya dan kelezatan kuliner khas dari berbagai
              daerah. Dari tradisi yang kaya hingga hidangan yang menggugah
              selera, kami siap menemani petualangan wisata Anda.
            </p>
            <p
              className="text-[#ffe8d6] text-lg leading-relaxed mt-4"
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >
              Jelajahi tempat-tempat bersejarah, nikmati masakan autentik, dan
              rasakan pengalaman yang tak terlupakan di setiap perjalanan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="#"
                className="text-white text-center bg-[#3D2B1F] shadow hover: focus:ring-2 focus:outline-none focus:ring-amber-700 cursor-pointer rounded-lg px-5 py-3"
                data-aos="fade-right"
              >
                Jelajahi
              </a>
              <a
                href="/about"
                className="border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-[#3D2B1F] hover:border-[#3D2B1F] transition-all text-center"
                data-aos="fade-left"
              >
                Lebih lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
