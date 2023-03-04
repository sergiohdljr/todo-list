import { Tasks } from "../../App";
import { api } from "../../service/api";
import { Check, CheckedBox } from "../input/style";
import { Tarefa, TaskTitle } from "./style";

export const Task = ({ id, is_Completed, task }: Tasks) => {

  const HandleToggle = async (id: string) => {
     api
      .put(`toggleCompleteTask/${id}`)
      .then((reponse) => console.log(reponse.status));
      location.reload()
  };

  return (
    <Tarefa>
      <CheckedBox>
        <Check isChecked={is_Completed} onClick={() => HandleToggle(id)} />
      </CheckedBox>
      <TaskTitle isChecked={is_Completed}>{task}</TaskTitle>
    </Tarefa>
  );
};
