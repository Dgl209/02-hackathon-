import { combineReducers } from "redux";
import accountReducer from "./account/account.reducer";
import authReducer from "./auth/auth.reducer";
import errorsReducer from "./errors/errors.reducer";
import teamReducer from "./team/team.reducer";
import reviewReducer from "./review/review.reducer";

const rootReducer = combineReducers({
  account: accountReducer,
  auth: authReducer,
  errors: errorsReducer,
  team: teamReducer,
  review: reviewReducer,
});

export default rootReducer;
