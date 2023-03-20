import { api } from "../lib/axiosConfig"

export interface IeditTask {
    id : string
    taskTitle?: string
}

export const editTask = async (data:IeditTask) => {
 await api.put(`/editTask/${data.id}`, {
    taskTitle: data.taskTitle 
 }).catch(erro=>console.error(erro))
}