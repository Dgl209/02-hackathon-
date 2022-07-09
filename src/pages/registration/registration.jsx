import React from "react";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../components/ui";

function Registration() {
  return (
    <div className="flex flex-col justify-center mb-8 items-center">
      <div className="w-full max-w-xl py-6">
        <h3 className="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">
          Sing up
        </h3>
        <RegistrationForm />
        <div className="text-sm font-medium mt-3 text-gray-500 dark:text-gray-300">
          Already registered?{" "}
          <Link
            to="/signin"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Sing in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
