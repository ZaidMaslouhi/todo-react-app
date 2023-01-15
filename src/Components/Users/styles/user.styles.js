import styled from "styled-components";
import { Item } from "../../../App.styles";

export const UserCard = styled(Item)`
  display: flex;
  cursor: pointer;
  & h5,
  & p {
    margin: 0px;
    text-transform: capitalize;
  }
  & h5{
    font-size: 1rem;
  }
  & p {
    font-size: 0.8rem;
  }
`;

export const UserAvatar = styled.div`
  margin-right: .5rem;
`;
