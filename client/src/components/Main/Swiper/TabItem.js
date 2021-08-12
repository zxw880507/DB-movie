import React from "react";
import classNames from "classnames";

export default function TabItem(props) {
  const { selected, value, setSelectedType } = props;

  const tabSelectedClass = classNames("tab-item", {
    "tab-item-selected": selected,
  });
  return (
    <li className={tabSelectedClass} onClick={() => setSelectedType(value)}>
      <p>{value}</p>
    </li>
  );
}
