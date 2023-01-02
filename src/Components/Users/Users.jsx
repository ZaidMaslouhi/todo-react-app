import React, { useEffect, useState } from "react";
import { ContentHeader, List } from "../../App.styles";
import axios from "axios";
import User from "./User";

function Users() {
  const API_USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_USERS_ENDPOINT).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="users">
      <ContentHeader>
        <h3>List of users</h3>
      </ContentHeader>
      <List>
        {users &&
          users.map((user) => {
            return (
              <User
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
              />
            );
          })}
      </List>
    </div>
  );
}

export default Users;
