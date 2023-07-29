import axios from "axios";

export const  CarService ={
    async getAll(){
        const response = await axios.get(
            'http://localhost:9000/api/employees')
            
            console.log(response.data);
            return response.data;
    },
    async getById(id){
        const response = await axios.get(
           ` http://localhost:9000/api/employees?id=${id}`)
            
            console.log(response.data);
            return response.data[0];
    },
    
    async create (data){
     
        return axios.post(
            'http://localhost:9000/api/employees',data)
            
    }
    
}