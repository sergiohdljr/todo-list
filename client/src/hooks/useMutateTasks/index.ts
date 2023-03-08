import { useMutation } from "react-query";
import { Iid } from "../../components/task/types";
import { Client } from "../../lib/queryClient";
import { handleDeleteTask } from "../../utils/deleteTask";
import { toggleCompletedTask } from "../../utils/toggleCompleted";

export const UseMutateTasks = () => {

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

    return { ToggleCompletedTask, DeleteTask }
}

