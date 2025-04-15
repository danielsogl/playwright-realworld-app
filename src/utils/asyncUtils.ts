import axios from "axios";

const httpClient = axios.create({
  withCredentials: true,
});

httpClient.interceptors.request.use((config) => {
  return config;
});

export { httpClient };
