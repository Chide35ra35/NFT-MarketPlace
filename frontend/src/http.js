import axios from "axios";
const http = axios.create({
    baseURL : "http://localhost:5000/api",
    // baseURL: "https://nftmarketplace-4cua.onrender.com/api",
    headers: {
        "content-type": "application/json"
    }
});
export default http;
