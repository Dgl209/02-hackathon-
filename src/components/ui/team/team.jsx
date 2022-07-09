import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "../../common";
import DefaultTeamImg from "../../../assets/defaultTeamImg.jpg";

function Team({ item }) {
  console.log("teat item: ", item);
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
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Members: {item?.members?.length}
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
