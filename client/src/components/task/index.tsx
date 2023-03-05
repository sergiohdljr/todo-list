import { useMutation } from "react-query";
import { Tasks } from "../../App";
import { api, ToggleCompleted } from "../../service/api";
import { Client } from "../../service/queryClient";
import { Check, CheckedBox } from "../input/style";
import { DeleteTask, Tarefa, TaskTitle } from "./style";

export const Task = ({ id, is_Completed, task }: Tasks) => {
  const HandleDeleteTask = async (id: string) => {
    await api
      .delete(`/deleteTask/${id}`)
      .then((response) => console.log(response.status));
    location.reload();
  };

  interface Iid {
    id: string;
  }

  const ToggleCompletedTask = useMutation({
    mutationFn: async (data: Iid) => await ToggleCompleted(data.id),
    onSuccess: () => {
      setTimeout(() => {
        Client.invalidateQueries({ queryKey: ["tasks"] });
      }, 50);
    },
  });

  return (
    <Tarefa>
      <CheckedBox>
        <Check
          isChecked={is_Completed}
          onClick={() => ToggleCompletedTask.mutate({ id })}
        />
      </CheckedBox>
      <TaskTitle isChecked={is_Completed}>{task}</TaskTitle>
      <DeleteTask onClick={() => HandleDeleteTask(id)}>X</DeleteTask>
    </Tarefa>
  );
};
