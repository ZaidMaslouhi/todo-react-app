import styled from "styled-components";
import { Item } from "../../../App.styles";

export const TodoCard = styled(Item)`
  border-left: 0.5rem solid
    ${(props) => (props.isCompleted ? "#15ce729a" : "#ed4e329a")};
  & h5,
  & p {
    margin: 0px;
    text-transform: capitalize;
  }
  & p {
    font-size: 0.8rem;
  }
`;
