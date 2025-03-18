import React from "react";
import { user } from "../../data/user";

const Stats = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="font-semibold text-lg">Statistik Perjalanan</h3>
      <p>Total Destinasi Dikunjungi: {user.visited.length}</p>
    </div>
  );
};

export default Stats;
