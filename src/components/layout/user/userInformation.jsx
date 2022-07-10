import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BookmarkIcon as BookmarkOutlineIcon,
  CogIcon,
} from "@heroicons/react/outline";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/solid";
import { Badge, Card } from "../../common";
import { updateBookmarks } from "../../../store/account/account.actions";
import { getAccountData } from "../../../store/account/account.selectors";
import { getAccountId } from "../../../store/auth/auth.selectors";

function UserInformation({ user }) {
  const accountData = useSelector(getAccountData());
  const currentUserId = useSelector(getAccountId());
  const [inBookmarks, setInBookmarks] = useState(
    accountData?.bookmarks?.includes(user.id)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setInBookmarks(accountData?.bookmarks?.includes(user.id));
  }, [user]);

  const handleBookmark = () => {
    dispatch(updateBookmarks(user.id));
    setInBookmarks((prev) => !prev);
  };

  return (
    <Card className="w-full relative">
      <div className="min-w-[800px]">
        {currentUserId === user.id ? (
          <Link className="absolute right-6" to="/user/edit">
            <CogIcon className="w-6 h-6 text-gray-700" />
          </Link>
        ) : null}
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
        <div className="flex flex-col justify-between space-y-2 h-[70%]">
          <h5 className="text-3xl font-bold underline tracking-tight text-gray-700 dark:text-white">
            {user?.fullName}
          </h5>
          <div>
            <Badge name={user?.speciality} />
          </div>
          <div className="text-lg">Возраст: {user?.age}</div>
          <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
            Немного о себе: {user?.about}
          </p>
          <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
            Social media:{" "}
          </p>
          <div className="flex">
            <div className="mr-6">
              <a href={user?.instagram} target="_blank" rel="noreferrer">
                <svg
                  className="h-8 w-8 text-purple-500 hover:bg-purple-200 rounded"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <div>
              <a href={user?.github} target="_blank" rel="noreferrer">
                <svg
                  className="h-8 w-8 text-purple-500 hover:bg-purple-200 rounded"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
                    6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                    13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5
                    3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

UserInformation.defaultProps = {
  user: {},
};

UserInformation.propTypes = {
  user: PropTypes.object,
};

export default UserInformation;
