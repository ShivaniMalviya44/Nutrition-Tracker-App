import React, { useState } from "react";
import { Nutrition } from "../types";

interface Props 
{
  onAdd: (item: Nutrition) => void;
}

const AddNutrition: React.FC<Props> = ({ onAdd }) => 
{
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);

  const handleSubmit = (e: React.FormEvent) => 
  {
    e.preventDefault();

    if (!foodName || calories <= 0 || protein <= 0) return;

    onAdd({ foodName, calories, protein });

    setFoodName("");
    setCalories(0);
    setProtein(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Food Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Protein"
        value={protein}
        onChange={(e) => setProtein(Number(e.target.value))}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNutrition;