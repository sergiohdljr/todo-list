import { Input, Checked, Ball, InputField } from "./style";

export const InputNewTask = () => {
  return (
    <Input>
      <Checked>
        <Ball />
      </Checked>
      <InputField placeholder="Digite uma nova tarefa..." />
    </Input>
  );
};
