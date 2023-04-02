import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<HomePage />);
