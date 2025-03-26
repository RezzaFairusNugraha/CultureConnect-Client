import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../api";
import { useAuth } from "../../context/AuthContext";
import LayoutAuth from "../../components/Layout/AuthLayout";
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
    <>
    <LayoutAuth name={data.user.name}>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {error && <p className="text-red-500">{error}</p>}
        {data ? (
          <div className="mt-4 p-4 border rounded shadow-md">
            <p>User ID: {data.user.id}</p>
            <p>Name : {data.user.name}</p>
            <p>Email : {data.user.email}</p>
          </div>
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </div>
    </LayoutAuth>
    </>
  );
};

export default Dashboard;
