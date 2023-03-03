import { useQuery } from "react-query";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./components/container";
import { Container } from "./components/container/style";
import { Header } from "./components/header";
import { InputNewTask } from "./components/input";
import { Task } from "./components/task";
import { api } from "./service/api";
import { UsethemeStore } from "./store";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  const { theme } = UsethemeStore();

  interface getTasks {
    created_At: string;
    id: string;
    is_Completed: boolean;
    task: string;
  }

  const getTask = () => api.get("/tasks").then((dados) => dados.data);

  const { data: tasks } = useQuery<getTasks[]>(
    "tasks",
    async () => await getTask()
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <InputNewTask />
        <Container flex_D={"row"} h={"375px"} w={"100%"} border_r={"0.3rem"}>
          {tasks &&
            tasks.map((task) => (
              <Task
                title={task.task}
                is_completed={task.is_Completed}
                key={task.id}
              />
            ))}
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};
