const router = require("express").Router();
const axios = require("axios");
const cache = require("../cache");

module.exports = (api_key, helpers) => {
  router.get("/", (request, response) => {
    const cacheKey = helpers.generateCacheKey(request.query);

    cache.get(cacheKey).then((res) => {
      if (res.data) {
        console.log({ msg: "data fetched from cache!" });
        response.json(res.data);
      } else {
        const base_URL = `https://api.themoviedb.org/3/discover/movie?`;
        const url = base_URL + helpers.generateURL(api_key, request.query);
        console.log(url);
        axios.get(url).then((res) => {
          response.json(res.data);
          cache
            .set(cacheKey, res.data, 10000)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        });
      }
    });
  });
  return router;
};
