import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Card } from "../../common";
import userService from "../../../services/user.service";

function Review({ comment }) {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const { content } = await userService.getUserById(comment.publisher);
        setUser(content);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getUser();
  }, []);
  return (
    <Card>
      <div className="flex items-center mb-4">
        <img className="w-8 h-8 mr-2 rounded-full" src={user?.avatar} alt="" />
        <h5>{user?.fullName}</h5>
      </div>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {comment?.content}
      </p>
    </Card>
  );
}

Review.defaultProps = {
  comment: {},
};

Review.propTypes = {
  comment: PropTypes.object,
};

export default Review;
