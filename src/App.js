import React, { useState } from "react";

const RandomItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample list of items with id and item name
  const items = [
    { id: 1, item: "Item 1" },
    { id: 2, item: "Item 2" },
    { id: 3, item: "Item 3" },
    // Add more items here as needed
  ];

  const handleButtonClick = () => {
    // Get a random index to select a random item from the list
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    setSelectedItem(randomItem);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Select Random Item</button>
      {selectedItem && (
        <div>
          <h3>Breakfast:</h3>
          <p>Name : {selectedItem.item}</p>
        </div>
      )}
    </div>
  );
};

export default RandomItemSelector;
