import { Link, useNavigate } from "react-router-dom";
import LayoutAuth from "../../components/Layout/AuthLayout";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../api";
import { useAuth } from "../../context/AuthContext";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import ItemContainer from "../../components/UI/CardItem/itemContainer";

function DestinationItem() {
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
    <LayoutAuth name={data.user.name}>
      <ItemContainer />
    </LayoutAuth>
  );
}

export default DestinationItem;
