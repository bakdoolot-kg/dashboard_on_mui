import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Exchange from "./pages/Exchange";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/exchange",
    element: <Exchange/>
  }
])