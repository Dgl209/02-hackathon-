import React from "react";
import { TeamDetails } from "../components/ui";
import {
  Main,
  User,
  Bookmarks,
  Registration,
  Login,
  CreateTeam,
  Teams,
  NotFound,
} from "../pages";

const appRoutes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <NotFound />,
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
  {
    path: "/create-team",
    element: <CreateTeam />,
  },
  {
    path: "/teams",
    element: <Teams />,
  },
  {
    path: "/:id",
    element: <TeamDetails />,
  },
];

export default appRoutes;
