import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  loadAccountById,
  updateAccountAvatar,
} from "../../store/account/account.actions";
import { getAccountData } from "../../store/account/account.selectors";
import DefaultUserImg from "../../assets/defaultUserImg.png";
import { Button } from "../../components/common";
import { getAccountId } from "../../store/auth/auth.selectors";
import { logOut } from "../../store/auth/auth.actions";
import { customHistory } from "../../utils/core";
import storageService from "../../services/storage.service";

function User() {
  const { register, getValues, watch } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const accountData = useSelector(getAccountData());
  const currentUserId = useSelector(getAccountId());
  const inputRef = useRef();
  const urlRef = useRef();

  useEffect(() => {
    dispatch(loadAccountById(id));
  }, []);

  useEffect(() => {
    const file = getValues().avatar[0];
    if (file && file !== urlRef.current) {
      storageService.uploadAvatar(file).then((url) => {
        if (accountData?.avatar === url) {
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
          className="w-[300px] p-2 rounded-full ring-2 ring-purple-500"
          src={accountData?.avatar || DefaultUserImg}
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
        <h5 className="mb-10 text-3xl font-bold underline tracking-tight text-gray-700 dark:text-white">
          {accountData?.fullName}
        </h5>
        <div className="text-lg mb-10">Возраст: {accountData?.age}</div>
        <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
          Немного о себе: {accountData?.about}
        </p>
      </div>
    </div>
  );
}

export default User;
