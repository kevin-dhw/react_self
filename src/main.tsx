// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClickToComponent } from "click-to-react-component";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <DndProvider backend={HTML5Backend}>
  <>
    <ClickToComponent />
    <App />
  </>

  // </DndProvider>
  // </React.StrictMode>
);
