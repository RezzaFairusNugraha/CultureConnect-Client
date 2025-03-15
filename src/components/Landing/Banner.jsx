import HeroImage from "/images/Hero.png";

const Banner = () => {
  return (
    <section className="relative bg-[#F8F9FF] min-h-screen flex items-center">
      <div
        className="hidden md:block absolute inset-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "contain",
          backgroundPosition: "140% center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative container mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div 
            className="text-left max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-aos="fade-right" data-aos-easing="ease-in-sine">
              Mari menjelajah <br /> bersama kami.
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed" data-aos="fade-right" data-aos-easing="ease-in-sine">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4" data-aos="fade-right" data-aos-easing="ease-in-sine">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="/register"
                className="bg-[#1E2A59] text-white py-3 px-6 rounded-md font-medium hover:bg-opacity-90 transition-all text-center"
                data-aos="zoom-out"
              >
                Jelajahi
              </a>
              <a
                href="#"
                className="border border-[#1E2A59] text-[#1E2A59] py-3 px-6 rounded-md font-medium hover:bg-[#1E2A59] hover:text-white transition-all text-center"
                data-aos="zoom-out"
              >
                Lebih lanjut
              </a>
            </div>
          </div>

          <div className="md:hidden flex justify-center mt-10">
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
