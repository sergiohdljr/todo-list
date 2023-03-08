import { api } from "../lib/axiosConfig";

export const handleDeleteTask = async (id: string) => {
    await api
        .delete(`/deleteTask/${id}`)
        .then((response) => console.log(response.status))
};