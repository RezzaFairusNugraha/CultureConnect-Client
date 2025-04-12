import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../api";
import { useAuth } from "../../context/UseAuth";
import LayoutAuth from "../../components/Layout/AuthLayout";
import LoadingAnimation from "../../components/UI/LoadingAnimation";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
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
        const result = await getUserProfile();
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
      <LayoutAuth>
        {/* <UserProfile name={data.user.name} /> */}
        INI HALAMAN UNTUK PROFILE
      </LayoutAuth>
    </div>
  );
};

export default Dashboard;
