import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Card, TextField } from "../../common";
import { singIn } from "../../../store/auth/auth.actions";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(singIn(data));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          register={register}
          label="Email"
          options={{
            required: "Email is required field",
          }}
          error={errors.email?.message}
        />
        <TextField
          id="password"
          register={register}
          type="password"
          label="Password"
          options={{ required: "Password required field" }}
          error={errors.password?.message}
        />
        <Button name="Sign in" type="submit" color="purple" />
      </form>
    </Card>
  );
}

export default LoginForm;
