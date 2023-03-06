import { useMutation } from "react-query";
import { Iid } from "../../components/task/types";
import { HandleDeleteTask, ToggleCompleted } from "../../service/api";
import { Client } from "../../service/queryClient";

export const UseMutateTasks = () => {

    const ToggleCompletedTask = useMutation({
        mutationFn: async (data: Iid) => await ToggleCompleted(data.id),
        onSuccess: () => {
            setTimeout(() => {
                Client.invalidateQueries({ queryKey: ["tasks"] });
            }, 50);
        },
    });

    const DeleteTask = useMutation({
        mutationFn: async (data: Iid) => await HandleDeleteTask(data.id),
        onSuccess: () => {
            setTimeout(() => {
                Client.invalidateQueries({ queryKey: ["tasks"] });
            }, 900);
        },
    });

    return { ToggleCompletedTask, DeleteTask }
}

