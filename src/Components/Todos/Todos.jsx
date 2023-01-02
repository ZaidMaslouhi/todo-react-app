import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Todo from "./Todo";
import { ContentHeader, List } from "../../App.styles";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";

function Todos() {
  const { id } = useParams();
  const { data: todos, loading, error } = useFetch(`/todos?userId=${id}`);
  const navigate = useNavigate();

  return (
    <div data-testid="todos">
      <ContentHeader>
        <IoIosArrowBack data-testid="back-icon" onClick={() => navigate("/")} />
        <h3>Todos</h3>
      </ContentHeader>
      {loading && (
        <div>
          <ClipLoader />
        </div>
      )}

      {error ? (
        <div>
          <p>{error}</p>
        </div>
      ) : (
        <List>
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} completed={todo.completed} />
          ))}
        </List>
      )}
    </div>
  );
}

export default Todos;
