import CultureHeritageImage from "/images/budaya-nusantara.png";
import CulturalDestinationImage from "/images/destinasi-budaya.png";
import LocalCulinaryImage1 from "/images/kuliner-nusantara-1.png";
import LocalCulinaryImage2 from "/images/kuliner-nusantara-2.png";

const WhyCreated = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-15 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-4xl">
            Mengapa CultureConnect
            <br />
            Diciptakan?
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <ol className="relative border-s border-amber-800">
          <li className="mb-10 ms-4 flex flex-col md:flex-row md:items-center">
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <div className="md:w-2/3">
              <time className="text-2xl font-bold leading-none">
                Globalisasi dan kemajuan teknologi
              </time>
              <p className="my-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Globalisasi dan kemajuan teknologi telah mempermudah wisatawan
                dalam mencari destinasi wisata. Namun, sistem rekomendasi yang
                berbasis popularitas sering kali mengarahkan mereka ke
                tempat-tempat yang sudah ramai dan kehilangan esensi budaya
                lokal.
              </p>
            </div>
            <img
              src={CultureHeritageImage}
              alt="Cultural Heritage"
              className="w-full max-w-[250px] md:max-w-[300px] mx-auto md:ms-6 rounded-lg"
            />
          </li>
          <li className="mb-10 ms-4 flex flex-col md:flex-row md:items-center">
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <div className="md:w-2/3">
              <time className="text-2xl font-bold leading-none mb-3">
                Destinasi budaya asli
              </time>
              <p className="my-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Banyak destinasi tersembunyi dan pengalaman budaya asli yang
                kurang dikenal akibat algoritma yang memprioritaskan tempat
                populer.
              </p>
            </div>
            <img
              src={CulturalDestinationImage}
              alt="Cultural Destination"
              className="w-full max-w-[250px] md:max-w-[300px] mx-auto md:ms-6 rounded-lg"
            />
          </li>
          <li className="mb-10 ms-4 flex flex-col md:flex-row md:items-center">
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <div className="md:w-2/3">
              <time className="text-2xl font-bold leading-none mb-3">
                Meningkatkan penjualan UMKM
              </time>
              <p className="my-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Pelaku usaha kecil, seperti pengrajin lokal dan warung
                tradisional, sulit bersaing dengan bisnis besar yang lebih
                dikenal wisatawan.
              </p>
            </div>
            <img
              src={LocalCulinaryImage1}
              alt="Local Culinary 1"
              className="w-full max-w-[250px] md:max-w-[300px] mx-auto md:ms-6 rounded-lg"
            />
          </li>
          <li className="mb-10 ms-4 flex flex-col md:flex-row md:items-center">
            <div className="absolute w-3 h-3 bg-amber-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <div className="md:w-2/3">
              <time className="text-2xl font-bold leading-none mb-3">
                Sistem rekomendasi berdasarkan referensi pengguna
              </time>
              <p className="my-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Tidak adanya sistem rekomendasi yang memahami preferensi unik
                wisatawan menyebabkan pengalaman yang kurang berkesan dan
                cenderung seragam.
              </p>
            </div>
            <img
              src={LocalCulinaryImage2}
              alt="Local Culinary 2"
              className="w-full max-w-[250px] md:max-w-[300px] mx-auto md:ms-6 rounded-lg"
            />
          </li>
        </ol>
      </div>
    </>
  );
};

export default WhyCreated;
