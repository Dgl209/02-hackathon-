import axios from "axios";
import { localStorageService } from "./index";

const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});

const authService = {
  register: async ({ email, password }) => {
    const { data } = await httpAuth.post("accounts:signUp", {
      email,
      password,
      returnSecureToken: true,
    });
    console.log("authService data: ", data);
    return data;
  },
  login: async ({ email, password }) => {
    const { data } = await httpAuth.post("accounts:signInWithPassword", {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};

export default authService;
