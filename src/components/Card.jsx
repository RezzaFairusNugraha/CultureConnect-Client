import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg h-full">
      <img
        className="w-full h-48 object-cover"
        src={item.imageUrl}
        alt={item.name}
        loading="lazy"
      />
      <div className="flex flex-col p-4 flex-grow">
        <p className="text-right text-sm text-gray-600 mb-1">{item.location}</p>
        <a href="#" className="font-bold text-xl mb-2 line-clamp-2">{item.name}</a>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.description}</p>
        
        <div className="mt-auto text-right">
          <Link
            to={`/dashboard/${item.id}`}
            state={{ destination: item }}
            className="bg-amber-800 text-white py-2 px-4 rounded text-sm cursor-pointer hover:bg-amber-900 transition duration-200">
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;