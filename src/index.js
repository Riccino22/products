import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "./Product";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Product title="PC" price="300" />
    <Product title="Tablet" price="300" />
    <Product title="IPhone 12" price="300" />
    <Product title="Keyboard" price="300" />
    <Product title="Mouse" price="300" />
  </>
);
