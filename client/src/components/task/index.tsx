import { Check, CheckedBox } from "../input/style";
import { Tarefa, TaskTitle } from "./style";

interface propsTitle {
  title: string;
  is_completed: boolean;
}

export const Task = ({ title, is_completed }: propsTitle) => {
  return (
    <Tarefa>
      <CheckedBox>
        <Check isChecked={is_completed} />
      </CheckedBox>
      <TaskTitle>{title}</TaskTitle>
    </Tarefa>
  );
};
