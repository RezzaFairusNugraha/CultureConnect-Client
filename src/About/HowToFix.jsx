import { AiOutlineBulb, AiOutlineCompass, AiOutlineShop, AiOutlineGlobal } from "react-icons/ai";

const HowToFix = () => {
    const solutions = [
        {
            icon: <AiOutlineBulb className="w-6 h-6" />, 
            bgColor: "bg-blue-100 text-blue-600", 
            title: "Rekomendasi Berbasis AI",
            description: "CultureConnect menggunakan kecerdasan buatan untuk memahami preferensi wisatawan dan memberikan rekomendasi yang sesuai dengan minat mereka.",
            linkText: "Pelajari lebih lanjut →",
            linkColor: "text-blue-600"
        },
        {
            icon: <AiOutlineCompass className="w-6 h-6" />, 
            bgColor: "bg-green-100 text-green-600", 
            title: "Eksplorasi Destinasi Tersembunyi",
            description: "Platform ini membantu wisatawan menemukan tempat-tempat unik yang memiliki nilai budaya tinggi tetapi belum banyak diketahui.",
            linkText: "Temukan destinasi baru →",
            linkColor: "text-green-600"
        },
        {
            icon: <AiOutlineShop className="w-6 h-6" />, 
            bgColor: "bg-yellow-100 text-yellow-600", 
            title: "Dukungan untuk UMKM Lokal",
            description: "CultureConnect memastikan UMKM mendapatkan kesempatan untuk memperkenalkan produk dan layanan mereka kepada wisatawan.",
            linkText: "Dukung UMKM sekarang →",
            linkColor: "text-yellow-600"
        },
        {
            icon: <AiOutlineGlobal className="w-6 h-6" />, 
            bgColor: "bg-red-100 text-red-600", 
            title: "Penyebaran Wisata yang Lebih Merata",
            description: "Dengan mengurangi ketimpangan pariwisata, CultureConnect membantu mengurangi dampak negatif dari over-tourism.",
            linkText: "Lihat dampaknya →",
            linkColor: "text-red-600"
        }
    ];

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                    Bagaimana CultureConnect Mengatasi Masalah Ini?
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
                {solutions.map((solution, index) => (
                    <div key={index} className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                            <div className={`p-3 ${solution.bgColor} rounded-full`}>
                                {solution.icon}
                            </div>
                            <h5 className="ml-3 text-xl font-bold text-gray-900">
                                {solution.title}
                            </h5>
                        </div>
                        <p className="text-gray-700 flex-grow">{solution.description}</p>
                        <a href="#" className={`mt-4 inline-block font-semibold hover:underline ${solution.linkColor}`}>
                            {solution.linkText}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowToFix;