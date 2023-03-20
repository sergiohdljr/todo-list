import { useMutation, useQuery } from "react-query";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./components/container";
import { Container } from "./components/container/style";
import { ButtonCleanCompletedTasks,DetailsTasks} from "./components/Details/style";
import { Header } from "./components/header";
import { InputNewTask } from "./components/input";
import { Task } from "./components/task";
import { UseMutateTasks } from "./hooks/useMutateTasks";
import { UsethemeStore } from "./store";
import { GlobalStyle } from "./styles/global";
import { getTask } from "./utils/getTasks";
import { TasksLeft } from "./utils/TasksLeft";

export interface Tasks {
  created_At?: string;
  id: string;
  is_Completed: boolean;
  task: string;
}

export const App = () => {
  const { DeleteCompletedTasks } = UseMutateTasks();

  const { theme } = UsethemeStore();
  const { data: tasks } = useQuery<Tasks[]>(["tasks"],async () => await getTask());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <InputNewTask />
        <Container
          flex_D={"row"}
          h={"375px"}
          w={"100%"}
          border_r={"0.3rem"}
          max_h={"370px"}
          background={theme.colors.app}
          justify_c="space-between">
          <div className="tasks--Container">
            {tasks &&
              tasks.map((task) => (
                <Task
                  id={task.id}
                  task={task.task}
                  is_Completed={task.is_Completed}
                  key={task.id}
                />
              ))}
          </div>
          <DetailsTasks>
            <h3>{TasksLeft(tasks)} itens restantes</h3>
            <ButtonCleanCompletedTasks
              type="button"
              onClick={() => DeleteCompletedTasks.mutate()}>
              limpar completas
            </ButtonCleanCompletedTasks>
          </DetailsTasks>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};
