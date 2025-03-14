const HeroSection = () => {
  return (
    <>
      <div
        className="hero items-center pt-10 text-center mt-40 mb-10"
        data-aos="zoom-in-up"
      >
        <div className="box">
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
            Daftarkan Usahamu sekarang
          </h1>
          <p className="text-base/8 mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iure,
            suscipit quia labore voluptas dolore mollitia? Excepturi mollitia
            reiciendis molestias qui magni commodi incidunt, aliquam cumque,
            sapiente asperiores iste rem.
          </p>
          <h1 className="lg:text-5xl/tight text-3xl font-medium mb-3">
            Bersama Menjelajah
          </h1>
          <p className="text-base/8 mb-20">CultureConnect</p>
          <p className="text-base/8 mb-3">Daftarkan Sekarang</p>
          <a
            data-aos="zoom-in"
            href="#"
            className="bg-[#1447e6]  border-sky-300 hover:bg-sky-800 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl"
          >
            Daftar
          </a>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
