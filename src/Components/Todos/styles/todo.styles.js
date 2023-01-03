import styled from "styled-components";
import { Item } from "../../../App.styles";

export const TodoCard = styled(Item)`
  border-left: 0.5rem solid
    ${(props) => (props.isCompleted ? "#15ce729a" : "#ed4e329a")};
  & h5 {
    margin: 0px;
    text-transform: capitalize;
  }
  & p {
    display: inline;
    padding: 0.2rem;
    font-size: 0.7rem;
    font-weight: 600;
    background-color: ${(props) =>
      props.isCompleted ? "#15ce729a" : "#ed4e329a"};
    color: #fff;
    border-radius: 0.25rem;
  }
`;
