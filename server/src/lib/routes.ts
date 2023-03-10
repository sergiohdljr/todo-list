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

    app.get('/tasks', async () => {
        const tasks = await prisma.tarefas.findMany()
        return tasks
    })

    app.get('/completedTasks', async () => {
        const completedTasks = await prisma.tarefas.findMany({
            where: {
                is_Completed: true
            }
        })
        return completedTasks
    })


    app.put('/toggleCompleteTask/:id', async (request) => {
        const toggleCompleteSchema = z.object({
            id: z.string()
        })

        const { id } = toggleCompleteSchema.parse(request.params)

        const stateTask = await prisma.tarefas.findUnique({
            select: {
                is_Completed: true
            },
            where: {
                id: id
            }
        })

        await prisma.tarefas.update({
            where: {
                id: id
            },
            data: {
                is_Completed: !stateTask?.is_Completed
            }
        })
    })

    app.put('/editTask/:id', async (request) => {
        const requestSchema = z.object({
            id: z.string()
        })
        const bodySchema = z.object({
            taskTitle: z.string()
        })

        const { id } = requestSchema.parse(request.params)
        const { taskTitle } = bodySchema.parse(request.body)

        await prisma.tarefas.update({
            where: {
                id: id
            },
            data: {
                task: taskTitle
            }
        })

    })

    app.delete('/deleteCompletedTasks', async () => {
        await prisma.tarefas.deleteMany({
            where: {
                is_Completed: true
            }
        })
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