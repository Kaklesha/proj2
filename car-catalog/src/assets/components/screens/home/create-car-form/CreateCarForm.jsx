import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./CreateCarForm.module.css";



const CreateCarForm = () => {


  const { register, reset, handleSubmit , formState:{errors}} = useForm({
    mode: "onChange",
  });

  const createCar = (data) => {

   // console.log(name, price, image);
//    console.log(data)
//     setCars((prev) => [{ id: prev.lengt + 1, ...data }, ...prev]);


    reset()
    //setData(clearData);
  };

  console.log(errors)

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register('name',{required:" Name is requered "})}
        placeholder="Name"
      />
      {errors?.name?.message&&    
      <p className={{color:'red',}}>Name is required</p>
      }
      <input
        placeholder="Price"
        {...register('price',{required:true})}
      />

      <input placeholder="Image"    
       {...register('image',{required:true})}
      
      />

      <button className="btn">Create</button>
    </form>
  );
};
export default CreateCarForm;
