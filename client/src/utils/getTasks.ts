import { api } from "../lib/axiosConfig";

export const getTask = () => api.get("/tasks").then((dados) => dados.data);