import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // server url
  withCredentials: true, // for cookie session to work
});
export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};
export default axiosInstance;
