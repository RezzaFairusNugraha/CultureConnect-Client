import CultureImage from "/images/indonesia-traditional-culture.jpg";

const ExploreCulture = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Konten */}
          <div className="text-center lg:text-left">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              data-aos="fade-right"
            >
              Menyelami Keindahan <br /> Wisata Budaya Nusantara
            </h2>
            <p 
              className="text-lg text-gray-700 mt-5 leading-relaxed"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Jelajahi kekayaan budaya yang tersembunyi di berbagai daerah. 
              Temukan warisan sejarah, seni tradisional, dan kisah-kisah menarik 
              yang diwariskan dari generasi ke generasi. Setiap tempat memiliki 
              cerita unik yang menunggu untuk ditemukan.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-primary text-white font-medium rounded-lg px-6 py-3 text-lg shadow-md hover:bg-secondary transition-all duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Jelajahi Sekarang
            </a>
          </div>

          {/* Gambar */}
          <div 
            className="flex justify-center"
            data-aos="fade-left"
          >
            <img
              src={CultureImage}
              alt="Cultural Tourism"
              className="w-full max-w-[450px] md:max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCulture;
