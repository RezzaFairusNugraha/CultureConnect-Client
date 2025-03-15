const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#f8f9ff] py-15 px-6">
      <div
        className="text-center max-w-3xl"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
          Daftarkan Usahamu Sekarang
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iure,
          suscipit quia labore voluptas dolore mollitia? Excepturi mollitia
          reiciendis molestias qui magni commodi incidunt, aliquam cumque,
          sapiente asperiores iste rem.
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3">
          Bersama Menjelajah
        </h2>
        <p className="text-lg text-[#1E2A59] font-medium mb-8">CultureConnect</p>

        <p className="text-gray-700 text-lg mb-4 font-medium">Daftarkan Sekarang</p>
        <a
          href="#"
          className="bg-[#1E2A59] hover:bg-[#14203F] transition-all py-3 px-10 text-white font-semibold shadow-md hover:shadow-lg rounded-md"
        >
          Daftar
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
