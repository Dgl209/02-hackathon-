import React from "react";
import { useForm } from "react-hook-form";
import { PurpleButton, TextAreaField, TextField } from "../../common";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("onSubmit: ", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="name-surname"
        register={register}
        label="Name and surname"
      />
      <TextField id="age" register={register} label="Age" />
      <TextAreaField id="about" register={register} label="About yourself" />
      <TextField id="email" register={register} label="Email" />
      <TextField
        id="password"
        register={register}
        type="password"
        label="Password"
      />
      <PurpleButton name="Register" type="submit" />
    </form>
  );
}

export default RegistrationForm;
