import { CrossIcon } from "../crossIcon";
import { CloseButton, EditTaskButton, FildForm, Form, Modal, ModalContent, Title } from "./style";
import { CaretRight } from "phosphor-react";
import { ModalStore, UsethemeStore } from "../../store";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, validationField } from "../input/types";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../input/style";
import { UseMutateTasks } from "../../hooks/useMutateTasks";
import { SubmitHandler } from "react-hook-form/dist/types";

interface Ieditartarefa{
  id:string
  task?:string
  taskTitle?:string
}

export const EditarTarefa = ({id}:Ieditartarefa) => {

  const { setModal } = ModalStore();
  const { theme } = UsethemeStore();
  const { EditTask } = UseMutateTasks();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Ieditartarefa>({ resolver: zodResolver(schema)});

  const OnSubmit: SubmitHandler<Ieditartarefa> = (data) => {
    EditTask.mutate({
      id: id,
      taskTitle: data.task,
    });
  };

  return (
        <Modal>
          <ModalContent>
            <CloseButton
              className="button--close"
              type="button"
              onClick={() => setModal()}>
              <CrossIcon />
            </CloseButton>
            <Title>Edite a tarefa</Title>
            <Form>
              <div>
                <FildForm type="text" {...register("task")} />
                <EditTaskButton onClick={handleSubmit(OnSubmit)} >
                  <CaretRight width={28} height={28} color={theme.colors.app} />
                </EditTaskButton>
              </div>
              {errors ? (
                <ErrorMessage>{errors.task?.message}</ErrorMessage>
              ) : null}
            </Form>
          </ModalContent>
        </Modal>
  );
};
