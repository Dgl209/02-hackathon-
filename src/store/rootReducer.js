import { combineReducers } from "redux";
import accountReducer from "./account/account.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  account: accountReducer,
  auth: authReducer,
});

export default rootReducer;
