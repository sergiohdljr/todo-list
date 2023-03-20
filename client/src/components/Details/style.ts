import styled from "styled-components";

export const DetailsTasks = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 40px;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.app};

  h3 {
    font-size: 0.7rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.secundaryText};
  }

  @media screen and (min-width: 376px) {
    width: 90%;
    h3 {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonCleanCompletedTasks = styled.button`
  all: unset;
  font-size: 0.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.secundaryText};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.active};
  }

  @media screen and (min-width: 376px) {
    font-size: 0.8rem;
  }
`;
