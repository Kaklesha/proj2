const ErrorMessage =({errors})=>{
    if(!errors)return<></>
    return <>
   
        <p className={{ color: "red" }}>Name is required</p>
      
      </>
}

export default ErrorMessage;