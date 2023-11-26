import React, { useState } from "react";
import "./App.css";
const RandomItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  // Sample list of items with id and item name
  const items = [
    {
      id: 1,
      item: "Dose",
      variety: ["Normal Dose", "Neer Dose", "Rave Dose", "Ragi Dose"],
    },
    { id: 2, item: "Idli", variety: ["Normal Idli", "Rave Idli"] },
    { id: 3, item: "Vegeatable Bath", variety: [] },
    { id: 4, item: "Avalakki Pongal", variety: [] },
    { id: 5, item: "Chapati", variety: [] },
    { id: 6, item: "Parota", variety: [] },
    { id: 7, item: "BisileBath", variety: [] },
    { id: 8, item: "Chitranna", variety: [] },
    { id: 9, item: "Uppittu", variety: [] },
    {
      id: 10,
      item: "Avalakki",
      variety: ["Normal Avalakki", "Huli Avalakki", "Kai Sasuve Avalakki"],
    },
    {
      id: 11,
      item: "Rotti",
      variety: ["Akki Rotti", "Raagi Rotti", "Godi Rotti"],
    },
    { id: 12, item: "Pundigatti", variety: [] },
    { id: 13, item: "Guliyappa", variety: [] },
    { id: 14, item: "Shavige", variety: ["Normal Shavige", "Ganesha Shavige"] },
    // Add more items here as needed
  ];

  const handleButtonClick = () => {
    // Get a random index to select a random item from the list
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];

    setSelectedItem(randomItem);
  };

  return (
    <div className="container">
      <button className="centered-button" onClick={handleButtonClick}>
        Breakfast
      </button>
      {selectedItem && (
        <>
          <div className="centered-data">
            <h3>{selectedItem.item}</h3>
            {selectedItem.variety &&
              selectedItem.variety.map((eachitem) => {
                return <div>{eachitem}</div>;
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default RandomItemSelector;
