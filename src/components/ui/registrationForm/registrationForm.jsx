import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, TextAreaField, TextField } from "../../common";
import { signUp } from "../../../store/auth/auth.actions";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("onSubmit: ", data);
    dispatch(signUp(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField id="fullName" register={register} label="Full name" />
      <TextField id="age" register={register} label="Age" />
      <TextAreaField id="about" register={register} label="About yourself" />
      <TextField id="email" register={register} label="Email" />
      <TextField
        id="password"
        register={register}
        type="password"
        label="Password"
      />
      <Button name="Register" type="submit" color="purple" />
    </form>
  );
}

export default RegistrationForm;
