import { Spinner } from "../input/style";
import { useMutation } from "react-query";
import { Tasks } from "../../App";
import { HandleDeleteTask, ToggleCompleted } from "../../service/api";
import { Client } from "../../service/queryClient";
import { Check, CheckedBox } from "../input/style";
import { DeleteTaskBtn, Tarefa, TaskTitle } from "./style";

export const Task = ({ id, is_Completed, task }: Tasks) => {
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

  const DeleteTask = useMutation({
    mutationFn: async (data: Iid) => await HandleDeleteTask(data.id),
    onSuccess: () => {
      setTimeout(() => {
        Client.invalidateQueries({ queryKey: ["tasks"] });
      }, 900);
    },
  });

  return (
    <Tarefa>
      <CheckedBox>
        <Check
          type="button"
          isChecked={is_Completed}
          onClick={() => ToggleCompletedTask.mutate({ id })}
        />
      </CheckedBox>
      <TaskTitle isChecked={is_Completed}>{task}</TaskTitle>
      <DeleteTaskBtn type="button" onClick={() => DeleteTask.mutate({ id })}>
        {DeleteTask.isLoading ? <Spinner /> : "X"}
      </DeleteTaskBtn>
    </Tarefa>
  );
};
