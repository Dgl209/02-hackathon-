import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumb, Button, List } from "../../components/common";
import { TeamMember } from "../../components/ui";
import { getAccountData } from "../../store/account/account.selectors";
import { customHistory } from "../../utils/core";

function Bookmarks() {
  const BookmarksList = List(TeamMember);
  const accountData = useSelector(getAccountData());
  return (
    <div className="container mx-auto p-6">
      <Breadcrumb />
      {accountData?.bookmarks?.length ? (
        <>
          <h3 className="mb-5 text-2xl text-center font-medium text-gray-900 dark:text-white">
            Bookmarks
          </h3>
          <BookmarksList items={accountData?.bookmarks} />{" "}
        </>
      ) : (
        <div className="w-full flex flex-col items-center space-y-3 justify-center pt-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Bookmarks list is empty
          </h5>
          <Button
            name="Main page"
            color="light"
            onClick={() => customHistory.push("/")}
          />
        </div>
      )}
    </div>
  );
}

export default Bookmarks;
