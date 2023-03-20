import { Tasks } from "../App";

export const TasksLeft = (task:Tasks[] | undefined ) => {
   const incompletedTasks = task?.filter((task)=> !task.is_Completed)
   return incompletedTasks?.length
}