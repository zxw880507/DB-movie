import React, { useState } from "react";
import TabItem from "./TabItem";

export default function TabItemList(props) {
  const { tabs } = props;
  const [selectedType, setSelectedType] = useState(tabs.types[0]);
  return (
    <div className="tab-container">
      <h4 className="tab-container-title">{tabs.title}</h4>
      <ul className="tab-list">
        {tabs.types.map((el, index) => (
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
