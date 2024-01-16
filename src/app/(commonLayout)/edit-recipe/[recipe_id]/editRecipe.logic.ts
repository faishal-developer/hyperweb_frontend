import React, { useEffect, useState } from "react";
import {
  useGetARecipeQuery,
  useUpdateRecipeMutation,
} from "../../../../redux/api/recipeApi";
import { config } from "../../../../config/config";
import { toast } from "react-toastify";

const useEditRecipe = (id) => {
  const { data, isLoading: getLoader } = useGetARecipeQuery(id);
  const [updateRecipeFunc, { isLoading }] = useUpdateRecipeMutation();

  const [recipeData, setRecipeData] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    console.log(id, "id");
    if (!data?.data) return;
    const newData = { ...data?.data };
    newData.instructions = newData.instructions
      .split(config.word_breaker)
      .join("\n");
    newData.ingredients = newData.ingredients
      .split(config.word_breaker)
      .join("\n");
    setRecipeData(newData);
  }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newData = { ...recipeData };
      newData.ingredients = newData.ingredients
        .split("\n")
        .join(config.word_breaker);
      newData.instructions = newData.instructions
        .split("\n")
        .join(config.word_breaker);
      const res: any = await updateRecipeFunc({ data: newData, id: id });
      console.log(res);
      if (!res?.data) toast.error("something happend wrong");
      else {
        toast.success("Recipe updated successfully");
      }
    } catch (e) {
      toast.error("something happend wrong");
    }
  };
  return {
    recipeData,
    handleChange,
    handleSubmit,
    getLoader,
  };
};

export default useEditRecipe;
