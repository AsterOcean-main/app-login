import { StrictMode } from "react";
/* Lets you find common bugs in your components early during development. */
import { createRoot } from "react-dom/client";

import App from "./App";

import React from 'react'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render( /*container for "what to render" (e.g.  creating or updating the user interface, https://www.telerik.com/blogs/understand-how-rendering-works-react) */
  <StrictMode>
    <App />
    <index />
  </StrictMode>
);