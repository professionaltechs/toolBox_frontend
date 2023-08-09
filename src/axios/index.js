import axios from 'axios'

const token = () => localStorage.getItem('toolBoxToken')

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
    }
})

export const axiosAuthInstance = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
    }
})
axiosAuthInstance.interceptors.request.use(
    (config) => {
    config.headers.Authorization = `Bearer ${token()}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
