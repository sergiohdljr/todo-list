import {
  Input,
  CheckedBox,
  Check,
  InputField,
  ErrorMessage,
  Spinner,
} from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { schema, validationField } from "./types";
import { useMutation } from "react-query";
import { api, postTask } from "../../service/api";
import { Client } from "../../service/queryClient";

export const InputNewTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validationField>({ resolver: zodResolver(schema) });

  const addNewTask = useMutation({
    mutationFn: async (data: validationField) => await postTask(data),
    onSuccess: () => {
      setTimeout(() => {
        Client.invalidateQueries({ queryKey: ["tasks"] });
      }, 900);
    },
  });

  const OnSubmit: SubmitHandler<validationField> = (data) => {
    addNewTask.mutate({
      task: data.task,
    });
  };

  return (
    <div>
      <Input onSubmit={handleSubmit(OnSubmit)}>
        <CheckedBox>
          <Check isChecked={false} />
        </CheckedBox>
        <InputField
          placeholder="Digite uma nova tarefa..."
          type="text"
          {...register("task")}
        />
        {addNewTask.isLoading ? <Spinner /> : null}
      </Input>
      {errors ? <ErrorMessage>{errors.task?.message}</ErrorMessage> : null}
    </div>
  );
};
