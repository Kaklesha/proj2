import styles from './Home.module.css'
import {cars} from './cars.data.js'


const Home=()=> {
  

    //  const cars = [
    //     { id: 1,
    //      name: 'Toyota Camry',
    //      price:24970,
    //      image: 'car1.jpg',
     
    //      },
    //      { id: 2,
    //          name: 'Ferrari',
    //          price:54970,
    //          image: 'car2.jpg',
         
    //          }
    //          ,
    //      { id: 3,
    //          name: 'BMW',
    //          price:94970,
    //          image: 'car3.jpg',
         
    //          }
    //  ]

    return (
      
       <div>
        <h1>
          Car catalog
        </h1>
            <div>
                {cars.map(car=>(

                    <div key={car.id} className={styles.item}>
                    <div   className={styles.image}
                    style={{
                        backgroundImage: `url(${car.image})`,
                    }}
                    />
                    <div className={styles.info}>
                    <h2>{car.name}</h2>
                    <p>{new Intl.NumberFormat('en-US',{
                        style: 'currency',
                        currency: "USD",
                        currencyDisplay: 'narrowSymbol',
                    }).format(car.price)}</p>
                    <button>Read mode</button>
                    </div>
                    </div>

                ))}
               
            </div>
       </div>
      
    )
  }
  
  export default Home