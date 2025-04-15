import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../api";
import { useAuth } from "../../context/UseAuth";
import LayoutAuth from "../../components/Layout/AuthLayout";
import LoadingAnimation from "../../components/UI/LoadingAnimation";
import Hero from "../../components/UI/Dashboard/Hero";
import Destination from "../../components/UI/Dashboard/Destination";
import SavedDestination from "../../components/UI/Dashboard/SavedDestination";
import PreferenceModal from "./PreferenceModal";
import { hasPreferences } from "../../utils/Preferences"; 

const Dashboard = () => {
  const { isAuthenticated, setProfile } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState("kuliner");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }

    const fetchDashboard = async () => {
      try {
        setIsLoading(true);
        const result = await getUserData();

        if (!result.user?.name || !result.user?.email) {
          navigate("/fill-user-data");
          return;
        }

        setData(result);
        setProfile(result.user);

        const preferencesExist = await hasPreferences(result.user.id);
        if (!preferencesExist) {
          setShowModal(true);
        }
      } catch (error) {
        console.error("Gagal mengambil data pengguna:", error);
        navigate("/fill-user-data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboard();
  }, [isAuthenticated, navigate, setProfile]);

  const handleModalClose = async () => {
    const updated = await getUserData();
    setProfile(updated.user);
    setData(updated);
    setShowModal(false);
  };

  if (isLoading) return <LoadingAnimation />;

  return (
    <LayoutAuth>
      {showModal && <PreferenceModal onClose={handleModalClose} />}
      <Hero />
      <SavedDestination userId={data.user.id} />
      <Destination
        category={category}
        setCategory={setCategory}
        userId={data.user.id}
      />
    </LayoutAuth>
  );
};

export default Dashboard;
