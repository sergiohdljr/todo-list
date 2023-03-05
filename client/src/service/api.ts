import axios, { AxiosInstance } from "axios";
import { validationField } from "../components/input/interfaces";

export const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3333/"
})

export const postTask = async (data: validationField, loading: React.Dispatch<React.SetStateAction<boolean>>) => {
  return await api
        .post("/createTask", {
            task: data.task,
        })
        .then((response) => console.log(response.status))
        .finally(() => {
            setTimeout(() => {
                loading(false);
                location.reload();
            }, 900);
        });
};