import axios, { AxiosInstance } from "axios";
import { validationField } from "../components/input/interfaces";
import { Client } from "./queryClient";

export const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3333/"
})

export const postTask = async (data: validationField) => {
    return await api
        .post("/createTask", {
            task: data.task,
        })
        .then((response) => console.log(response.status))
};

export const ToggleCompleted = async (id: string) => {
    return await api
        .put(`toggleCompleteTask/${id}`)
        .then((reponse) => console.log(reponse.status));
};