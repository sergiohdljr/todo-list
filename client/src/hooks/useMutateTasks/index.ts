import { useMutation } from "react-query";
import { Iid } from "../../components/task/types";
import { Client } from "../../lib/queryClient";
import { ModalStore } from "../../store";
import { handleDeleteTask } from "../../utils/deleteTask";
import { editTask, IeditTask } from "../../utils/editTask";
import { toggleCompletedTask } from "../../utils/toggleCompleted";

export const UseMutateTasks = () => {
   const {setModal} = ModalStore()


    const ToggleCompletedTask = useMutation({
        mutationFn: async (data: Iid) => await toggleCompletedTask(data.id),
        onSuccess: () => {
            setTimeout(() => {
                Client.invalidateQueries({ queryKey: ["tasks"] });
            }, 50);
        },
    });

    const DeleteTask = useMutation({
        mutationFn: async (data: Iid) => await handleDeleteTask(data.id),
        onSuccess: () => {
            setTimeout(() => {
                Client.invalidateQueries({ queryKey: ["tasks"] });
            }, 900);
        },
    });

    const EditTask = useMutation({
        mutationFn: async (data: IeditTask) => await editTask(data),
        onSuccess: () => {
            Client.invalidateQueries({ queryKey: ["tasks"] });
            setTimeout(() => {
                setModal()
            }, 150);
        }
    })

    return { ToggleCompletedTask, DeleteTask, EditTask }
}

