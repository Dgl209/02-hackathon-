import errorsSlice from "./errors.slice";
import { generateErrorHelper } from "../../utils/helpers";

const { handled, cleared } = errorsSlice.actions;

const handleError = (error) => (dispatch) => {
  const message = generateErrorHelper(error);
  dispatch(handled(message));
};

const clearErrors = () => (dispatch) => dispatch(cleared());

export { handleError, clearErrors };
