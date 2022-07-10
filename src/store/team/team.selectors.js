const getTeamsList = () => (state) => state.team.entities;

const getTeamById = (id) => (state) =>
  state.team.entities?.find((x) => x.id === id);

const getMainTeam = () => (state) =>
  state.team.entities?.find((x) => x.role === "main");

const getTeamsLoadingStatus = () => (state) => state.team.loading;

export { getTeamsList, getTeamsLoadingStatus, getTeamById, getMainTeam };
