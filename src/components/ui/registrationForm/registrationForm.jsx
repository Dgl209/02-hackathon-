import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Card, TextAreaField, TextField } from "../../common";
import { signUp } from "../../../store/auth/auth.actions";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("errors: ", errors);
    console.log("onSubmit: ", data);
    dispatch(signUp(data));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="fullName"
          register={register}
          label="Full name"
          options={{
            required: "Full name is required field",
          }}
          error={errors.fullName?.message}
        />
        <TextField
          id="age"
          register={register}
          label="Age"
          options={{
            required: "Age is required field",
            pattern: {
              value: /^(?:1(?:00?|\d)|[2-5]\d|[6-9]\d?)$/,
              message: "Age entered incorrectly",
            },
          }}
          error={errors.age?.message}
        />
        <TextAreaField
          id="about"
          register={register}
          label="About yourself"
          options={{
            required: "About required field",
          }}
          error={errors.about?.message}
        />
        <TextField
          id="speciality"
          register={register}
          label="Speciality"
          options={{ required: "Speciality is required field" }}
          error={errors.speciality?.message}
        />
        <div className="flex items-center justify-between w-full ">
          <div className="w-full mr-2">
            <TextField
              id="instagram"
              register={register}
              label="Instagram"
              options={{
                required: "Instagram is required filed",
                pattern: {
                  value: /^[h][t]{2}[p][s][:]\/\/\S+\.\S+$/g,
                  message: "The link is not entered correctly",
                },
              }}
              error={errors.instagram?.message}
            />
          </div>
          <div className="w-full ml-2">
            <TextField
              id="github"
              register={register}
              label="GitHub"
              options={{
                required: "GitHub is required filed",
                pattern: {
                  value: /^[h][t]{2}[p][s][:]\/\/\S+\.\S+$/g,
                  message: "The link is not entered correctly",
                },
              }}
              error={errors.github?.message}
            />
          </div>
        </div>
        <TextField
          id="email"
          register={register}
          label="Email"
          options={{
            required: "Email is required field",
            pattern: {
              value: /^\S+@\S+\.\S+$/g,
              message: "Email entered incorrectly",
            },
          }}
          error={errors.email?.message}
        />
        <TextField
          id="password"
          register={register}
          type="password"
          label="Password"
          options={{
            required: "Password is required",
            pattern: {
              value: /\d+/g,
              message: "Password must contain at least one number",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          error={errors.password?.message}
        />
        <Button name="Register" type="submit" color="purple" />
      </form>
    </Card>
  );
}

export default RegistrationForm;
