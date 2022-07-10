import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import DefaultUserImg from "../../../assets/defaultUserImg.png";
import { Button, Card } from "../../common";
import { getAccountId } from "../../../store/auth/auth.selectors";
import { logOut } from "../../../store/auth/auth.actions";
import { customHistory } from "../../../utils/core";
import storageService from "../../../services/storage.service";
import { updateAccountAvatar } from "../../../store/account/account.actions";

function UserProfile({ user, id }) {
  const { register, getValues, watch } = useForm();
  const dispatch = useDispatch();
  const currentUserId = useSelector(getAccountId());
  const inputRef = useRef();
  const urlRef = useRef();

  const handleLogOut = () => {
    dispatch(logOut());
    customHistory.push("/");
  };

  const handleChangeAvatar = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    let file;
    if (getValues()?.avatar) {
      file = getValues().avatar[0];
    }
    if (file && file !== urlRef.current) {
      storageService.uploadAvatar(file).then((url) => {
        if (user?.avatar === url) {
          return;
        }
        dispatch(updateAccountAvatar(url));
        urlRef.current = file;
      });
    }
  }, [watch()]);

  return (
    <Card>
      <div className="px-8">
        <img
          className="w-[200px] h-[200px] p-2 rounded-full ring-2 ring-purple-500"
          src={user?.avatar || DefaultUserImg}
          alt=""
        />
      </div>
      <div className="pt-4 flex justify-center items-center">
        {id === currentUserId && (
          <div>
            <label htmlFor="avatar" ref={inputRef} />
            <input
              id="avatar"
              type="file"
              name="avatar"
              {...register("avatar")}
              className="hidden"
            />
            <Button
              name="Change avatar"
              color="purple"
              onClick={handleChangeAvatar}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            />
            {id === currentUserId && (
              <div className="flex justify-center items-center">
                <Button
                  name="Log out"
                  color="purple"
                  onClick={handleLogOut}
                  className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

UserProfile.defaultProps = {
  user: {},
  id: "",
};

UserProfile.propTypes = {
  user: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UserProfile;
