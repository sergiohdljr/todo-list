import { Spinner } from "../input/style";
import { Tasks } from "../../App";
import { Check, CheckedBox } from "../input/style";
import { DeleteTaskBtn, EditTaskBtn, Tarefa, TaskTitle } from "./style";
import { UseMutateTasks } from "../../hooks/useMutateTasks";
import { CrossIcon } from "../crossIcon";
import { ModalStore } from "../../store";
import { EditTaskIcon } from "../editIcon";
import { EditarTarefa } from "../modal";

export const Task = ({ id, is_Completed, task }: Tasks) => {
  const { ToggleCompletedTask, DeleteTask } = UseMutateTasks();
  const { open, setModal } = ModalStore();

  return (
    <>
    {open ? (<EditarTarefa id={id}/>): null}
    <div>
      <Tarefa>
        <CheckedBox>
          <Check
            type="button"
            isChecked={is_Completed}
            onClick={() => ToggleCompletedTask.mutate({ id })}/>
        </CheckedBox>
        <TaskTitle isChecked={is_Completed}>{task}</TaskTitle>
        <EditTaskBtn onClick={() => setModal()}>
        <EditTaskIcon />
      </EditTaskBtn>
        <DeleteTaskBtn type="button" onClick={() => DeleteTask.mutate({ id })}>
          {DeleteTask.isLoading ? <Spinner /> : <CrossIcon />}
        </DeleteTaskBtn>
      </Tarefa>
    </div>
    </>
  );
};
