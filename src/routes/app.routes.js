import React from "react";
import { Main, User, Bookmarks, Registration, Login } from "../pages";

const appRoutes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/user/:id",
    element: <User />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
  {
    path: "/signup",
    element: <Registration />,
  },
  {
    path: "/signin",
    element: <Login />,
  },
];

export default appRoutes;
