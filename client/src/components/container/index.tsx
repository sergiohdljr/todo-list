import { Container } from "./style";

type Icontainer = {
  children: React.ReactNode
};

export const ContainerApp = ({children}: Icontainer) => {
  return (
    <Container>
        {children}
    </Container>
  );
};
