import React from "react";
import PropTypes from "prop-types";
import { Card, List } from "../../common";
import DefaultTeamImg from "../../../assets/defaultTeamImg.jpg";
import TeamMember from "../teamMember/teamMember";

function TeamDetails({ name, description, teamPhoto, members }) {
  const MembersList = List(TeamMember);

  return (
    <div className="container mx-auto p-6">
      <Card className="flex flex-col items-center justify-center">
        <div className="flex">
          <img className="w-[400px]" src={teamPhoto || DefaultTeamImg} alt="" />
          <div className="flex flex-col items-center p-6">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </Card>
      {members.length ? (
        <div className="flex flex-col items-center">
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Members
          </h5>
          <MembersList items={members} />
        </div>
      ) : null}
    </div>
  );
}

TeamDetails.defaultProps = {
  members: [],
  teamPhoto: null,
};

TeamDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  teamPhoto: PropTypes.string,
  members: PropTypes.array,
};

export default TeamDetails;
