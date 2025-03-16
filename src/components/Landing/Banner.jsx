import HeroImage from "/images/Ilustrasi-kuliner-nusantara.-.jpeg";

const Banner = () => {
  return (
    <section className="relative bg-background min-h-screen flex items-center"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1),rgba(255,255,255,1)), url(${HeroImage})`,
        backgroundSize: "contain",
        backgroundPosition: "140% center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative container mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div className="text-left max-w-xl">
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-color mb-6 leading-tight" 
              data-aos="fade-right" 
              data-aos-easing="ease-in-sine"
            >
              Mari menjelajah <br /> bersama kami.
            </h1>
            <p 
              className="text-secondary text-lg leading-relaxed" 
              data-aos="fade-right" 
              data-aos-easing="ease-in-sine"
            >
              Temukan pesona budaya dan kelezatan kuliner khas dari berbagai daerah. 
              Dari tradisi yang kaya hingga hidangan yang menggugah selera, kami siap 
              menemani petualangan wisata Anda.
            </p>
            <p 
              className="text-secondary text-lg leading-relaxed mt-4" 
              data-aos="fade-right" 
              data-aos-easing="ease-in-sine"
            >
              Jelajahi tempat-tempat bersejarah, nikmati masakan autentik, dan 
              rasakan pengalaman yang tak terlupakan di setiap perjalanan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/register"
                className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-amber-700 cursor-pointer rounded-lg px-5 py-3 transition duration-300 ease-in-out"
                data-aos="zoom-out"
              >
                Jelajahi
              </a>
              <a
                href="#"
                className="border border-primary text-primary py-3 px-6 rounded-md font-medium hover:bg-primary hover:text-background transition-all text-center"
                data-aos="zoom-out"
              >
                Lebih lanjut
              </a>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mt-10 relative">
            <img
              src={HeroImage}
              alt="Hero Section"
              className="w-full sm:w-full md:w-3/4 max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
