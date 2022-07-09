import { httpService } from "./index";

const userEndpoint = "users/";

const userService = {
  getUserById: async (id) => {
    const { data } = await httpService.get(userEndpoint + id);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    return data;
  },
};

export default userService;
