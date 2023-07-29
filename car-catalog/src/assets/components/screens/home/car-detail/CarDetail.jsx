import { useParams,Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CarItem from "../car-item/CarItem";

import { withAuth } from "../../../../../HOC/withAuth";
import { CarService } from "../../../../../services/car.service";
//import { AuthContext } from "../../../../../providers/AuthProvider";

const CarDetail = () => {
  const [car, setCar] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const response = await CarService.getById(id);

      setCar(response);
    };

    fetchData();
  }, [id]);

  if (!car?.name) return <p>Loading..</p>;

 
  return (
    <div>
        <Link className="btn" to='/'>Back</Link>
      <CarItem car={car} />{" "}
    </div>
  );
};
export default withAuth (CarDetail);
