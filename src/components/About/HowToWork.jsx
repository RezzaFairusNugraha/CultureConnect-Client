import { AiOutlineUser, AiOutlineSearch, AiOutlineCheckCircle, AiOutlineShop } from "react-icons/ai";

const HowToWork = () => {

    const steps = [
        {
            id: 1,
            title: "Analisis Preferensi Pengguna",
            description: "AI menganalisis gaya perjalanan, minat, dan riwayat perjalanan pengguna.",
            icon: <AiOutlineUser className="w-8 h-8 text-blue-600" />,
            color: "border-blue-500 bg-blue-100 text-blue-600",
        },
        {
            id: 2,
            title: "Pemilihan Rekomendasi Berbasis Data",
            description: "Sistem mencocokkan pengguna dengan destinasi, kuliner, dan aktivitas lokal yang relevan.",
            icon: <AiOutlineSearch className="w-8 h-8 text-green-600" />,
            color: "border-green-500 bg-green-100 text-green-600",
        },
        {
            id: 3,
            title: "Penyesuaian Berdasarkan Umpan Balik",
            description: "Wisatawan dapat memberikan ulasan dan menyesuaikan preferensi mereka untuk rekomendasi yang lebih akurat.",
            icon: <AiOutlineCheckCircle className="w-8 h-8 text-yellow-600" />,
            color: "border-yellow-500 bg-yellow-100 text-yellow-600",
        },
        {
            id: 4,
            title: "Koneksi dengan UMKM Lokal",
            description: "Platform menampilkan pelaku usaha lokal yang sesuai dengan minat pengguna.",
            icon: <AiOutlineShop className="w-8 h-8 text-red-600" />,
            color: "border-red-500 bg-red-100 text-red-600",
        },
    ];

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-15 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-4xl">
                        Cara Kerja CultureConnect
                    </h2>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="relative pl-6">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-start mb-12">
                            {/* Garis Penghubung */}
                            {index !== steps.length - 1 && (
                                <div className="absolute top-12 w-[3px] h-full bg-gray-300"></div>
                            )}

                            {/* Ikon Langkah */}
                            <div className={`w-12 h-12 flex items-center justify-center rounded-full border-4 ${step.color} absolute left-[-24px]`}>
                                {step.icon}
                            </div>

                            {/* Konten */}
                            <div className="ml-12 p-5 bg-white shadow-md rounded-lg w-full">
                                <h3 className="text-lg font-bold">{step.title}</h3>
                                <p className="text-gray-700">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default HowToWork