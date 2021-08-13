import React from "react";
import classNames from "classnames";

export default function TabItem(props) {
  const { selected, value, setSelectedTag } = props;

  const tabSelectedClass = classNames("tab-item", {
    "tab-item-selected": selected,
  });
  return (
    <li
      className={tabSelectedClass}
      onClick={() => {
        setSelectedTag(value);
        console.log(value);
      }}
    >
      <p>{value}</p>
    </li>
  );
}
