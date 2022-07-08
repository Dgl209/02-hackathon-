import React from "react";
import appRoutes from "./app.routes";
import Page from "../pages/page";

const routes = [
  {
    path: "/",
    element: <Page />,
    children: appRoutes,
  },
];

export default routes;
