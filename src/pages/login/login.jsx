import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/ui";
import { Breadcrumb } from "../../components/common";

function Login() {
  return (
    <div className="container mx-auto p-6">
      <Breadcrumb />
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <div className="w-full max-w-xl py-6">
          <h3 className="mb-5 text-2xl text-center font-medium text-gray-900 dark:text-white">
            Sing in
          </h3>
          <LoginForm />
          <div className="text-sm font-medium mt-3 text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
