import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://real-estate-backend-5dn7.onrender.com",
    withCredentials:true
})

export default apiRequest