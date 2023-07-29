import CarItem from "../car-item/CarItem"

const Catalog =({data})=>{
    return  <div> <h1>Car catalog</h1>
   
   
      {data.length && data.map((car) => <CarItem key={car.id} car={car} />)}
    </div>
}

export default Catalog