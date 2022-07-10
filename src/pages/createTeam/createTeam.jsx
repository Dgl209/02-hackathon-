import React from "react";
import { CreateTeamForm } from "../../components/ui";
import { Breadcrumb } from "../../components/common";

function CreateTeam() {
  return (
    <div className="container mx-auto p-6">
      <Breadcrumb />
      <div className="flex flex-col items-center mb-10">
        <div className="w-full max-w-xl py-6">
          <h3 className="mb-5 text-2xl text-center font-medium text-gray-900 dark:text-white">
            Create team
          </h3>
          <CreateTeamForm />
        </div>
      </div>
    </div>
  );
}

export default CreateTeam;
