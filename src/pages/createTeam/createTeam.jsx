import React from "react";
import { CreateTeamForm } from "../../components/ui";

function CreateTeam() {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <div className="w-full max-w-xl py-6">
        <h3 className="mb-5 text-2xl text-center font-medium text-gray-900 dark:text-white">
          Create team
        </h3>
        <CreateTeamForm />
      </div>
    </div>
  );
}

export default CreateTeam;
