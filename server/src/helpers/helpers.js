module.exports = {
  generateURL(api_key, query) {
    const { sortBy, direction, page } = query;
    const queryParams = { api_key, sort_by: `${sortBy}.${direction}`, page };
    let arr = [],
      queryStr;
    for (let key in queryParams) {
      queryStr = `${key}=${queryParams[key]}`;
      arr.push(queryStr);
    }
    return arr.join("&");
  },
  generateCacheKey(query) {
    const { sortBy, direction, page } = query;
    const arr = [sortBy, direction, page];
    return arr.join("&");
  },
};
