import { useEffect, useState } from "react";
import { getSavedDestinations } from "../../../api";
import Card from "../../Card";
import { CiBookmark } from "react-icons/ci";

const SavedDestination = ({ userId }) => {
  const [savedDestinations, setSavedDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSavedDestinations = async () => {
      try {
        setLoading(true);
        const data = await getSavedDestinations(userId);
        setSavedDestinations(data);
      } catch (err) {
        console.error("Error fetching saved destinations:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedDestinations();
  }, [userId]);

  if (loading) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">Gagal memuat destinasi tersimpan.</p>;
  }

  if (savedDestinations.length === 0) {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <CiBookmark className="text-3xl text-gray-600" />
            Tersimpan
          </h2>
          <div className="mt-4 flex justify-center">
            <p className="text-gray-600">Tidak ada destinasi yang tersimpan</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <CiBookmark className="text-3xl text-gray-600" />
          Tersimpan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {savedDestinations.map((item) => (
            <Card key={item.id} item={item.destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedDestination;