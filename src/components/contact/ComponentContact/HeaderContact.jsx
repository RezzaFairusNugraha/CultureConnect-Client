import React from "react";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

function HeaderContact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 pt-10">
      <div
        className="flex flex-col items-center text-center  p-6 "
      >
        <div className="bg-amber-100 text-amber-800 p-4 rounded-full mb-3">
          <FiMail size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2">Alamat Email</h3>
        <p className="text-gray-600">
          info@example.com <br />
          support@example.com
        </p>
      </div>
      <div
        className="flex flex-col items-center text-center  p-6 "
      >
        <div className="bg-amber-100 text-amber-800 p-4 rounded-full mb-3">
          <FiPhoneCall size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2">Nomor Telepon</h3>
        <p className="text-gray-600">
          +1 (123) 1234 4567 <br />
          +99 (987) 5432 4567
        </p>
      </div>
      <div
        className="flex flex-col items-center text-center  p-6 "
      >
        <div className="bg-amber-100 text-amber-800 p-4 rounded-full mb-3">
          <FiMapPin size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2">Alamat Kami</h3>
        <p className="text-gray-600">
          82 12th Street, Office 14 <br />
          Edinburgh, UK
        </p>
      </div>
    </div>
  );
}

export default HeaderContact;
