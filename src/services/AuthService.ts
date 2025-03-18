import { AxiosError } from "axios";
import apiClient from "./api/apiClient";

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
  } catch (err: any) {
    if (err instanceof AxiosError) {
      console.error("Axios Error: ", err.response?.data || err.message);
    } else {
      console.error("Unknown Error: ", err);
    }
    throw err;
  }
};

export const registerUser = async (credentials: {
  email: string;
  name: string;
  password: string;
}) => {
  try { 
    const response = await apiClient.post("/auth/register", credentials);
    return response.data;
  } catch (err: any) {
    if (err instanceof AxiosError) {
      console.error("Axios Error: ", err.response?.data || err.message);
    } else {
      console.error("Unknown Error: ", err);
    }
    throw err;
  }
};
