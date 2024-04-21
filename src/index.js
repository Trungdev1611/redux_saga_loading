import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import App from "./App";
import store from "./sagafolder/store.js";
import { Provider } from "react-redux";


root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
