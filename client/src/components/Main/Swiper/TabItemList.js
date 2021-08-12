import React, { useState } from "react";
import TabItem from "./TabItem";

export default function TabItemList(props) {
  const { tab } = props;
  const [selectedType, setSelectedType] = useState(tab.types[0]);
  return (
    <div className="tab-container">
      <h4 className="tab-container-title">{tab.title}</h4>
      <ul className="tab-list">
        {tab.types.map((el, index) => (
          <TabItem
            key={index}
            selected={selectedType === el}
            value={el}
            setSelectedType={setSelectedType}
          />
        ))}
      </ul>
    </div>
  );
}
