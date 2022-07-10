import { httpService } from "./index";

const reviewEndpoint = "reviews/";

const reviewService = {
  create: async (payload) => {
    const { data } = await httpService.put(
      reviewEndpoint + payload.id,
      payload
    );
    return data;
  },
  get: async () => {
    const { data } = await httpService.get(reviewEndpoint);
    return data;
  },
};

export default reviewService;
