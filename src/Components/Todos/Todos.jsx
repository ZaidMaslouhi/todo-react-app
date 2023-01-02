import React, { useEffect, useState } from "react";
import { ContentHeader } from "../../App.styles";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

function Todos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const API_USERS_ENDPOINT = `https://jsonplaceholder.typicode.com/todos?userId=${id}`;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(API_USERS_ENDPOINT).then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <div>
      <ContentHeader>
        <IoIosArrowBack data-testid="back-icon" onClick={() => navigate("/")} />
        <h3>Todos</h3>
      </ContentHeader>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            title: {todo.title} - completed: {todo.completed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
