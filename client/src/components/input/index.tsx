import {
  Input,
  CheckedBox,
  Check,
  InputField,
  ErrorMessage,
  Spinner,
} from "./style";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { api } from "../../service/api";
import { useState } from "react";

export const InputNewTask = () => {
  const schema = z.object({
    task: z
      .string()
      .min(1, { message: "Digite a tarefa que deseja adicionar" }),
  });

  type validationField = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validationField>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const OnSubmit: SubmitHandler<validationField> = (data) => {
    setIsLoading(true);
    api
      .post("/createTask", {
        task: data.task,
      })
      .then((response) => console.log(response.status))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
          location.reload();
        }, 900);
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
          {...register("task")}
        />
        {isLoading ? <Spinner /> : null}
      </Input>
      {errors ? <ErrorMessage>{errors.task?.message}</ErrorMessage> : null}
    </div>
  );
};
