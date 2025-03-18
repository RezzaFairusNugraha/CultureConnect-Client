import React from "react";
import { user } from "../../data/user";

const Profile = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow">
      <h2 className="font-semibold text-xl">Halo, {user.name}!</h2>
      <p>Minat utama: {user.preferences.join(", ")}</p>
      <p>Destinasi yang pernah dikunjungi: {user.visited.join(", ")}</p>
    </div>
  );
};

export default Profile;
