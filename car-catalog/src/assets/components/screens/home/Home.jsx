import { useEffect, useState } from "react";
import { cars as carsData } from "./cars.data.js";
import CarItem from "./car-item/CarItem";
import {useNavigate} from "react-router-dom";

import CreateCarForm from "./create-car-form/CreateCarForm";
import "./Home.module.css";
import { CarService } from "../../../../service/car.service.js";
import VideoPlayer from "./player.jsx";

const Home = () => {
  const [cars, setCars] = useState(carsData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CarService.getAll();

      setCars(response);
    };

    fetchData();
  }, [])

const nav = useNavigate()

  return (
    <div>
      <h1>Car catalog</h1>
      <VideoPlayer />

      <button onClick={()=>nav('/car/1')}> gg </button>
      <CreateCarForm setCars={setCars} />
      <div>
        {cars.length && cars.map((car) => <CarItem key={car.id} car={car} />)}
      </div>
    </div>
  );
};

export default Home;
