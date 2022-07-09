import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextAreaField, TextField } from "../../common";
import { createTeam } from "../../../store/team/team.actions";
import { getAccountId } from "../../../store/auth/auth.selectors";

function CreateTeamForm() {
  const dispatch = useDispatch();
  const leader = useSelector(getAccountId());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const id = nanoid();
    dispatch(
      createTeam({ ...data, id, leader, members: [leader], role: "general" })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        label="Team name"
        id="name"
        options={{ required: "Team name is required field" }}
        error={errors.name?.message}
      />
      <TextAreaField
        register={register}
        label="Description"
        id="description"
        options={{ required: "Description is required field" }}
        error={errors.description?.message}
      />
      <Button name="Create team" type="submit" color="purple" />
    </form>
  );
}

export default CreateTeamForm;
