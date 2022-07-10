import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Button, TextAreaField } from "../../common";
import { createReview } from "../../../store/review/review.actions";

function ReviewForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const id = nanoid();
    dispatch(createReview({ ...data, id }));
    reset();
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
      <TextAreaField
        id="content"
        register={register}
        placeholder="Leave review..."
      />
      <Button name="Publish" type="submit" color="purple" />
    </form>
  );
}

export default ReviewForm;
