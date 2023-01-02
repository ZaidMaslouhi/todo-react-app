import React from "react";
import { ContentHeader } from "../../App.styles";

function Todos() {
  return (
    <div>
      <ContentHeader>
        <h3>Todos</h3>
      </ContentHeader>
      <ul>
        <li>todo 1</li>
        <li>todo 2</li>
        <li>todo 3</li>
      </ul>
    </div>
  );
}

export default Todos;
