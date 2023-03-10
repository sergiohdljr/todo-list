import { Container } from "./style";
import { Icontainer } from "./types";

export const Wrapper = ({ children }: Icontainer) => {
  return (
    <Container
      w={"90%"}
      max_w={"540px"}
      h={"553px"}
      flex_D={"column"}
      gap={"1rem"}
      margin={"auto 0"}
      background={"transparent"}
    >
      {children}
    </Container>
  );
};
