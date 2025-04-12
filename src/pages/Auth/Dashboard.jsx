import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../api";
import { useAuth } from "../../context/UseAuth";
import LayoutAuth from "../../components/Layout/AuthLayout";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import Hero from "../../components/UI/Dashboard/Hero";
import Destination from "../../components/UI/Dashboard/Destination";
import SavedDestination from "../../components/UI/Dashboard/SavedDestination";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [category, setCategory] = useState("kuliner");

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
      } catch {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, [isAuthenticated, navigate]);

  if (isLoading) return <LoadingAnimation />;
  return (
    <LayoutAuth name={data.user.name}>
      <Hero />
      <SavedDestination userId={data.user.id} />
      <Destination category={category} setCategory={setCategory} />
    </LayoutAuth>
  );
};

export default Dashboard;
