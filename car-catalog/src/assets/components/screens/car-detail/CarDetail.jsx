import Router from "../../ui/Router"
import {BrowserRouter, Route, Routes, useParams, Link} from 'react-router-dom'
import Home from "../screens/home/Home"
import CarService from "../../../../services/car.service"
import { useState, useEffect } from "react"
import CarItem from "../home/car-item/CarItem"


const CarDetail = ()=>{

    const {id}=useParams()

    const [car, setCar]=useState({})

    useEffect(()=>{
        if(!id)return
             const fetchData= async()=>{
        
            const data = await CarService.getById(id)

            setCar(data)
            }
        
        fetchData()

      
    },[id])

    if(!car.name)return <p>Loading...</p>

    return (
        <div> 
            <Link className="btn" to='/'> Back </Link>
            <CarItem car={car}/>
        </div>

    )
}

export default CarDetail