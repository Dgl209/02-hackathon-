import { createAction } from "@reduxjs/toolkit";
import accountSlice from "./account.slice";
import userService from "../../services/user.service";
import { handleError } from "../errors/errors.actions";
import { customHistory } from "../../utils/core";

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
    dispatch(handleError(error));
  }
};

const loadAccountById = (id) => async (dispatch) => {
  dispatch(requested());
  try {
    const { content } = await userService.getUserById(id);
    dispatch(received(content));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError(error));
  }
};

const removeAccountData = () => (dispatch) => {
  dispatch(removed());
};

const updateAccountAvatar = (url) => async (dispatch, getState) => {
  dispatch(updateRequested());
  const accountData = getState().account.entity;
  if (accountData?.avatar === url) {
    return;
  }
  const newData = {
    ...accountData,
    avatar: url,
  };
  try {
    const { content } = await userService.update(newData);
    dispatch(updated(content));
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError(error));
  }
};

const updateAccountSkills = (payload) => async (dispatch, getState) => {
  dispatch(updateRequested());
  const accountData = getState().account.entity;
  const newData = {
    ...accountData,
    skills: payload,
  };
  try {
    const { content } = await userService.update(newData);
    dispatch(updated(content));
    customHistory.push(`/user/${accountData.id}`);
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError(error));
  }
};

const updateBookmarks = (payload) => async (dispatch, getState) => {
  dispatch(updateRequested());
  const accountData = getState().account.entity;
  let newData;
  if (accountData.bookmarks && accountData.bookmarks.includes(payload)) {
    const filteredWishlist = accountData.bookmarks.filter((x) => x !== payload);
    newData = {
      ...accountData,
      bookmarks: filteredWishlist,
    };
  } else if (accountData.bookmarks) {
    newData = {
      ...accountData,
      bookmarks: [...accountData.bookmarks, payload],
    };
  } else {
    newData = {
      ...accountData,
      bookmarks: [payload],
    };
  }
  try {
    const { content } = await userService.update(newData);
    dispatch(updated(content));
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError(error));
  }
};

export {
  createAccount,
  loadAccountById,
  removeAccountData,
  updateAccountAvatar,
  updateBookmarks,
  updateAccountSkills,
};
