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

const Home = () => {
  const { data, isLoading, error } = useQuery(["cars"], () =>
    CarService.getAll()
  );

  const [cars, setCars] = useState(carsData);

  const nav = useNavigate();

  const { user, setUser } = useContext(AuthContext);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.username}!</h2>
        </>
      ) : (
        <>
          <h2>You need auth</h2>
        </>
      )}

      <h1>Car catalog</h1>
      <VideoPlayer />

      <button onClick={() => nav("/car/1")}> gg </button>
      <CreateCarForm setCars={setCars} />
      <div>
        {data.length && data.map((car) => <CarItem key={car.id} car={car} />)}
      </div>
    </div>
  );
};

export default Home;
