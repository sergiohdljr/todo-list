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
import { Client } from "../../lib/queryClient";
import { postTask } from "../../utils/postTask";

export const InputNewTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    
  } = useForm<validationField>({ resolver: zodResolver(schema) });

  const addNewTask = useMutation({
    mutationFn: async (data: validationField) => await postTask(data),
    onSuccess: () => {
      setTimeout(() => {
        Client.invalidateQueries({ queryKey: ["tasks"] });
      }, 900);
      reset()
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
