import styles from './Home.module.css'
import { useMemo, useState } from 'react'
import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/CarItem'

import CreateCarForm from './create-car-form/CreateCarForm'
const Home=()=> {
    // const filterCars = 
    // useMemo(()=>cars.filter(car=> car.price>20000)
    // , [])

  //  useMemo

    const [cars,setCars]=useState(carsData)
    console.log(cars)
    return (
      
       <div>
        <h1>
          Car catalog
        </h1>
        <CreateCarForm  setCars={setCars} />
            <div>
                {cars.length&&cars.map(car=>(

                  <CarItem  key={car.id} car={car} />

                ))}
               
            </div>
       </div>
      
    )
  }
  
  export default Home