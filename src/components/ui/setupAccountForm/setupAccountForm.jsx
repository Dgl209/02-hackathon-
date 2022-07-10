import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, RangeField } from "../../common";
import { updateAccountSkills } from "../../../store/account/account.actions";
import {
  getAccountData,
  getAccountLoadingStatus,
} from "../../../store/account/account.selectors";

function SetupAccountForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const accountData = useSelector(getAccountData());
  const accountLoadingStatus = useSelector(getAccountLoadingStatus());

  const onSubmit = (data) => {
    dispatch(updateAccountSkills(data));
  };

  return (
    !accountLoadingStatus && (
      <Card>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <RangeField
            id="html"
            register={register}
            defaultValue={accountData?.skills?.html}
            label="Html"
          />
          <RangeField
            id="css"
            register={register}
            defaultValue={accountData?.skills?.css}
            label="Css"
          />
          <RangeField
            id="javascript"
            register={register}
            defaultValue={accountData?.skills?.javascript}
            label="JavaScript"
          />
          <RangeField
            id="react"
            register={register}
            defaultValue={accountData?.skills?.react}
            label="React"
          />
          <RangeField
            id="redux"
            register={register}
            defaultValue={accountData?.skills?.redux}
            label="Redux"
          />
          <RangeField
            id="angular"
            register={register}
            defaultValue={accountData?.skills?.angular}
            label="Angular"
          />
          <RangeField
            id="vue"
            register={register}
            defaultValue={accountData?.skills?.vue}
            label="Vue"
          />
          <RangeField
            id="nodejs"
            register={register}
            defaultValue={accountData?.skills?.nodejs}
            label="NodeJS"
          />
          <Button name="Save" type="submit" color="purple" />
        </form>
      </Card>
    )
  );
}

export default SetupAccountForm;
