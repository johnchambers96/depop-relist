import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

if (window.location.hostname === "www.depop.com") {
  const container = document.createElement("div");
  container.id = "relist-container";

  document.body.prepend(container);

  ReactDOM.render(<App />, container);
}
