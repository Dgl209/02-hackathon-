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
      <div className="">
        <img
          className="w-[300px]"
          src={accountData?.avatar || DefaultUserImg}
          alt=""
        />
        <div className="pt-4 w-full flex justify-center">
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
                color="light"
                onClick={handleChangeAvatar}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {accountData?.fullName}
        </h5>
        <span>{accountData?.age}</span>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {accountData?.about}
        </p>
        {id === currentUserId && (
          <div className="w-full flex justify-center">
            <Button name="Log out" color="light" onClick={handleLogOut} />
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
