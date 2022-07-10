import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Card } from "../../common";
import DefaultTeamImg from "../../../assets/defaultTeamImg.jpg";
import userService from "../../../services/user.service";

function Team({ item }) {
  const [leader, setLeader] = useState();
  useEffect(() => {
    async function getUser() {
      try {
        const { content } = await userService.getUserById(item.leader);
        setLeader(content);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getUser();
  }, []);
  return (
    <Card className="w-60 h-[270px]">
      <Link to={`/${item.id}`}>
        <img src={item?.image || DefaultTeamImg} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/${item.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
        </Link>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Members: {item?.members?.length}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Leader: {leader?.fullName}
        </p>
      </div>
    </Card>
  );
}

Team.defaultProps = {
  item: {},
};

Team.propTypes = {
  item: PropTypes.object,
};

export default Team;
