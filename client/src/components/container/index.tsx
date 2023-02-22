import { Container } from "./style";

type Icontainer = {
    children?: JSX.Element
}

export const ContainerApp = ({ children }: Icontainer ) => {
  return <Container>{children}</Container>;
};
