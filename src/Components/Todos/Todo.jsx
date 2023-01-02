import React from "react";
import PropTypes from "prop-types";

function Todo({ title, completed }) {
  return (
    <li>
      <h5>{title}</h5>
      <p>{completed ? "completed" : "uncompleted"}</p>
    </li>
  );
}
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default Todo;
