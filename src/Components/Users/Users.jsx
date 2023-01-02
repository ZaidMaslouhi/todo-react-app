import React from "react";
import { ContentHeader } from "../../App.styles";

function Users() {
  return (
    <div className="users">
      <ContentHeader>
        <h3>List of users</h3>
      </ContentHeader>
      <ul>
        <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
      </ul>
    </div>
  );
}

export default Users;
