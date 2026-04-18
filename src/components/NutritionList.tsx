import React from "react";
import { Nutrition } from "../types";
import NutritionItem from "./NutritionItem";

interface Props 
{
  list: Nutrition[];
  onDelete: (id: number) => void;
}

const NutritionList: React.FC<Props> = ({ list, onDelete }) => 
{
  return (
    <div>
      {list.length === 0 && <p>No data available</p>}
      {list.map((item) => (
        <NutritionItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NutritionList;