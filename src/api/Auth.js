import axios from "./AxiosConfig";

const BASE_URL = "/auth"
export const login = (credential) =>{
    return  axios.post(`${BASE_URL}/token`, credential);

}
export const introspect = (token) => {
   return axios.post(`${BASE_URL}/introspect`, token);

}