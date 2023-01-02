import styled from "styled-components";
import backgoundImage from "./assets/images/backgrouond-gradient.png";

export const Body = styled.div`
  background: url(${backgoundImage}) center bottom/cover no-repeat;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 30%;
  height: 70vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.39);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.99);
  border-radius: 2rem;
`;

export const Header = styled.header`
  height: 15%;
  text-align: center;
  & .logo-img {
    height: -webkit-fill-available;
  }
`;

export const Section = styled.section`
  height: 85%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to top,
    white calc(100% - 2rem),
    transparent 100%
  );

  & > div {
    height: -webkit-fill-available;
    display: block;
    margin: 0.5rem 0.2rem 0rem;
    padding: 0rem;
    color: rgba(14, 40, 76);
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      white calc(100% - 1.5rem),
      transparent 100%
    );
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(189, 189, 189, 0.034);
      border-radius: 10px;
      background-color: #ffffff25;
      overflow: hidden;
    }
    &::-webkit-scrollbar {
      width: 7px;
      background-color: #f5f5f51e;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 2rem;
      background-color: #24395a;
    }
    & h3 {
      text-align: center;
    }
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  & h3 {
    margin: 0px;
    flex: 1;
  }
  & svg {
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0rem 1.5rem;
  margin-top: 0.5rem;
`;

export const Item = styled.li`
  padding: 0.5rem 1rem;
  margin: 0.3rem 0rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const Loading = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  & svg {
    color: #f2a187;
  }
`;

export const Error = styled(Loading)`
  & p {
    color: #0e284c;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
