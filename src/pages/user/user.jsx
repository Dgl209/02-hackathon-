import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { updateAccountAvatar } from "../../store/account/account.actions";
import DefaultUserImg from "../../assets/defaultUserImg.png";
import { Badge, Button } from "../../components/common";
import { getAccountId } from "../../store/auth/auth.selectors";
import { logOut } from "../../store/auth/auth.actions";
import { customHistory } from "../../utils/core";
import storageService from "../../services/storage.service";
import userService from "../../services/user.service";

function User() {
  const { register, getValues, watch } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const currentUserId = useSelector(getAccountId());
  const inputRef = useRef();
  const urlRef = useRef();

  console.log("user: ", user);

  useEffect(() => {
    async function loadUser() {
      try {
        const { content } = await userService.getUserById(id);
        setUser(content);
      } catch (error) {
        toast.error(error.message);
      }
    }
    loadUser();
  }, [id]);

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

  const handleLogOut = () => {
    dispatch(logOut());
    customHistory.push("/");
  };

  const handleChangeAvatar = () => {
    inputRef.current?.click();
  };

  return (
    <div className="container mx-auto flex p-6">
      <div className="p-10 mr-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="w-[300px] h-[200px] p-2 rounded-full ring-2 ring-purple-500"
          src={user?.avatar || DefaultUserImg}
          alt=""
        />
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
      </div>
      <div className="p-10 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col justify-between h-[70%]">
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
          <div className="text-lg mb-0.5">Мои профили в соцсетях</div>
          <div className="flex">
            <div className="mr-6">
              <a href="#">
                <svg className="h-8 w-8 text-purple-500 hover:bg-purple-200 rounded" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            <div>
              <a href="#">
                <svg className="h-8 w-8 text-purple-500 hover:bg-purple-200 rounded" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
