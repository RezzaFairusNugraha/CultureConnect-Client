import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDashboardData } from "../../api";
import { useAuth } from "../../context/AuthContext";
import LayoutAuth from "../../components/Layout/AuthLayout";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import Hero from "../../components/UI/Dashboard/Hero";
import Destination from "../../components/UI/Dashboard/Destination";
import RestaurantCard from "../../components/UI/Dashboard/Card";
import HeroPromotion from "../../components/UI/Dashboard/Promotion";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
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
    <LayoutAuth name={data.user.name}>
      <Hero />
      <Destination category={category} setCategory={setCategory} />
      <HeroPromotion />
      <RestaurantCard category={category} />
    </LayoutAuth>
  );
};

export default Dashboard;
