import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundPage } from "./styles/NotFound.styles";
import { IoIosArrowBack } from "react-icons/io";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundPage role="notfound">
      <p>404 Page not found!</p>
      <button onClick={() => navigate("/")}>
        <IoIosArrowBack /> Back to Home
      </button>
    </NotFoundPage>
  );
}
