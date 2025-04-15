import { useState, useEffect, useContext } from "react";
import InputField from "./AllUiComponents/InputField";
import ReusableButton from "./AllUiComponents/ReusableButton";
import { saveUserPreference, getUserPreference } from "../../../api/preferenceServices";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";

const PreferenceForm = ({ onSubmit }) => {
  const { user } = useContext(AuthContext);

  const [kategori1, setKategori1] = useState("");
  const [kategori2, setKategori2] = useState("");
  const [kategori3, setKategori3] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);

  const kategoriOptions = [
    { value: "", label: "Pilih kategori" },
    { value: "Kuliner", label: "Kuliner" },
    { value: "Wisata Keluarga", label: "Wisata Keluarga" },
    { value: "Taman", label: "Taman" },
    { value: "Budaya", label: "Budaya" },
    { value: "Pantai", label: "Pantai" },
    { value: "Pegunungan", label: "Pegunungan" },
    { value: "Pemandian Air Panas", label: "Pemandian Air Panas" },
  ];

  useEffect(() => {
    const fetchPreference = async () => {
      if (!user || !user.id) return;

      try {
        const res = await getUserPreference(user.id);
        const data = res.data;

        if (data) {
          const kategori = JSON.parse(data.categoryPreference);
          setKategori1(kategori[0] || "");
          setKategori2(kategori[1] || "");
          setKategori3(kategori[2] || "");
          setDeskripsi(data.descriptionPreference || "");
          setRating(data.RatePreference || "");
        }
      } catch (err) {
        console.log("Belum ada preferensi, silakan buat baru");
        console.error(err);
      }
    };

    fetchPreference();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!kategori1 || !kategori2 || !kategori3) {
      toast.warning("Harap isi ketiga rekomendasi");
      return;
    }

    if (!user || !user.id) {
      toast.warning("User tidak ditemukan. Silakan login kembali.");
      return;
    }

    try {
      setLoading(true);
      const kategori = [kategori1, kategori2, kategori3];

      await saveUserPreference({
        userId: user.id,
        kategori,
        deskripsi,
        rating: parseFloat(rating),
      });

      toast.success("Preferensi berhasil disimpan!");

      if (typeof onSubmit === "function") {
        onSubmit(); // ✅ hanya dipanggil kalau didefinisikan
      }
    } catch (error) {
      console.error("Gagal simpan preferensi:", error.message);
      toast.error("Terjadi kesalahan saat menyimpan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border border-amber-800">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputField
          type="select"
          name="kategori1"
          value={kategori1}
          onChange={(e) => setKategori1(e.target.value)}
          label="Kategori Preferensi 1"
          options={kategoriOptions}
        />
        <InputField
          type="select"
          name="kategori2"
          value={kategori2}
          onChange={(e) => setKategori2(e.target.value)}
          label="Kategori Preferensi 2"
          options={kategoriOptions}
        />
        <InputField
          type="select"
          name="kategori3"
          value={kategori3}
          onChange={(e) => setKategori3(e.target.value)}
          label="Kategori Preferensi 3"
          options={kategoriOptions}
        />
        <div className="text-sm text-gray-500 mt-1">
          Pilih tiga kategori berbeda sesuai minatmu.
        </div>

        <InputField
          type="text"
          name="deskripsi"
          label="Deskripsi Preferensi"
          placeholder="Contoh: Pantai, Gunung, dll."
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />

        <InputField
          type="number"
          name="rating"
          label="Minimal Rating"
          placeholder="Contoh: 4.5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min={0}
          max={5}
          step={0.1}
          required
          customValidation={(val) => {
            if (val < 0 || val > 5) return "Rating harus antara 0 - 5";
            return "";
          }}
        />

        <ReusableButton
          text={loading ? "Menyimpan..." : "Simpan Preferensi"}
          pending={loading}
          className="mt-4"
        />
      </form>
    </div>
  );
};

export default PreferenceForm;