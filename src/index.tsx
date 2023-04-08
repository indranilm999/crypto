import ReactDOM from "react-dom/client";
import "./index.css";

import HomePage from "./components/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<HomePage />);
