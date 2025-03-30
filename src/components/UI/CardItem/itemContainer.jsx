import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { kuliner, wisata, museum } from "../Dashboard/data/dataDashboard";
import SectionNotFound from "../../contact/ComponentContact/NotFoundSection/SectionNotFound";

const KulinerDetail = () => {
  const { name } = useParams();
  const combinedData = [...kuliner, ...wisata, ...museum];
  const data = combinedData.find((item) => item.name === name);

  if (!data) {
    return <SectionNotFound />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{data.name}</h1>
          <p className="text-gray-500 mt-1">{data.location}</p>
          <div className="flex items-center gap-4 mt-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-lg font-semibold">
                <FaStar className="text-sm" />
                {data.rating}
              </span>
              <span className="text-gray-700">
                {data.rating} Dining Ratings
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-3 text-sm">
            <span>{data.time}</span>
            <span>{data.cost}</span>
            <span>{data.phone}</span>
          </div>
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
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <img
            src={data.imageUrl}
            alt="foto utama"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default KulinerDetail;
