import React from "react";
import { RegistrationForm } from "../../components/ui";

function Registration() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl py-6">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Registration;
