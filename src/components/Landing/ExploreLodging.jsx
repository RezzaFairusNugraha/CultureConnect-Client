import LodgingImage from "/images/Indonesia-Bandung-4.jpg";

const ExploreLodging = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Gambar */}
          <div 
            className="flex justify-center"
            data-aos="fade-right"
          >
            <img
              src={LodgingImage}
              alt="Nearby Lodging"
              className="w-full max-w-[450px] md:max-w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Konten Teks */}
          <div 
            className="text-center lg:text-left"
            data-aos="fade-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Penginapan Nyaman <br /> Untuk Perjalanan Anda
            </h2>
            <p className="text-lg text-gray-700 mt-5 leading-relaxed">
              Temukan tempat menginap yang nyaman selama perjalanan Anda. 
              Dari penginapan tradisional hingga hotel modern, kami membantu 
              Anda menemukan tempat terbaik yang sesuai dengan kebutuhan dan kenyamanan Anda.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-primary text-white font-medium rounded-lg px-6 py-3 text-lg shadow-md hover:bg-secondary transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Jelajahi Sekarang
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExploreLodging;
