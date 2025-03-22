import { AxiosError } from "axios";
import apiClient from "./api/apiClient";

export const getHistory = async () => {
  try {
    const storedAuth = localStorage.getItem("auth");
    const token = storedAuth ? JSON.parse(storedAuth).accessToken : null;

    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await apiClient.get("/payment/history", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
