import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "./prisma";

export async function appRoutes(app: FastifyInstance) {


    app.post('/createTask', async (request) => {
        const tarefasSchema = z.object({
            task: z.string(),
        })

        const { task } = tarefasSchema.parse(request.body)

        await prisma.tarefas.create({
            data: {
                task: task
            }
        })
    })

    app.get('/task', async () => {
        const tasks = await prisma.tarefas.findMany()
        return tasks
    })

    app.delete('/deleteTask/:id', async (request) => {
        const deleteTaskSchema = z.object({
            id: z.string()
        })

        const { id } = deleteTaskSchema.parse(request.params)

        await prisma.tarefas.delete({
            where: {
                id: id
            }
        })
    })
}