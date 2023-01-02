import React, { useEffect, useState } from "react";
import { ContentHeader } from "../../App.styles";
import axios from "axios";

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
      <ul>
        {users &&
          users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} - {user.username} - {user.email}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Users;
