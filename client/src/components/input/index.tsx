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
import { postTask } from "../../service/api";
import { useState } from "react";
import { schema, validationField } from "./interfaces";

export const InputNewTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validationField>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);

  const OnSubmit: SubmitHandler<validationField> = (data) => {
    setIsLoading(true);
    postTask(data, setIsLoading);
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
        {isLoading ? <Spinner /> : null}
      </Input>
      {errors ? <ErrorMessage>{errors.task?.message}</ErrorMessage> : null}
    </div>
  );
};
