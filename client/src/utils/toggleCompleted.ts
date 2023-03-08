import { api } from "../lib/axiosConfig";

export const toggleCompletedTask = async (id: string) => {
    return await api
        .put(`toggleCompleteTask/${id}`)
        .then((reponse) => console.log(reponse.status));
};