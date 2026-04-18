import React from "react";
import { Nutrition } from "../types";

interface Props 
{
  item: Nutrition;
  onDelete: (id: number) => void;
}

const NutritionItem: React.FC<Props> = ({ item, onDelete }) => 
{
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <span>{item.foodName}</span>
      <span>{item.calories} cal</span>
      <span>{item.protein}g protein</span>
      <button onClick={() => onDelete(item.id!)}>Delete</button>
    </div>
  );
};

export default NutritionItem;