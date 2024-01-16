'use client'

// pages/create-recipe.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import { useGetARecipeQuery, useUpdateRecipeMutation } from '../../../../redux/api/recipeApi';
import { config } from '../../../../config/config';
import EditCreateRecipe from '../../../../components/editCreateRecipe/EditCreateRecipe.view';

const EditRecipe = ({params}) => {
    const {data,isLoading:getLoader}=useGetARecipeQuery(params.recipe_id);
  const [updateRecipeFunc,{isLoading}]=useUpdateRecipeMutation();

  const [recipeData, setRecipeData] = useState({
    title: '',
    image: '',
    description: '',
    ingredients: '',
    instructions: '',
  });

  useEffect(()=>{
    if(!data?.data)return;
    const newData={...data?.data}
    newData.instructions=newData.instructions.split(config.word_breaker).join('\n');
    newData.ingredients=newData.ingredients.split(config.word_breaker).join('\n');
    setRecipeData(newData);
  },[data])
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
      const res:any=await updateRecipeFunc({data:newData,id:params.recipe_id});
      console.log(res)
      if(!res?.data)toast.error('something happend wrong')
      else {
        toast.success('Recipe updated successfully')
      }
    }catch(e){
      toast.error('something happend wrong')
    }
    
  };

  if(getLoader)return "loading..."
  return (
    <div>
            <ToastContainer />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Edit Recipe</h1>
        <EditCreateRecipe recipeData={recipeData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      </div>

    </div>
  );
};

export default EditRecipe;
