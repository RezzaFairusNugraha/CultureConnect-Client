import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/"; // Balikin ke login kalau nggak ada token
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/dashboard", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Gagal mengambil data");
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      {data ? (
        <div className="mt-4 p-4 border rounded shadow-md">
          <p>Pengunjung: {data.dashboardData.visitors}</p>
          <p>Pendapatan: ${data.dashboardData.revenue}</p>
          <p>Pengguna Baru: {data.dashboardData.newUsers}</p>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
            className="mt-3 p-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
