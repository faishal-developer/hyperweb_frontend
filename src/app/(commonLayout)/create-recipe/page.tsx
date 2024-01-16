'use client'

// pages/create-recipe.js
import { useState } from 'react';
import Link from 'next/link';
import { config } from '../../../config/config';
import { useAddRecipeMutation } from '../../../redux/api/recipeApi';
import { ToastContainer, toast } from 'react-toastify';

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

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={recipeData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={recipeData.image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={recipeData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-600">
              Ingredients (one per line)
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={recipeData.ingredients}
              onChange={handleChange}
              rows={5}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-600">
              Instructions (one per line)
            </label>
            <textarea
              id="instructions"
              name="instructions"
              value={recipeData.instructions}
              onChange={handleChange}
              rows={5}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Create Recipe
            </button>
          </div>
        </form>

        <p className="mt-4">
          Already have a recipe?{' '}
          <Link href="/">
            <span className="text-blue-500 hover:underline">Explore existing recipes</span>
          </Link>
        </p>
      </div>

    </div>
  );
};

export default CreateRecipe;
