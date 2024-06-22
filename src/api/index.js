import axios from "axios";

const MainUrl = axios.create({
    baseURL: "https://market.ilyosbekdev.uz"
})

MainUrl.interceptors.request.use((req) => {
    const token = localStorage.getItem("x-auth-token")
    if (token) {
        req.headers.Authorization = `Bearer ${token}`
    }
    return req
})

export default MainUrl