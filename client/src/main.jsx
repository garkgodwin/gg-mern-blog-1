import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/heading.css";
import { BrowserRouter as Router, useLocation } from "react-router";
import App from "./App.jsx";
import { store } from "./features/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
