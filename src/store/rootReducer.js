import { combineReducers } from "redux";
import accountReducer from "./account/account.reducer";
import authReducer from "./auth/auth.reducer";
import errorsReducer from "./errors/errors.reducer";

const rootReducer = combineReducers({
  account: accountReducer,
  auth: authReducer,
  errors: errorsReducer,
});

export default rootReducer;
