import React from "react";
import PropTypes from "prop-types";
import { Card, ProgressBar } from "../../common";

function UserSkills({ user }) {
  return (
    <Card className="w-full flex flex-col space-y-2 px-20">
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.html}
        label="Html"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.css}
        label="Css"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.javascript}
        label="JavaScript"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.react}
        label="React"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.redux}
        label="Redux"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.angular}
        label="Angular"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.vue}
        label="Vue"
      />
      <ProgressBar
        color="bg-purple-700"
        completed={user?.skills?.nodejs}
        label="NodeJS"
      />
    </Card>
  );
}

UserSkills.defaultProps = {
  user: {},
};

UserSkills.propTypes = {
  user: PropTypes.object,
};

export default UserSkills;
