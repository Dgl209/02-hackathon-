import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Button, List } from "../../components/common";
import { Team } from "../../components/ui";
import { getTeamsList } from "../../store/team/team.selectors";
import { customHistory } from "../../utils/core";

function Teams() {
  const teams = useSelector(getTeamsList());
  const TeamsList = List(Team);

  return (
    <div className="container mx-auto p-6">
      <Breadcrumb />
      {teams?.length ? (
        <>
          <h3 className="mb-5 text-2xl text-center font-medium text-gray-900 dark:text-white">
            Teams
          </h3>
          <TeamsList items={teams} />
        </>
      ) : (
        <div className="w-full flex flex-col items-center space-y-3 justify-center pt-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The teams list is empty
          </h5>
          <Button
            name="Create new team"
            color="light"
            onClick={() => customHistory.push("/create-team")}
          />
        </div>
      )}
    </div>
  );
}

export default Teams;
