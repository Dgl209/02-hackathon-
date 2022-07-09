import { createAction } from "@reduxjs/toolkit";
import accountSlice from "./account.slice";
import userService from "../../services/user.service";

const { created, requested, received, failed, removed, updated } =
  accountSlice.actions;
const creationRequested = createAction("account/creationRequested");
const creationFailed = createAction("account/creationFailed");
const updateRequested = createAction("account/updateRequested");
const updateFailed = createAction("account/updateFailed");

const createAccount = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const { content } = await userService.create(payload);
    dispatch(created(content));
  } catch (error) {
    dispatch(creationFailed());
  }
};

const loadAccountById = (id) => async (dispatch) => {
  dispatch(requested());
  try {
    const { content } = await userService.getUserById(id);
    dispatch(received(content));
  } catch (error) {
    dispatch(failed());
  }
};

const removeAccountData = () => (dispatch) => {
  dispatch(removed());
};

const updateAccountAvatar = (url) => async (dispatch, getState) => {
  dispatch(updateRequested());
  const accountData = getState().account.entity;
  try {
    if (accountData?.avatar === url) {
      return;
    }
    const newData = {
      ...accountData,
      avatar: url,
    };
    const { content } = await userService.update(newData);
    dispatch(updated(content));
  } catch (error) {
    dispatch(updateFailed());
  }
};

export {
  createAccount,
  loadAccountById,
  removeAccountData,
  updateAccountAvatar,
};
