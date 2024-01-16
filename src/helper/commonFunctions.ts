import { config } from "../config/config";

export const getRecipes = async (url) => {
  try {
    const res = await fetch(config.baseUrl + url);
    const data = await res.json();
    return data.data;
  } catch (e) {
    return null;
  }
};
