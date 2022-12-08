import axios from "axios";

const api= axios.create({
    baseURL:"https://restapi-tdcp.onrender.com/"
});


export default api;