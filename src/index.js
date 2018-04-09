import "antd/dist/antd.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/app/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
