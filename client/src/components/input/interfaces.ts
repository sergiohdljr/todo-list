import z from "zod"

export const schema = z.object({
    task: z.string().min(1, { message: "Digite a tarefa que deseja adicionar" }),
});
export type validationField = z.infer<typeof schema>;