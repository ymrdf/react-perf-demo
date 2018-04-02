import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/app/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
