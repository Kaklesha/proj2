import { useState } from 'react'
import styles from './CreateCarForm.module.css'


const clearData={
    price:'',
    name:'',
    image:'',
}

const CreateCarForm=({setCars})=>{
    
    const [name, setName]=useState('')
    const [price, setPrice]=useState('')
    const [image, setImage]=useState('')

    const [data,setData]=useState({
        price: '', name:'',image:'',
    })
   
    const createCar =e=>{
        e.preventDefault()
        console.log(name,price,image)
        setCars(prev=>[{id: prev.lengt+1, 
           ...data}, ...prev])

           setData(clearData)
    }

    

    return (
        
        <form className={styles.form}>
            
            <input placeholder="Name" 
            onChange={e=>setData(
                prev=>({
                    ...prev,name: e.target.value
                })
            )}
             value={data.name} />
            <input placeholder="Price" 
             onChange={e=>setData(
                prev=>({
                    ...prev,price: e.target.value
                })
            )}
             value={data.price}/>

            <input placeholder="Image.jpg" 
             onChange={e=>setData(
                prev=>({
                    ...prev,image: e.target.value
                })
            )}
             value={data.image}/>

            <button className='btn'
            onClick={e=>createCar(e)}
            >Create</button>


        </form>


    )
}
export default CreateCarForm