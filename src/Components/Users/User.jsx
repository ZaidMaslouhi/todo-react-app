import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UserCard } from "./styles/user.styles";

function User({ id, name, username, email }) {
  const navigate = useNavigate;

  return (
    <UserCard key={id} onClick={() => navigate(`/todos/${id}`)}>
      <h5>{name}</h5>
      <p>{`@${username}`}</p>
      <p>{email}</p>
    </UserCard>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
