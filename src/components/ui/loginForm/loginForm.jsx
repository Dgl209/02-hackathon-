import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, TextField } from "../../common";
import { singIn } from "../../../store/auth/auth.actions";

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("onSubmit: ", data);
    dispatch(singIn(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField id="email" register={register} label="Email" />
      <TextField
        id="password"
        register={register}
        type="password"
        label="Password"
      />
      <Button name="Sign in" type="submit" color="purple" />
    </form>
  );
}

export default LoginForm;
