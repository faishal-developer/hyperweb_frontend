import { useState } from "react";
import { config } from "../../../config/config";
import { useAddRecipeMutation } from "../../../redux/api/recipeApi";
import { toast } from "react-toastify";

const useCreateRecip = () => {
  const [createRecipeFunc, { isLoading }] = useAddRecipeMutation();

  const [recipeData, setRecipeData] = useState({
    title: "",
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

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
      const res: any = await createRecipeFunc(newData);
      console.log(res);
      if (!res?.data) toast.error("something happend wrong");
      else {
        toast.success("Recipe created successfully");
        setRecipeData({
          title: "",
          image: "",
          description: "",
          ingredients: "",
          instructions: "",
        });
      }
    } catch (e) {
      toast.error("something happend wrong");
    }
  };

  return {
    handleChange,
    handleSubmit,
    recipeData,
  };
};

export default useCreateRecip;
