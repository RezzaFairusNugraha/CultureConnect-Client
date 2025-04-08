import HeaderProfile from "./Profile/Components/HeaderProfile";
import ContentProfile from "./Profile/Components/ContentProfile";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-[#EAE0C8]">
      <HeaderProfile />
      <ContentProfile />
    </div>
  );
};

export default UserProfile;
