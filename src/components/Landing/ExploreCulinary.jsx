import CulinaryImage from "/images/menu-khas-jawa-barat.png";

const ExploreCulinary = () => {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Nikmati Kuliner Otentik
              <br />
              <span className="text-[#973C00]">dari Berbagai Daerah</span>
            </h2>
            <hr />
            <p className="text-lg text-gray-700 mt-5 leading-relaxed">
              Nikmati cita rasa khas dari berbagai daerah dengan sajian kuliner
              autentik yang menggugah selera. Temukan beragam hidangan
              tradisional yang kaya akan rempah dan cerita budaya di setiap
              suapan.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-amber-800 text-white font-medium rounded-lg px-6 py-3 text-lg shadow-md hover:bg-amber-900"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Jelajahi Sekarang
            </a>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <img
              src={CulinaryImage}
              alt="Authentic Culinary"
              className="w-full max-w-[450px] md:max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCulinary;
