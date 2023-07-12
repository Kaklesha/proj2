import axios from "axios"
//import {} from ""

export const CarService ={
        //-----Пришлось переписать await ума не приложу как его сцепить с Go в авторской версии этого хука
                    // 'http://localhost:9000/api/employees',{
                   
    async getAll(){
        const response = await axios.get("http://localhost:9000/api/employees")
        return response.data
    },

    async getById(id){
        let data;
        const response = await fetch(`http://localhost:9000/api/employees/${id}`)
        .then(response=>response.json())
        .then(_data=>{data = _data})
        return data
    }
}
export default CarService