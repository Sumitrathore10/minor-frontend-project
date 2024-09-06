import axios from "axios";

const instances = axios.create({
    baseURL : "https://fakestoreapi.com/"
})

export default instances;