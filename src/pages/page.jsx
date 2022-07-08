import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/layout";

function Page() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Page;
