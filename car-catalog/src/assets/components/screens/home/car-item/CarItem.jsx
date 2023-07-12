import styles from '../Home.module.css'
import {Link}  from 'react-router-dom'
import Price from './Price'
const CarItem =({car})=>{

    return(<div key={car.id} className={styles.item}>
        <div   className={styles.image}
        style={{
            backgroundImage: `url(${car.image})`,
        }}
        />
        <div className={styles.info}>
        <h2>{car.name}</h2>
        
        <Price price={car.price}/>

        {/* <Link className='btn' to='/car'>Read mode</Link> */}
        <div>Line</div>
        </div>
        </div>)
}

export default CarItem