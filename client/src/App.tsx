import { useQuery } from "react-query";
import { ThemeProvider } from "styled-components";
import { Wrapper } from "./components/container";
import { Container } from "./components/container/style";
import { Header } from "./components/header";
import { InputNewTask } from "./components/input";
import { Task } from "./components/task";
import { api } from "./lib/axiosConfig";
import { UsethemeStore } from "./store";
import { GlobalStyle } from "./styles/global";

export interface Tasks {
  created_At?: string;
  id: string;
  is_Completed: boolean;
  task: string;
}

export const App = () => {
  const { theme } = UsethemeStore();

  const getTask = () => api.get("/tasks").then((dados) => dados.data);

  const { data: tasks } = useQuery<Tasks[]>(
    ["tasks"],
    async () => await getTask()
  );

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
          ovrflw={"scroll"}
          background={theme.colors.app} 
          >
          {tasks &&
            tasks.map((task) => (
              <Task 
                id={task.id}
                task={task.task}
                is_Completed={task.is_Completed}
                key={task.id}
              />
            ))}
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};
