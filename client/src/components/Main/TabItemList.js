import React, { useState } from "react";
import TabItem from "./TabItem";

const type = ["Movie", "TV"];

export default function TabItemList() {
  const [selectedType, setSelectedType] = useState(type[0]);
  return (
    <div className="tab-container">
      <h4 className="tab-container-title">What's Popular</h4>
      <ul className="tab-list">
        {type.map((el, index) => (
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
