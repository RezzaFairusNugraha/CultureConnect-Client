// import React from "react";
// import { FiPlus, FiArrowLeft } from "react-icons/fi";
// import { collectionsData } from "../../components/UI/Dashboard/data/dataDashboard";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import ItemDestination from "../../components/UI/CardItem/itemDestination";
// import SectionNotFound from "../../components/contact/ComponentContact/NotFoundSection/SectionNotFound";

// const DestinationDetail = () => {
//   const { title } = useParams();
//   const navigate = useNavigate();
//   const data = collectionsData.find((item) => item.title === title);

//   if (!data) {
//     return <SectionNotFound />;
//   }

//   const handleBack = () => {
//     if (window.history.length > 1) {
//       navigate(-1);
//     } else {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="relative">
//         <div
//           className="relative w-full h-64 md:h-80 bg-cover bg-center"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${data.imageUrl})`,
//           }}
//         >
//           <div className="absolute inset-0 bg-opacity-40" />

//           {/* Back icon */}
//           <div className="absolute top-4 left-4 z-50">
//             <button
//               className="flex items-center gap-1 text-white hover:text-gray-300 cursor-pointer"
//               onClick={handleBack}
//             >
//               <FiArrowLeft className="text-2xl" />
//               <span>Back</span>
//             </button>
//           </div>

//           <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-10 py-6 md:py-8">
//             <div className="max-w-xl">
//               <span className="block text-white font-semibold uppercase tracking-wide text-sm mb-1">
//                 CULTURECONNECT COLLECTIONS
//               </span>
//               <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
//                 {data.title}
//               </h1>
//               <p className="text-white mt-2 text-sm md:text-base">
//                 {data.placesCount}
//               </p>
//             </div>

//             <div className="mt-4 md:mt-0">
//               <button
//                 className="
//                   flex items-center gap-2
//                   px-4 py-2
//                   text-white
//                   bg-gray-800 bg-opacity-70
//                   hover:bg-opacity-90
//                   rounded
//                   focus:outline-none
//                   focus:ring-2 focus:ring-white
//                 "
//                 onClick={() => alert("Koleksi disimpan!")}
//               >
//                 <FiPlus className="text-lg" />
//                 <span>Simpan Koleksi</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ItemDestination />
//     </div>
//   );
// };

// export default DestinationDetail;
