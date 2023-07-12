import styles from './Home.module.css'
import { useEffect, useMemo, useState } from 'react'
import {cars as carsData} from './cars.data.js'
import CarItem from './car-item/CarItem'

import CreateCarForm from './create-car-form/CreateCarForm'


const Home=()=> {
    // const filterCars = 
    // useMemo(()=>cars.filter(car=> car.price>20000)
    // , [])

  //  useMemo

//   downloadItemFetch =()=>{
//     fetch('http://localhost:9000/api/employees',
//     {
//         method: "GET",
//         headers: {
//             'Accept': 'application/json',
//         },
//     })
//     .then(response=>response.json())

//     .then( response=> {this.setState(({data})=> {
//                 const newArr = [...data,...response];
//                // console.log(newArr);
//                     return{
//                         data: newArr,
//                         isDown: true,
//                         lastId: newArr[newArr.length-1]['id']+1
//                     }
//                 }
//                )}
//         )
//     .catch(e=>console.log(e));
// }


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
            // console.log(`=====${data}`)
            // setCars(data)
//----
        }
        
        fetchData()

        console.log('hey')
    },[])

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