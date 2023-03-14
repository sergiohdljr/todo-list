import { CrossIcon } from "../crossIcon";
import { Modal, ModalContent } from "./style";
import { CaretRight } from "phosphor-react";
import { ModalStore, UsethemeStore } from "../../store";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, validationField } from "../input/types";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../input/style";
import { UseMutateTasks } from "../../hooks/useMutateTasks";
import { EditTaskBtn } from "../task/style";
import { EditTaskIcon } from "../editIcon";
import { IeditTask } from "../../utils/editTask";
import { SubmitHandler } from "react-hook-form/dist/types";

export const EditarTarefa = (id:string) => {
  const { open, setModal } = ModalStore();
  const { theme } = UsethemeStore();
  const { EditTask } = UseMutateTasks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validationField>({ resolver: zodResolver(schema) });

  const OnSubmit: SubmitHandler<IeditTask> = (data) => {
    EditTask.mutate({
      id: id,
      taskTitle: data.taskTitle,
    });
  };

  return (
    <>
      <EditTaskBtn onClick={() => setModal()}>
        <EditTaskIcon />
      </EditTaskBtn>
      {open ? (
        <Modal>
          <ModalContent>
            <button
              className="button--close"
              type="button"
              onClick={() => setModal()}
            >
              <CrossIcon />
            </button>
            <h3>Edite a tarefa</h3>
            <form action="">
              <div className="form-div">
                <input type="text" {...register("task")} />
                <button>
                  <CaretRight width={28} height={28} color={theme.colors.app} />
                </button>
              </div>
              {errors ? (
                <ErrorMessage>{errors.task?.message}</ErrorMessage>
              ) : null}
            </form>
          </ModalContent>
        </Modal>
      ) : null}
    </>
  );
};
