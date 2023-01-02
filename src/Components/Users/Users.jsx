import React from "react";
import { ContentHeader, List, Loading, Error } from "../../App.styles";
import User from "./User";
import useFetch from "../../hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";

function Users() {
  const { data: users, loading, error } = useFetch(`/users`);

  return (
    <div className="users">
      <ContentHeader>
        <h3>List of users</h3>
      </ContentHeader>

      {loading && (
        <Loading>
          <ClipLoader />
        </Loading>
      )}

      {error ? (
        <Error>
          <p>{error}</p>
        </Error>
      ) : (
        <List>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default Users;
