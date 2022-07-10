import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Button, Card, List, Slider } from "../../common";
import DefaultTeamImg from "../../../assets/defaultTeamImg.jpg";
import TeamMember from "../teamMember/teamMember";
import { updateMembers } from "../../../store/team/team.actions";
import { getAccountId } from "../../../store/auth/auth.selectors";
import { getMainTeam, getTeamById } from "../../../store/team/team.selectors";

function TeamDetails() {
  const { id } = useParams();
  const team = useSelector(id ? getTeamById(id) : getMainTeam());
  const dispatch = useDispatch();
  const currentUserId = useSelector(getAccountId());
  const [inTeam, setInTeam] = useState(team?.members?.includes(currentUserId));
  const MembersList = List(TeamMember);

  const handleJoinTeam = () => {
    dispatch(updateMembers(currentUserId, team.id));
    setInTeam((prev) => !prev);
  };

  return team ? (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        {id ? <Breadcrumb items={[{ name: "Teams", path: "/teams" }]} /> : null}
      </div>
      <Card className="flex flex-col items-center justify-center">
        <div className="flex justify-between w-full">
          <img
            className="w-[400px]"
            src={team?.image || DefaultTeamImg}
            alt=""
          />
          <div className="flex flex-col justify-between w-full px-6">
            <div className="flex flex-col items-center w-full">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {team?.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {team?.description}
              </p>
            </div>
            <div className="w-full flex justify-end">
              <Button
                name={inTeam ? "Leave the team" : "Join the team"}
                color="purple"
                onClick={handleJoinTeam}
              />
            </div>
          </div>
        </div>
      </Card>
      <Card className="w-full h-full">
        <h5 className="mb-10 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Team projects
        </h5>
        <Slider items={team?.projects} />
      </Card>
      {team?.members?.length ? (
        <div className="flex flex-col items-center mt-20">
          <h5 className="mb-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Members
          </h5>
          <MembersList items={team?.members} />
        </div>
      ) : null}
    </div>
  ) : null;
}

export default TeamDetails;
