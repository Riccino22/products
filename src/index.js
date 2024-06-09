import React from "react";
import ReactDOM from "react-dom/client";
import { Target } from "./Target";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Target name="Rick" />
    <Target name="Robert" />
    <Target name="John" />
    <Target name="Rick" />
    <Target name="Rick" />
  </>
);
