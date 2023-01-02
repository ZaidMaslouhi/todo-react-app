import styled from "styled-components";
import { Item } from "../../../App.styles";

export const UserCard = styled(Item)`
  cursor: pointer;
  & h5,
  & p {
    margin: 0px;
    text-transform: capitalize;
  }
  & p {
    font-size: 0.8rem;
  }
`;
