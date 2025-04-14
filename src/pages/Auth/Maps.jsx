import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UseAuth";
import LayoutAuth from "../../components/Layout/AuthLayout";
import ContentMaps from "../../components/Maps/ContentMaps";

const Maps = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      return;
    }
  });

  return (
    <LayoutAuth >
      <ContentMaps />
    </LayoutAuth>
  );
}
export default Maps;
