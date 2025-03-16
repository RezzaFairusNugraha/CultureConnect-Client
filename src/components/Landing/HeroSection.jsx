const HeroSection = () => {
  return (
    <section className="flex items-center justify-center min-h-screen py-16 px-6 bg-gradient-to-b from-background to-[#EAE0C8]">
      <div className="text-center max-w-3xl" data-aos="fade-up">
        
        {/* Heading Utama */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
          Daftarkan Usahamu Sekarang
        </h1>
        
        {/* Deskripsi Singkat */}
        <p className="text-text-color text-lg leading-relaxed mb-6">
          Bergabunglah bersama kami dan jadilah bagian dari ekosistem budaya yang 
          menghubungkan wisatawan dengan pengalaman otentik di seluruh penjuru negeri.
        </p>

        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary mb-2">
          Bersama Menjelajah
        </h2>

        {/* Brand Name */}
        <p className="text-lg text-primary font-semibold mb-6">
          CultureConnect
        </p>

        {/* CTA Text */}
        <p className="text-text-color text-lg mb-6 font-medium">
          Dapatkan lebih banyak peluang dan tingkatkan visibilitas usahamu dengan CultureConnect!
        </p>

        {/* Tombol CTA */}
        <a
          href="#"
          className="mt-6 inline-block bg-amber-800 text-white font-medium rounded-lg px-6 py-3 text-lg shadow-md hover:bg-amber-900"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
