import React, { useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, ImageField, TextAreaField, TextField } from "../../common";
import { createTeam } from "../../../store/team/team.actions";
import { getAccountId } from "../../../store/auth/auth.selectors";
import TeamProjectsField from "./teamProjectsField/teamProjectsField";

function CreateTeamForm() {
  const dispatch = useDispatch();
  const leader = useSelector(getAccountId());
  const {
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  const uploadedImage = getValues("image");
  const watchImage = watch("image");
  const imageRef = useRef();

  useEffect(() => {}, [watchImage]);

  const onSubmit = (data) => {
    if (!data.image[0]) {
      return toast.error("Upload image");
    }
    if (data.projects.length < 3) {
      return toast.error("Upload at least three project images");
    }

    const id = nanoid();
    dispatch(
      createTeam({ ...data, id, leader, members: [leader], role: "general" })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-60 flex items-center">
        <ImageField
          id="image"
          register={register}
          uploadedFile={uploadedImage}
          inputRef={imageRef}
          hoverContent=""
        />
      </div>
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
      <div className="space-y-2">
        <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Projects
        </h2>
        <TeamProjectsField
          getValues={getValues}
          watch={watch}
          fields={fields}
          append={append}
          remove={remove}
          register={register}
        />
      </div>
      <div className="mt-6">
        <Button name="Create team" type="submit" color="purple" />
      </div>
    </form>
  );
}

export default CreateTeamForm;
