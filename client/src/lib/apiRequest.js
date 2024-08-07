import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://real-estate-backend-5dn7.onrender.com",
    withCredentials:true
    // baseURL:"http://localhost:5000",
    // withCredentials:true
})

export default apiRequest