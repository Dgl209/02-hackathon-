import React from "react";
import { SetupAccountForm } from "../../components/ui";

function EditUser() {
  return (
    <div className="flex flex-col justify-center mb-8 items-center">
      <div className="w-full max-w-xl py-6">
        <h3 className="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">
          Setup account
        </h3>
        <SetupAccountForm />
      </div>
    </div>
  );
}

export default EditUser;
