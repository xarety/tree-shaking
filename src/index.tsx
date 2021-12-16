import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./app";

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);

ReactDOM.render(<App />, appContainer);
