const PORT = "3004"

const BASE_API_URL= "http://localhost:" + PORT + "/api";
const LOGIN_URL = BASE_API_URL + "/login";
const REGISTER = BASE_API_URL + "/register";
const PRIVATE_URL = BASE_API_URL + "private";
const SESSION_URL = BASE_API_URL + "session";


export{
    REGISTER,
    LOGIN_URL,
    SESSION_URL,
    PRIVATE_URL,
 
}