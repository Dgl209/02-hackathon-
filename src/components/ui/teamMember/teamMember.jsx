import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Card } from "../../common";
import DefaultUserImg from "../../../assets/defaultUserImg.png";
import userService from "../../../services/user.service";

function TeamMember({ item }) {
  const [member, setMember] = useState();

  useEffect(() => {
    async function getMember() {
      try {
        const { content } = await userService.getUserById(item);
        setMember(content);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getMember();
  }, []);

  return (
    <Card className="w-60 h-64">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={member?.avatar || DefaultUserImg}
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {member?.fullName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="mt-4 space-x-3 lg:mt-6">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {member?.about}
          </p>
        </div>
      </div>
    </Card>
  );
}

TeamMember.defaultProps = {
  item: "",
};

TeamMember.propTypes = {
  item: PropTypes.string,
};

export default TeamMember;
