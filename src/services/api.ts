import axios, { AxiosInstance } from "axios";
import Environment from "../config/env";

function getApi(): AxiosInstance {

  const api = axios.create({
    baseURL: Environment.VITE_API_BASE_URL,
  });

  return api;
}

export const api = getApi();
