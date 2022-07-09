import { createAction } from "@reduxjs/toolkit";
import teamSlice from "./team.slice";
import { handleError } from "../errors/errors.actions";
import { teamService } from "../../services";
import { customHistory } from "../../utils/core";

const { created, requested, received, failed, updated } = teamSlice.actions;
const creationRequested = createAction("team/creationRequested");
const creationFailed = createAction("team/creationFailed");
const updateRequested = createAction("team/updateRequested");
const updateFailed = createAction("team/updateFailed");

const createTeam = (payload) => async (dispatch) => {
  dispatch(creationRequested());
  try {
    const { content } = await teamService.create(payload);
    dispatch(created(content));
    customHistory.push("/teams");
  } catch (error) {
    dispatch(creationFailed());
    dispatch(handleError(error));
  }
};

const loadTeams = () => async (dispatch) => {
  dispatch(requested());
  try {
    const { content } = await teamService.get();
    dispatch(received(content));
  } catch (error) {
    dispatch(failed());
    dispatch(handleError(error));
  }
};

const updateMembers = (memberId, teamId) => async (dispatch, getState) => {
  dispatch(updateRequested());
  const team = getState().team.entities.find((x) => x.id === teamId);
  try {
    let newData;
    if (team.members && team.members.includes(memberId)) {
      const filteredTeamMembers = team.members.filter((x) => x !== memberId);
      newData = {
        ...team,
        members: filteredTeamMembers,
      };
    } else if (team.members) {
      newData = {
        ...team,
        members: [...team.members, memberId],
      };
    } else {
      newData = {
        ...team,
        members: [memberId],
      };
    }
    const { content } = await teamService.update(newData);
    dispatch(updated(content));
  } catch (error) {
    dispatch(updateFailed());
    dispatch(handleError(error));
  }
};

export { createTeam, loadTeams, updateMembers };
