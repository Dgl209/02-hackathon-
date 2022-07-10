import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Breadcrumb } from "../../components/common";
import userService from "../../services/user.service";
import {
  UserInformation,
  UserProfile,
  UserSkills,
} from "../../components/layout";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    async function loadUser() {
      try {
        const { content } = await userService.getUserById(id);
        setUser(content);
      } catch (error) {
        toast.error(error.message);
      }
    }
    loadUser();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Breadcrumb />
      </div>
      <div className="flex justify-around">
        <UserProfile user={user} id={id} />
        <UserInformation user={user} />
      </div>
      <div className="mt-6 w-full">
        <h5 className="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          User skills
        </h5>
        <UserSkills user={user} />
      </div>
    </div>
  );
}

export default User;
