import App from "@/App";
import Login from "@/pages/login";
import Task from "@/pages/task";
import User from "@/pages/user";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Task></Task>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default routes;
