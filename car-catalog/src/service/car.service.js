import axios from "axios";

export const CarService={

  async getAll(){

            const response = await axios.get(
            'http://localhost:9000/api/employees')
        
          
        
        console.log('hey_axios');
        return response.data;
    }
  } 
