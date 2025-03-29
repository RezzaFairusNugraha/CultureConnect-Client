import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { restaurantData } from "../Dashboard/data/dataDashboard";

const RestaurantDetail = () => {
  const { name } = useParams();
  const restaurant = restaurantData.find((item) => item.name === name);

  if (!restaurant) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          {/* Nama Restoran */}
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          {/* Jenis Masakan */}
          <p className="text-gray-500 mt-1">{restaurant.location}</p>

          {/* Rating & Jumlah Rating */}
          <div className="flex items-center gap-4 mt-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-lg font-semibold">
                <FaStar className="text-sm" />
                {restaurant.rating}
              </span>
              <span className="text-gray-700">
                {restaurant.rating} Dining Ratings
              </span>
            </div>
          </div>

          {/* Info Singkat: Tutup, Harga, Alamat, Nomor Telepon */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-3 text-sm">
            <span>{restaurant.time}</span>
            <span>{restaurant.cost}</span>
            <span>{restaurant.phone}</span>
          </div>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Petunjuk
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Bagikan
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Reviews
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Book a table
            </button>
          </div>
        </div>

        {/* Foto di Bawah */}
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <img
            src={restaurant.imageUrl}
            alt="foto utama"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
