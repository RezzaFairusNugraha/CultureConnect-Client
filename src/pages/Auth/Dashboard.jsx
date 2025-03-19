import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../api";
import Layout from "../../components/Layout/CommonLayout";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    const fetchDashboard = async () => {
      try {
        setIsLoading(true);
        const result = await fetchDashboardData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, [isAuthenticated, navigate]);

  if (isLoading) return <p>Loading data...</p>;

  return (
    <Layout>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {error && <p className="text-red-500">{error}</p>}
        {data ? (
          <div className="mt-4 p-4 border rounded shadow-md">
            <p>Pengunjung: {data.dashboardData.visitors}</p>
            <p>Pendapatan: ${data.dashboardData.revenue}</p>
          </div>
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
