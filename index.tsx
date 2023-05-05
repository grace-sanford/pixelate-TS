import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./src/store/index";
import App from "./src/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <Router>
  <Provider store={store}>
    <App />
  </Provider>
  // </Router>
);
