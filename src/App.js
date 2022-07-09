import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AccountUploader from "./hoc/accountUploader/accountUploader";

function App() {
  return <AccountUploader>{useRoutes(routes)}</AccountUploader>;
}

export default App;
