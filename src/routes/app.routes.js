import React from "react";
import { Main, User, Bookmarks } from "../pages";

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
];

export default appRoutes;
