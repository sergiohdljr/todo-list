import { api } from "../lib/axiosConfig"

export const DeleteCompleteTasks = () => {
    api.delete('/deleteCompletedTasks').then(response=>response.status)
}