import httpService from "./http.service";

const teamEndpoint = "teams/";

const teamService = {
  create: async (payload) => {
    const { data } = await httpService.put(teamEndpoint + payload.id, payload);
    return data;
  },
};

export default teamService;
