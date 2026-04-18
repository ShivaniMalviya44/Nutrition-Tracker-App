import axios from "axios";
import { Nutrition } from "../types";

const API_URL = "http://localhost:3001/nutrition";

export const getNutrition = async (): Promise<Nutrition[]> => 
{
  const res = await axios.get(API_URL);
  return res.data;
};

export const addNutrition = async (data: Nutrition): Promise<Nutrition> => 
{
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const deleteNutrition = async (id: number): Promise<void> => 
{
  await axios.delete(`${API_URL}/${id}`);
};