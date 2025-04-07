import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../api";
import { useAuth } from "../../context/UseAuth";
import LayoutAuth from "../../components/Layout/AuthLayout";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import UserProfile from "../../components/UI/UserProfile";

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

  if (isLoading) return <LoadingAnimation />;

  return (
    <div className="overflow-x-hidden">
      <LayoutAuth name={data.user.name}>
        <UserProfile name={data.user.name} />
      </LayoutAuth>
    </div>
  );
};

export default Dashboard;
