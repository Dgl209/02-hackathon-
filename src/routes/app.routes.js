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
  EditUser,
  Reviews,
} from "../pages";
import { PrivateRoute } from "../hoc";

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
    path: "/reviews",
    element: (
      <PrivateRoute>
        <Reviews />
      </PrivateRoute>
    ),
  },
  {
    path: "/user/edit",
    element: (
      <PrivateRoute>
        <EditUser />
      </PrivateRoute>
    ),
  },
  {
    path: "/bookmarks",
    element: (
      <PrivateRoute>
        <Bookmarks />
      </PrivateRoute>
    ),
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
    element: (
      <PrivateRoute>
        <CreateTeam />
      </PrivateRoute>
    ),
  },
  {
    path: "/teams",
    element: (
      <PrivateRoute>
        <Teams />
      </PrivateRoute>
    ),
  },
  {
    path: "/:id",
    element: (
      <PrivateRoute>
        <TeamDetails />
      </PrivateRoute>
    ),
  },
];

export default appRoutes;
