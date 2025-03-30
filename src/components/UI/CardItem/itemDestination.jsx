import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoStar } from "react-icons/io5";
import { kuliner, wisata, museum } from "../Dashboard/data/dataDashboard";
import { useNavigate } from "react-router-dom";

const RestaurantCard = () => {
  const navigate = useNavigate();
  const allData = [...kuliner, ...wisata, ...museum];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {allData.map((item, index) => (
          <Card
            key={index}
            className="
              rounded-2xl
              shadow-none
              bg-transparent
              transition-colors
              duration-300
              hover:shadow-2xl
              hover:bg-white
            "
          >
            <CardHeader className="relative h-56 rounded-t-2xl overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="px-4 py-4">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.name}
              </Typography>
              <Typography className="text-sm text-gray-600 mb-1">
                {item.location}
              </Typography>
              <Typography className="text-sm text-gray-600 mb-1">
                {item.cost}
              </Typography>
              <Typography className="text-sm text-green-600 mb-2">
                {item.time}
              </Typography>
              <Typography
                variant="small"
                className="text-blue-500 font-semibold items-center space-x-2 flex"
              >
                <IoStar className="text-xl" /> Rating: {item.rating} -{" "}
                {item.discount}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="filled"
                className="bg-amber-800 hover:bg-amber-900"
                onClick={() => navigate(`/dashboard/${item.name}`)}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCard;
