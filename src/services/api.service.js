const BASE_URL = "http://localhost:3001/";

export default {
  // Show one random data (people, places, situations)
  // TODO: Access any resource id from 1-3 (random).
  async show(resource) {
    const resp = await fetch(`${BASE_URL}/${resource}/1`);

    // Because this METHOD is 'async', it will return a promise (no need for await)
    // Whoever calls this method will need to use 'await' to get the data
    return resp.json();
  },
};
