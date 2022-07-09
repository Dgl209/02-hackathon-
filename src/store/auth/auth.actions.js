import { createAction } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import { authService, localStorageService } from "../../services";
import {
  createAccount,
  removeAccountData,
  loadAccountById,
} from "../account/account.actions";
import { customHistory } from "../../utils/core";
import { handleError } from "../errors/errors.actions";

const { succeed, loggedOut } = authSlice.actions;
const requested = createAction("auth/requested");
const failed = createAction("auth/failed");

const signUp =
  ({ email, password, ...rest }) =>
  async (dispatch) => {
    dispatch(requested());
    try {
      const data = await authService.register({ email, password });
      localStorageService.setTokens(data);
      dispatch(succeed(data.localId));
      dispatch(createAccount({ id: data.localId, email, ...rest }));
      customHistory.push("/");
    } catch (error) {
      dispatch(failed());
      dispatch(handleError(error));
    }
  };

const singIn =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(requested());
    try {
      const data = await authService.login({ email, password });
      localStorageService.setTokens(data);
      dispatch(succeed(data.localId));
      dispatch(loadAccountById(data.localId));
      customHistory.push("/");
    } catch (error) {
      dispatch(failed());
      dispatch(handleError(error));
    }
  };

const logOut = () => (dispatch) => {
  customHistory.push("/");
  localStorageService.removeAuthData();
  dispatch(loggedOut());
  dispatch(removeAccountData());
};

export { signUp, singIn, logOut };
