import {
  AiOutlineBulb,
  AiOutlineCompass,
  AiOutlineShop,
  AiOutlineGlobal,
  AiOutlineSearch,
  AiOutlineCheckCircle,
  AiOutlineUser,
} from "react-icons/ai";

const impacts = [
  {
    title: "Untuk Wisatawan",
    description: [
      "Menemukan pengalaman yang lebih autentik dan tidak biasa.",
      "Mendapat rekomendasi yang sesuai dengan preferensi pribadi.",
    ],
    icon: () => <AiOutlineUser className="w-10 h-10 text-indigo-800" />, 
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
  {
    title: "Untuk Pelaku UMKM & Budaya Lokal",
    description: [
      "Meningkatkan eksposur bisnis kecil dan komunitas budaya.",
      "Membantu pelestarian budaya lokal melalui wisata yang lebih inklusif.",
    ],
    icon: () => <AiOutlineShop className="w-10 h-10 text-emerald-800" />,
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-800",
  },
  {
    title: "Untuk Ekosistem Pariwisata",
    description: [
      "Mengurangi over-tourism dan penyebaran wisata yang lebih merata.",
      "Mendorong wisata yang lebih berkelanjutan dan berkontribusi pada perekonomian lokal.",
    ],
    icon: () => <AiOutlineGlobal className="w-10 h-10 text-amber-800" />,
    bgColor: "bg-amber-100",
    textColor: "text-amber-800",
  },
];

const steps = [
  {
    id: 1,
    title: "Analisis Preferensi Pengguna",
    description:
      "AI menganalisis gaya perjalanan, minat, dan riwayat perjalanan pengguna.",
    icon: () => <AiOutlineUser className="w-8 h-8 text-blue-600" />,
    color: "border-blue-500 bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Pemilihan Rekomendasi Berbasis Data",
    description:
      "Sistem mencocokkan pengguna dengan destinasi, kuliner, dan aktivitas lokal yang relevan.",
    icon: () => <AiOutlineSearch className="w-8 h-8 text-green-600" />,
    color: "border-green-500 bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Penyesuaian Berdasarkan Umpan Balik",
    description:
      "Wisatawan dapat memberikan ulasan dan menyesuaikan preferensi mereka untuk rekomendasi yang lebih akurat.",
    icon: () => <AiOutlineCheckCircle className="w-8 h-8 text-yellow-600" />,
    color: "border-yellow-500 bg-yellow-100 text-yellow-600",
  },
  {
    id: 4,
    title: "Koneksi dengan UMKM Lokal",
    description:
      "Platform menampilkan pelaku usaha lokal yang sesuai dengan minat pengguna.",
    icon: () => <AiOutlineShop className="w-8 h-8 text-red-600" />,
    color: "border-red-500 bg-red-100 text-red-600",
  },
];

const solutions = [
  {
    icon: () => <AiOutlineBulb className="w-6 h-6" />,
    bgColor: "bg-blue-100 text-blue-600",
    title: "Rekomendasi Berbasis AI",
    description:
      "CultureConnect menggunakan kecerdasan buatan untuk memahami preferensi wisatawan dan memberikan rekomendasi yang sesuai dengan minat mereka.",
    linkText: "Pelajari lebih lanjut →",
    linkColor: "text-blue-600",
  },
  {
    icon: () => <AiOutlineCompass className="w-6 h-6" />,
    bgColor: "bg-green-100 text-green-600",
    title: "Eksplorasi Destinasi Tersembunyi",
    description:
      "Platform ini membantu wisatawan menemukan tempat-tempat unik yang memiliki nilai budaya tinggi tetapi belum banyak diketahui.",
    linkText: "Temukan destinasi baru →",
    linkColor: "text-green-600",
  },
  {
    icon: () => <AiOutlineShop className="w-6 h-6" />,
    bgColor: "bg-yellow-100 text-yellow-600",
    title: "Dukungan untuk UMKM Lokal",
    description:
      "CultureConnect memastikan UMKM mendapatkan kesempatan untuk memperkenalkan produk dan layanan mereka kepada wisatawan.",
    linkText: "Dukung UMKM sekarang →",
    linkColor: "text-yellow-600",
  },
  {
    icon: () => <AiOutlineGlobal className="w-6 h-6" />,
    bgColor: "bg-red-100 text-red-600",
    title: "Penyebaran Wisata yang Lebih Merata",
    description:
      "Dengan mengurangi ketimpangan pariwisata, CultureConnect membantu mengurangi dampak negatif dari over-tourism.",
    linkText: "Lihat dampaknya →",
    linkColor: "text-red-600",
  },
];

export { impacts, steps, solutions };
