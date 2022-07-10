import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb } from "../../components/common";
import ReviewForm from "../../components/ui/reviewForm/reviewForm";
import { getReviewsList } from "../../store/review/review.selectors";
import { loadReviews } from "../../store/review/review.actions";
import { Review } from "../../components/ui";

function Reviews() {
  const reviews = useSelector(getReviewsList());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviews());
  }, []);

  return (
    <div className="container mx-auto p-6">
      <Breadcrumb />
      <div className="flex flex-col justify-center mb-8 items-center">
        <div className="w-full max-w-xl py-6">
          <h3 className="mb-4 text-xl text-center font-medium text-gray-900 dark:text-white">
            Reviews
          </h3>
          <ReviewForm />
          {reviews?.map((item) => (
            <Review key={item.id} comment={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
