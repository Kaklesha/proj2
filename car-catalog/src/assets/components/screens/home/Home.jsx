import { useEffect, useState, useCallback, useMemo, useContext } from "react";
import { cars as carsData } from "./cars.data.js";
import CarItem from "./car-item/CarItem";
import { useNavigate } from "react-router-dom";

import CreateCarForm from "./create-car-form/CreateCarForm";
import "./Home.module.css";
import { CarService } from "../../../../service/car.service.js";
import VideoPlayer from "./player.jsx";
import { AuthContext } from "../../../../providers/AuthProvider.jsx";
import { useQuery } from "@tanstack/react-query";
import Header from "../../ui/Header/header.jsx";
import Catalog from "./catalog/Catalog.jsx";

const Home = () => {
  const { data, isLoading, error } = useQuery(["cars"], () =>
    CarService.getAll()
  );

  const [cars, setCars] = useState(carsData);

  const nav = useNavigate();



  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
    {/* <Header/> */}

    <VideoPlayer />
    <Catalog data={data}/>
  <button onClick={() => nav("/car/1")}> gg </button>
  <CreateCarForm setCars={setCars} />
    </div>
  );
};

export default Home;
