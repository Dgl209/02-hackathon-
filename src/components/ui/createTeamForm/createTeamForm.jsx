import React from "react";
import { Button, TextAreaField } from "../../common";
import { TextField } from "../../common";
import { useForm } from "react-hook-form";

function CreateTeamForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit: ", data);
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
