import React, { useEffect, useState } from "react";
import { ContentHeader, List } from "../../App.styles";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import Todo from "./Todo";

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
      <List>
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </List>
    </div>
  );
}

export default Todos;
