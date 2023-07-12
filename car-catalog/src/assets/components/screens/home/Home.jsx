import styles from './Home.module.css'
import { useEffect, useMemo, useState } from 'react'
import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/CarItem'
import VideoPlayer from './Player.jsx'

import CreateCarForm from './create-car-form/CreateCarForm'


const Home=()=> {
    

    useEffect(()=>{

        const fetchData= async()=>{
            const response = fetch(
//-----Пришлось переписать await ума не приложу как его сцепить с Go в авторской версии этого хука
            'http://localhost:9000/api/employees',{
                method: 'GET',
                headers:{
                    'Accept': 'application',
                },
            })
            .then(response=>response.json())
            .then(response=>{setCars(response)})
//----

        }
        fetchData()
        console.log('hey')
    },[])

    const [cars,setCars]=useState(carsData)
    console.log(cars)


   // const {push} = useNavigate()

    return (
      
       <div>
        <h1>
          Car catalog
        </h1>
       <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    

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