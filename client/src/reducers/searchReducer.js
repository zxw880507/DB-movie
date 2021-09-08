export const searchKeywordsReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_KEYWORDS":
      return action.payload;
    default:
      return state;
  }
};

export const searchResultReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RESULT":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case "SET_PAGES":
      return action.payload;

    default:
      return state;
  }
};
