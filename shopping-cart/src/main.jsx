import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ShoppingPage from "./pages/ShoppingPage";
import "./index.css"; // Tailwind entry

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ShoppingPage />
    </Provider>
  </React.StrictMode>
);
