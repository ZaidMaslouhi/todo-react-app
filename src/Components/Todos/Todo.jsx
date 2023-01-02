import React from "react";
import PropTypes from "prop-types";
import { TodoCard } from "./styles/todo.styles";

function Todo({ title, completed }) {
  return (
    <TodoCard isCompleted={completed}>
      <h5>{title}</h5>
      <p>{completed ? "completed" : "uncompleted"}</p>
    </TodoCard>
  );
}
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
