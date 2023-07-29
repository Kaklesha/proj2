import { useState } from "react";
import { useForm } from "react-hook-form";

import styles from "./CreateCarForm.module.css";
import ErrorMessage from "./ErrorMessage";
import { UseCreateCar } from "./useCreateCar";


const CreateCarForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

 const {createCar}=UseCreateCar(reset)

  console.log(errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createCar)}>
      <input
        {...register("name", { required: " Name is requered " })}
        placeholder="Name"
      />
      <ErrorMessage errors={errors?.name?.message}/>
      <input placeholder="Price" {...register("price", { required: true })} />

      <input placeholder="Image" {...register("image", { required: true })} />

      <button className="btn" onClick={createCar}>
        Create
      </button>
    </form>
  );
};
export default CreateCarForm;
