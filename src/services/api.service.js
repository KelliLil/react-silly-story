const BASE_URL = "http://localhost:3001/";

export default {
  // Show one random data (people, places, situations)
  async show() {
    const resp = await fetch("http://localhost:3001/people/1");

    // Because this METHOD is 'async', it will return a promise (no need for await)
    // Whoever calls this method will need to use 'await' to get the data
    return resp.json();
  },
};
