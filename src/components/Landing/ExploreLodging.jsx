import LodgingImage from "/images/ASET_PAGE_4.png";

const ExploreLodging = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Konten Teks */}
          <div className="w-full lg:w-1/2 space-y-5" data-aos="zoom-in-right">
            <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
              Penginapan Terdekat
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, qui
              repellat molestias non laboriosam quisquam nisi reiciendis iste
              nam eos corporis tenetur! Consectetur, dolorem amet odit nobis
              dolores numquam corporis.
            </p>
            <a
              href="#"
              className="inline-block bg-[#1E2A59] hover:bg-[#14203F] transition-all py-3 px-6 text-white font-medium rounded-lg shadow-md hover:shadow-lg"
            >
              Jelajahi
            </a>
          </div>

          {/* Gambar */}
          <div className="w-full lg:w-1/2">
            <img
              data-aos="zoom-in-left"
              src={LodgingImage}
              alt="Nearby Lodging"
              className="w-full sm:w-3/4 lg:w-full xl:w-3/4 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreLodging;
