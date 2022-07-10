import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { BookmarkIcon as BookmarkOutlineIcon } from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Card } from "../../common";
import DefaultUserImg from "../../../assets/defaultUserImg.png";
import userService from "../../../services/user.service";
import { updateBookmarks } from "../../../store/account/account.actions";
import { getAccountData } from "../../../store/account/account.selectors";

function TeamMember({ item }) {
  const [member, setMember] = useState();
  const accountData = useSelector(getAccountData());
  const [inBookmarks, setInBookmarks] = useState(
    accountData?.bookmarks?.includes(item)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMember() {
      try {
        const { content } = await userService.getUserById(item);
        await setMember(content);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getMember();
  }, []);

  const handleBookmark = () => {
    dispatch(updateBookmarks(member.id));
    setInBookmarks((prev) => !prev);
  };

  return (
    <Card className="w-60 h-80">
      <div className="flex flex-col relative items-center space-y-4 pb-10">
        <button
          type="button"
          onClick={handleBookmark}
          className="absolute right-0"
        >
          {!inBookmarks ? (
            <BookmarkOutlineIcon className="w-6 h-6 text-purple-700" />
          ) : (
            <BookmarkSolidIcon className="w-6 h-6 text-purple-700" />
          )}
        </button>
        <Link to={`/user/${member?.id}`}>
          <img
            className="w-24 h-24 rounded-full shadow-lg"
            src={member?.avatar || DefaultUserImg}
            alt=""
          />
        </Link>
        <div className="flex flex-col items-center space-y-1">
          <Link to={`/user/${member?.id}`}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              {member?.fullName}
            </h5>
          </Link>

          <Badge name={member?.speciality} color="purple-800" />
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Возраст: {member?.age}
          </p>
        </div>
        <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
          {member?.about}
        </p>
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
