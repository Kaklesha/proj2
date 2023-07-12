import styles from './Home.module.css'

const Home=()=> {
  
    return (
      
       <div>
        <h1>
          Car catalog
        </h1>
            <div>
                <div  className={styles.item}>
                    <div   className={styles.image}
                    style={{
                        backgroundImage: 'url(/car1.jpg)',
                    }}
                    />
                    <div className={styles.info}>
                    <h2>Car1</h2>
                    <p>Car 1 desc</p>
                    <p>10000$</p>
                    <button>Read mode</button>
                    </div>
                </div>
            </div>
       </div>
      
    )
  }
  
  export default Home