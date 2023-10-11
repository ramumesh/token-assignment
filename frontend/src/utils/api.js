import axios from "axios";
import { SERVICES } from "./contants";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const callValidateApi = (token) => {
    return axios.get(SERVICES.validate, { params: { token } });
};
export default axios;