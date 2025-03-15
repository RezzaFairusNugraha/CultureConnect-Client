import CultureImage from "/images/ASET_PAGE_3.png";

const ExploreCulture = () => {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center lg:flex-row lg:gap-12 gap-5">
          {/* Gambar */}
          <div className="w-full lg:w-1/2">
            <img
              data-aos="zoom-in-right"
              src={CultureImage}
              alt="Cultural Tourism"
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>

          {/* Konten */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-5" data-aos="zoom-in-left">
              <h2 className="text-2xl lg:text-4xl font-semibold text-gray-900">
                Wisata Budaya
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, qui
                repellat molestias non laboriosam quisquam nisi reiciendis iste
                nam eos corporis tenetur! Consectetur, dolorem amet odit nobis
                dolores numquam corporis.
              </p>
              <a
                href="#"
                className="bg-[#1E2A59] hover:bg-[#14203F] transition-all py-3 px-6 text-white shadow-md hover:shadow-lg rounded-lg inline-block"
              >
                Jelajahi
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCulture;
