import { useParams, Link, useNavigate } from "react-router-dom";
import { restaurantData } from "../../components/UI/Dashboard/data/dataDashboard";
import NotFound from "../NotFound";
import LayoutAuth from "../../components/Layout/AuthLayout";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../api";
import { useAuth } from "../../context/AuthContext";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import ItemContainer from "../../components/UI/CardItem/itemContainer";

function CardItem() {
  const { name } = useParams();
  const restaurant = restaurantData.find((item) => item.name === name);
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

  if (!restaurant) {
    return <NotFound />;
  }
  return (
    <LayoutAuth name={data.user.name}>
      <ItemContainer />
    </LayoutAuth>
  );
}

export default CardItem;
