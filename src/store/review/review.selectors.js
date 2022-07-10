const getReviewsList = () => (state) => state.review.entities;

const getReviesLoadingStatus = () => (state) => state.review.loading;

export { getReviewsList, getReviesLoadingStatus };
