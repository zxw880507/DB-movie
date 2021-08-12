const router = require("express").Router();
const axios = require("axios");
const cache = require("../cache");


module.exports = (api_key, helpers) => {
  router.get("/:type/:keyword", (request, response) => {
    const { type, keyword } = request.params;
    const cacheKey = helpers.generateCacheKey(request.params);

    cache.get(cacheKey).then((res) => {
      if (res.data) {
        console.log({ msg: "keyword fetched from cache!" });
        response.json(res.data);
      } else {
        const url = `https://api.themoviedb.org/3/${type}/${keyword}?api_key=${api_key}&language=en-US&page=1`;
        axios
          .get(url)
          .then((res) => {
            response.json(res.data);
            cache
              .set(cacheKey, res.data, 10000)
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
          })
          .catch(() => response.status(404));
      }
    });
  });
  router.get("/:type", (request, response) => {
    const type = request.params.type;
    const cacheKey = helpers.generateCacheKey({
      ...request.params,
      ...request.query,
    });

    cache.get(cacheKey).then((res) => {
      if (res.data) {
        console.log({ msg: "data fetched from cache!" });
        response.json(res.data);
      } else {
        const base_URL = `https://api.themoviedb.org/3/discover/${type}?`;
        const url = base_URL + helpers.generateURL(api_key, request.query);

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
