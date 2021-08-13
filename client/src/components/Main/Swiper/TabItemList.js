import React, { useState } from "react";
import TabItem from "./TabItem";

export default function TabItemList(props) {
  const { title, type, keyword, sortByType } = props.tab;
  const tags = sortByType ? type : keyword;
  const [selectedTag, setSelectedTag] = useState(tags[0]);
  return (
    <div className="tab-container">
      <h4 className="tab-container-title">{title}</h4>
      <ul className="tab-list">
        {tags.map((el, index) => (
          <TabItem
            key={index}
            selected={selectedTag === el}
            value={el}
            setSelectedTag={setSelectedTag}
          />
        ))}
      </ul>
    </div>
  );
}
