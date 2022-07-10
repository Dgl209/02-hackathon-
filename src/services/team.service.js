import httpService from "./http.service";

const teamEndpoint = "teams/";

const teamService = {
  get: async () => {
    const { data } = await httpService.get(teamEndpoint);
    return data;
  },
  getById: async (id) => {
    const { data } = await httpService.get(teamEndpoint + id);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(teamEndpoint + payload.id, payload);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(teamEndpoint + payload.id, payload);
    return data;
  },
};

export default teamService;
