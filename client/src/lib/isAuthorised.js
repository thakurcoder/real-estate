import apiRequest from "./apiRequest"

export const isauthorised = async ()=>{
    const res = await apiRequest.get("/api/auth/authorised")
    console.log("authorise ",res)
    return res.data
}