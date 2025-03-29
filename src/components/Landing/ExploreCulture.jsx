import CultureImage from "/images/indonesia-traditional-culture.jpg";

const ExploreCulture = () => {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
            >
              Menyelami Keindahan <br />
              <span className="text-[#973C00]">
                Wisata Budaya Nusantara 
              </span>
            </h2>
            <hr/>
            <p
              className="text-lg text-gray-700 mt-5 leading-relaxed"
            >
              Jelajahi kekayaan budaya yang tersembunyi di berbagai daerah.
              Temukan warisan sejarah, seni tradisional, dan kisah-kisah menarik
              yang diwariskan dari generasi ke generasi. Setiap tempat memiliki
              cerita unik yang menunggu untuk ditemukan.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-amber-800 text-white font-medium rounded-lg px-6 py-3 text-lg shadow-md hover:bg-amber-900"
            >
              Jelajahi Sekarang
            </a>
          </div>
          <div className="flex justify-center">
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
