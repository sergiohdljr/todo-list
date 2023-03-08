import { validationField } from "../components/input/types";
import { api } from "../lib/axiosConfig";

export const postTask = async (data: validationField) => {
    return await api
        .post("/createTask", {
            task: data.task,
        })
        .then((response) => console.log(response.status))
};