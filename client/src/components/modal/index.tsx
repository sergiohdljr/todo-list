import { CrossIcon } from "../crossIcon";
import { Modal, ModalContent } from "./style";
import { CaretRight } from "phosphor-react";
import { ModalStore, UsethemeStore } from "../../store";
import { InputNewTask } from "../input";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, validationField } from "../input/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "../input/style";

export const ModalEdit = () => {
  const { open, setModal } = ModalStore();
  const { theme } = UsethemeStore();
  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm<validationField>({ resolver: zodResolver(schema) });

  const OnSubmit: SubmitHandler<validationField> = (data) => {
    console.log(data.task);
  };

  return (
    <Modal>
      <ModalContent>
        <button
          className="button--close"
          type="button"
          onClick={() => setModal()}>
          <CrossIcon />
        </button>
        <h3>Edite a tarefa</h3>
        <form action="">
          <div className="form-div">
            <input type="text" {...register("task")} />
            <button onClick={handleSubmit(OnSubmit)}>
              <CaretRight width={28} height={28} color={theme.colors.app} />
            </button>
          </div>
          {errors ? <ErrorMessage>{errors.task?.message}</ErrorMessage> : null}
        </form>
      </ModalContent>
    </Modal>
  );
};
