import styled from "styled-components";

export const NotFoundPage = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    color: #0e284c;
  }
  & button {
    font-size: 0.9rem;
    font-weight: 700;
    background-color: #f2a187;
    color: #0e284c;
    padding: 1rem 1.2rem;
    border: 1px solid #f2a187;
    box-shadow: 0px 0px 15px -7px #0e284cf2;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
    outline: none;
    &:hover {
      background: transparent;
      border: 1px solid #0e284c;
      box-shadow: none;
    }
    & svg {
      margin-right: 0.5rem;
      font-size: 1.1rem;
    }
  }
`;
