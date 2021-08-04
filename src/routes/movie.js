const router = require("express").Router();
const axios = require("axios");

module.exports = (api_key, helpers) => {
  router.get("/", (request, response) => {
    const base_URL = `https://api.themoviedb.org/3/discover/movie?`;
    const url = base_URL + helpers.generateURL(api_key, request.query);
    console.log(url);
    axios.get(url).then((res) => response.json(res.data));
  });
  return router;
};
