import {useQueryClient,useMutation} from "@tanstack/react-query"
import { CarService } from "../../../../../service/car.service";

export const UseCreateCar =(reset)=>{
     const queryClient=useQueryClient()
  const { mutate } = useMutation(
    ["create car"],
    (data) => CarService.create(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('cars')
        reset();
      },
    }
  );

  const createCar = (data) => {
   mutate(data);
    console.log(`data ==== ${data}`)
    // data.map(item=>console.log(`item ==== ${item}`))
    // //setData(clearData)
  }; 
  return {createCar}
}