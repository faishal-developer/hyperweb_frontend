'use client'

// pages/create-recipe.js
import { useState } from 'react';
import Link from 'next/link';
import { config } from '../../../config/config';
import { useAddRecipeMutation } from '../../../redux/api/recipeApi';
import { ToastContainer, toast } from 'react-toastify';
import EditCreateRecipe from '../../../components/editCreateRecipe/EditCreateRecipe.view';

const CreateRecipe = () => {
  const [createRecipeFunc,{isLoading}]=useAddRecipeMutation();

  const [recipeData, setRecipeData] = useState({
    title: '',
    image: '',
    description: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = async(e) => {
    try{
      e.preventDefault();
      const newData={...recipeData};
      newData.ingredients= newData.ingredients.split('\n').join(config.word_breaker);
      newData.instructions= newData.instructions.split('\n').join(config.word_breaker);
      const res:any=await createRecipeFunc(newData);
      console.log(res)
      if(!res?.data)toast.error('something happend wrong')
      else {
        toast.success('Recipe created successfully')
        setRecipeData({
          title: '',
          image: '',
          description: '',
          ingredients: '',
          instructions: '',
        });
      }
    }catch(e){
      toast.error('something happend wrong')
    }
    
  };

  return (
    <div>
            <ToastContainer />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Create a New Recipe</h1>
        <EditCreateRecipe recipeData={recipeData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>

    </div>
  );
};

export default CreateRecipe;
