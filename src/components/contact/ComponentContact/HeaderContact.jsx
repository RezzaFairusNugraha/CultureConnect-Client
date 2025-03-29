import React from "react";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

function HeaderContact() {
  const contactItems = [
    {
      icon: <FiMail size={24} />,
      title: "Alamat Email",
      details: ["info@example.com", "support@example.com"],
    },
    {
      icon: <FiPhoneCall size={24} />,
      title: "Nomor Telepon",
      details: ["+1 (123) 1234 4567", "+99 (987) 5432 4567"],
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Alamat Kami",
      details: ["82 12th Street, Office 14", "Edinburgh, UK"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 md:p-8 bg-white md:bg-transparent rounded-lg shadow-md md:shadow-none"
          >
            <div className="bg-amber-100 text-amber-800 p-4 rounded-full mb-3">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">
              {item.details.map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderContact;
