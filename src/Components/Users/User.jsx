import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UserAvatar, UserCard } from "./styles/user.styles";
import Avatar from "react-avatar";

function User({ id, name, username, email }) {
  const navigate = useNavigate();

  return (
    <UserCard key={id} onClick={() => navigate(`/todos/${id}`)}>
      <UserAvatar>
        <Avatar name={name} size={30} round="20px" />
      </UserAvatar>
      <div>
        <h5>{name}</h5>
        <p>{`@${username}`}</p>
        <p>{email}</p>
      </div>
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
