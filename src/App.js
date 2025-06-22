import React, { useState } from "react";

const defaultBreakfasts = [
  "Idli",
  "Dose",
  "Vegetable Bath",
  "Chapathi",
  "Bisibelebath",
];
const defaultLunches = [
  "Dal Rice",
  "Rajma Rice",
  "Sambar Rice",
  "Chole Rice",
  "Fried Rice",
];
const defaultDinners = [
  "Roti Sabzi",
  "Khichdi",
  "Pulao",
  "Sandwich",
  "Paratha",
];

const recipes = {
  "Vegetable Bath": "",
  "Bisibele Bath": "",
  Rotti: "",
  "Avaakki Pongal": "",
  Upittu: "",
  Chitranna: "",
  Avalakki: "",
  Guliyappa: "",
  Shavige: "",
  Pundigatti: "",
  Chapati: "",
  Poha: "Soak poha, temper mustard seeds, curry leaves, onions, mix poha.",
  Idli: "Steam fermented batter in idli mould.",
  Upma: "Roast rava, temper mustard, add veggies & cook.",
  Dose: "Make dosa batter, pour on tawa, cook with oil.",
  Paratha: "Prepare stuffing, roll and cook paratha.",
  "Dal Rice": "Boil dal, cook rice, temper with ghee, mustard, jeera.",
  "Rajma Rice": "Soak rajma, pressure cook with spices, serve with rice.",
  "Sambar Rice": "Make sambar, mix with rice.",
  "Chole Rice": "Soak chole, cook with masala, serve with rice.",
  "Fried Rice": "Use leftover rice, sauté with veggies & soy sauce.",
  "Roti Sabzi": "Make dough, roll roti, prepare simple sabzi.",
  Khichdi: "Cook dal & rice with ghee and cumin.",
  Pulao: "Sauté rice with veggies, spices, and cook.",
  Sandwich: "Layer veggies in bread, toast on pan.",
};

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function SimpleMealPlanner() {
  const [days, setDays] = useState(() =>
    Array.from({ length: 5 }, (_, i) => ({
      day: `Day ${i + 1}`,
      breakfast: defaultBreakfasts[i],
      lunch: defaultLunches[i],
      dinner: defaultDinners[i],
    }))
  );

  const handleChange = (index, mealType, value) => {
    const updated = [...days];
    updated[index][mealType] = value;
    setDays(updated);
  };

  const handleAddColumn = (mealType) => {
    const newValue = prompt(
      `Enter ${mealType} for all 5 days (comma separated)`
    );
    if (!newValue) return;
    const values = newValue.split(",").map((v) => v.trim());
    const updated = days.map((day, idx) => ({
      ...day,
      [mealType]: values[idx] || "",
    }));
    setDays(updated);
  };

  const renderDropdown = (options, value, onChange) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ width: "100%" }}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 800,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#4a90e2" }}>
        🌞 5-Day Meal Planner 🍽️
      </h2>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f0f8ff" }}>
            <th style={{ border: "1px solid #ccc", padding: 10 }}>Day</th>
            <th style={{ border: "1px solid #ccc", padding: 10 }}>Breakfast</th>
            <th style={{ border: "1px solid #ccc", padding: 10 }}>Lunch</th>
            <th style={{ border: "1px solid #ccc", padding: 10 }}>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, idx) => (
            <tr
              key={idx}
              style={{ backgroundColor: idx % 2 === 0 ? "#fff" : "#f9f9f9" }}
            >
              <td
                style={{ border: "1px solid #ccc", padding: 10, width: "42px" }}
              >
                {day.day}
              </td>
              <td style={{ border: "1px solid #ccc", padding: 10 }}>
                {renderDropdown(defaultBreakfasts, day.breakfast, (v) =>
                  handleChange(idx, "breakfast", v)
                )}
                <div
                  style={{ fontSize: "0.85em", color: "#666", marginTop: 4 }}
                >
                  {recipes[day.breakfast]}
                </div>
              </td>
              <td style={{ border: "1px solid #ccc", padding: 10 }}>
                {renderDropdown(defaultLunches, day.lunch, (v) =>
                  handleChange(idx, "lunch", v)
                )}
                <div
                  style={{ fontSize: "0.85em", color: "#666", marginTop: 4 }}
                >
                  {recipes[day.lunch]}
                </div>
              </td>
              <td style={{ border: "1px solid #ccc", padding: 10 }}>
                {renderDropdown(defaultDinners, day.dinner, (v) =>
                  handleChange(idx, "dinner", v)
                )}
                <div
                  style={{ fontSize: "0.85em", color: "#666", marginTop: 4 }}
                >
                  {recipes[day.dinner]}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <div>*** Future Enhancement ***</div>
        <button
          onClick={() => handleAddColumn("breakfast")}
          disabled
          style={{
            marginRight: 10,
            padding: "8px 12px",
            borderRadius: 4,
            backgroundColor: "#ffcc00",
            border: "none",
          }}
        >
          ➕ Add Breakfast
        </button>
        <button
          onClick={() => handleAddColumn("lunch")}
          disabled
          style={{
            marginRight: 10,
            padding: "8px 12px",
            borderRadius: 4,
            backgroundColor: "#90ee90",
            border: "none",
          }}
        >
          ➕ Add Lunch
        </button>
        <button
          onClick={() => handleAddColumn("dinner")}
          disabled
          style={{
            padding: "8px 12px",
            borderRadius: 4,
            backgroundColor: "#add8e6",
            border: "none",
          }}
        >
          ➕ Add Dinner
        </button>
      </div>
    </div>
  );
}
