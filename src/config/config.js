const PORT = "3004"

const BASE_API_URL= "http://localhost:" + PORT + "/api";
const LOGIN_URL = BASE_API_URL + "/login";
const REGISTER = BASE_API_URL + "/register";
const EDIT_USER = BASE_API_URL + "/edit";
const DELETE_USER = BASE_API_URL + "/delete"
const PRIVATE_URL = BASE_API_URL + "private";


export{
    REGISTER,
    LOGIN_URL,
    EDIT_USER,
    DELETE_USER,
    PRIVATE_URL,
 
}