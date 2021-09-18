import axios from "axios";
export const setKeywords = (input) => {
  return { type: "SET_KEYWORDS", payload: input };
};

export const setResult = (results) => {
  return { type: "SET_RESULT", payload: results };
};

export const fetchResult = (page) => (dispatch, getState) => {
  const keywords = getState().searchKeywords;
  axios.get(`/api/search`, { params: { keywords, page } }).then((res) => {
    const { page, results, total_pages } = res.data;
    dispatch(setResult(results));
  });
  // .then((res) => console.log(res.data));
};
