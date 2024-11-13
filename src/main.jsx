import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root.jsx";
import Home from "./Component/Home.jsx";
import Login from "./Component/Login.jsx";

import Aboutus from "./Aboutus.jsx";
import Signup from "./Signup.jsx";
import Authprovider from "./Providers/Authprovider.jsx";

import Order from "./Component/Order.jsx";
import Privetrouter from "./Privetrouter/Privetrouter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/abolutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/orders",
        element: (
          <Privetrouter>
            <Order></Order>,
          </Privetrouter>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
