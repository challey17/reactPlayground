import React from "react";
import Demonym from "./demonyn";
import ReactDOM from "react-dom";

it("renders without errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Demonym />, div);
  ReactDOM.unmountComponentAtNode(div);
});
