import React, { useEffect, useMemo, useState } from "react";
import { Nutrition } from "./types";
import { getNutrition, addNutrition, deleteNutrition } from "./services/api";
import AddNutrition from "./components/AddNutrition";
import NutritionList from "./components/NutritionList";

const App: React.FC = () => 
{
  const [nutritionList, setNutritionList] = useState<Nutrition[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => 
  {
    const data = await getNutrition();
    setNutritionList(data);
  };

  const handleAdd = async (item: Nutrition) => 
  {
    const newItem = await addNutrition(item);
    setNutritionList((prev) => [...prev, newItem]);
  };

  const handleDelete = async (id: number) => 
  {
    await deleteNutrition(id);
    setNutritionList((prev) => prev.filter((item) => item.id !== id));
  };

  const totalCalories = useMemo(() => 
  {
    return nutritionList.reduce((sum, item) => sum + item.calories, 0);
  }, [nutritionList]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nutrition Tracker</h1>

      <AddNutrition onAdd={handleAdd} />

      <h2>Total Calories: {totalCalories}</h2>

      <NutritionList list={nutritionList} onDelete={handleDelete} />
    </div>
  );
};

export default App;