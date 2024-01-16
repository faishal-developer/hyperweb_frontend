import { useState } from "react";
import { useGetAllRecipeQuery } from "../../../redux/api/recipeApi";

const useRecipe = () => {
  const [state, setState] = useState("");
  const { data, isLoading } = useGetAllRecipeQuery({ searchTerm: state });

  const onChange = (e) => {
    if (e.key === "Enter") {
      setState(e.target.value);
      console.log("working", e.target.value);
    }
  };

  return {
    state,
    data,
    isLoading,
    onChange,
  };
};

export default useRecipe;
