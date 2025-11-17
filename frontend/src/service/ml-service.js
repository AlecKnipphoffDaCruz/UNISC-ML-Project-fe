import axios from 'axios'

const URL = "http://localhost:8000"


 export default async function prevision(data){
    const request = {
        valor1 : data.valor1,
        valor2 : data.valor2,
        valor3 : data.valor3
    }
    try{
    const response = axios.POST(URL, request);
    return response;
    }catch(error){
        console.log("Error at ml service:", error);
        throw new error;
    }
}