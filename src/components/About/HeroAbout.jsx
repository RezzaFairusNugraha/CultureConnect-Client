import PetaIndonesia from "/images/peta_indonesia.png";

const HeroAbout = () => {
  return (
    <section
      className="bg-gray-100 h-[90vh] overflow-x-hidden"
      style={{
        backgroundImage: `url(${PetaIndonesia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="container mx-auto flex flex-col justify-center items-center h-full px-4 py-8 text-center"
      >
        <h1 className="text-4xl font-bold">
          CultureConnect:{" "}
          <span className="font-semibold">
            AI-Powered Cultural & Tourism Platform
          </span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          CultureConnect adalah platform berbasis AI yang merevolusi cara
          wisatawan menemukan pengalaman budaya dan wisata yang lebih personal,
          unik, dan berdampak bagi komunitas lokal.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
