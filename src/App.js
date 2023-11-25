import React, { useState } from "react";

const RandomItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Sample list of items with id and item name
  const items = [
    { id: 1, item: "Neer Dose" },
    { id: 2, item: "Rave Dose" },
    { id: 3, item: "Normal Dose" },
    { id: 4, item: "Idli" },
    { id: 5, item: "Vegeatable Bath" },
    { id: 6, item: "Avalakki Pongal" },
    { id: 7, item: "Chapati" },
    { id: 8, item: "Parota" },
    { id: 9, item: "BisileBath" },
    { id: 10, item: "Chitranna" },
    { id: 11, item: "Uppittu" },
    { id: 12, item: "Normal Avalakki" },
    { id: 13, item: "Huli Avalakki" },
    { id: 14, item: "Kai Sasuve Avalakki" },
    { id: 15, item: "Akki Rotti" },
    { id: 16, item: "Raagi Rotti" },
    { id: 17, item: "Godi Rotti" },
    { id: 18, item: "Pundigatti" },
    { id: 19, item: "Guliyappa" },
    { id: 20, item: "Shavige" },
    { id: 21, item: "Ganesha Shavige" },
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
