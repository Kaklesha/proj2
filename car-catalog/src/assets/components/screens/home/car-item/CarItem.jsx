import styles from '../Home.module.css'
import {Link}  from 'react-router-dom'

const CarItem =({car})=>{

    return(<div key={car.id} className={styles.item}>
        <div   className={styles.image}
        style={{
            backgroundImage: `url(${car.image})`,
        }}
        />
        <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>{new Intl.NumberFormat('ru-RU',{
            style: 'currency',
            currency: "USD",
            currencyDisplay: 'narrowSymbol',
        }).format(car.price)}</p>
        
        {/* <Link className='btn' to='/car'>Read mode</Link> */}

        </div>
        </div>)
}

export default CarItem