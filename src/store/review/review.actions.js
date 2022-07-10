import { createAction } from "@reduxjs/toolkit";
import reviewSlice from "./review.slice";
import { handleError } from "../errors/errors.actions";
import { reviewService } from "../../services";

const { created, received, requested, failed } = reviewSlice.actions;
const creationRequested = createAction("review/creationRequested");
const creationFailed = createAction("review/creationFailed");

const createReview = (payload) => async (dispatch, getState) => {
  dispatch(creationRequested());
  const currentUserId = getState().auth.accountId;
  const newData = {
    ...payload,
    publisher: currentUserId,
  };
  try {
    const { content } = await reviewService.create(newData);
    dispatch(created(content));
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError(error));
  }
};

const loadReviews = () => async (dispatch) => {
  dispatch(requested());
  try {
    const { content } = await reviewService.get();
    dispatch(received(content));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError(error));
  }
};

export { createReview, loadReviews };
