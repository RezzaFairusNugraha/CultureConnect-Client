// import { useParams, useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { FiArrowLeft } from "react-icons/fi";
// // import { kuliner, wisata, museum } from "../Dashboard/data/dataDashboard";
// import SectionNotFound from "../../contact/ComponentContact/NotFoundSection/SectionNotFound";

// const ItemDetail = () => {
//   const { name } = useParams();
//   const navigate = useNavigate();
//   const combinedData = [...kuliner, ...wisata, ...museum];
//   const data = combinedData.find((item) => item.name === name);

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

//   const handleShare = () => {
//     navigator.clipboard
//       .writeText(window.location.href)
//       .then(() => {
//         alert("Link telah disalin ke clipboard!");
//       })
//       .catch((err) => {
//         console.error("Gagal menyalin: ", err);
//       });
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md relative">
//       {/* Back Button */}
//       <button
//         className="absolute top-4 left-4 flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer"
//         onClick={handleBack}
//       >
//         <FiArrowLeft className="text-2xl" />
//         <span>Kembali</span>
//       </button>

//       <div className="flex flex-col gap-4 mt-10">
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold">{data.name}</h1>
//           <p className="text-gray-500 mt-1">{data.location}</p>
//           <div className="flex items-center gap-4 mt-3 text-sm">
//             <div className="flex items-center gap-2">
//               <span className="flex items-center gap-1 bg-green-600 text-white px-2 py-1 rounded-lg font-semibold">
//                 <FaStar className="text-sm" />
//                 {data.rating}
//               </span>
//               <span className="text-gray-700">
//                 {data.rating} Dining Ratings
//               </span>
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center gap-4 text-gray-600 mt-3 text-sm">
//             <span>{data.time}</span>
//             <span>{data.cost}</span>
//             <span>{data.phone}</span>
//           </div>
//           <div className="flex flex-wrap gap-3 mt-4">
//             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
//               Petunjuk
//             </button>
//             <button
//               className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
//               onClick={handleShare}
//             >
//               Bagikan
//             </button>
//             <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
//               Book a table
//             </button>
//           </div>
//         </div>
//         <div className="w-full h-64 rounded-lg overflow-hidden">
//           <img
//             src={data.imageUrl}
//             alt="foto utama"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemDetail;
