import { useState, useEffect } from "react";
import axios from "axios";

export default function useSwiper(tab) {
  // const init = tags.reduce((a, b) => ({ ...a, [b]: null }), {});
  const [state, setState] = useState(null);

  

  useEffect(() => {
    console.log("effect ----------------------");
    const { type, keyword, sortByType } = tab;
    const tags = (sortByType ? type : keyword).map((el) =>
      el.toLowerCase().replace(/\s/g, "_")
    );
    const promiseArr = tags.map((tag) => {
      const url = sortByType ? `${tag}/${keyword}` : `${type}/${tag}`;
      return axios
        .get(`/api/${url}`)
        .then((res) => ({ [tag]: res.data.results }));
    });
    Promise.all(promiseArr).then((res) => {
      const newState = res.reduce((a, b) => ({ ...a, ...b }));
      setState((prev) => ({ ...prev, ...newState }));
    });
  }, [tab]);

  return state;
}
