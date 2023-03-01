import { Container } from "./style";

type Icontainer = {
  header: JSX.Element
  input: JSX.Element
};

export const ContainerApp = ({header,input}: Icontainer) => {
  return (
    <Container>
        {header}
        {input}
    </Container>
  );
};
