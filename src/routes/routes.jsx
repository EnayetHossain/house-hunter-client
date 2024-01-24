import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
