import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/styles.css";
import App from "./app/layout/App";
// import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// import { createBrowserHistory } from "history";

// export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
