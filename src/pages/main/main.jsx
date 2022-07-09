import React from "react";
import { TeamDetails } from "../../components/ui";

function Main() {
  return (
    <TeamDetails
      name="Noteworthy technology acquisitions 2021"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores, quod
      aliquid mollitia dolorum voluptatum, obcaecati possimus, commodi laboriosam cum optio!
      Deserunt maiores harum voluptatum eius laborum"
      members={[
        "1uGkvslvQGh5erIdzZaQA8Thnd13",
        "ACFzwmtzMGSleCzutNa9MDSqbmw2",
        "Nt35E92aulauSsdeVxtqXedTYVV2",
        "cvVhROzeLqfFujsLZJr5jDzgpZg2",
      ]}
    />
  );
}

export default Main;
