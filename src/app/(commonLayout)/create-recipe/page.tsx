'use client'

// pages/create-recipe.js

import { ToastContainer, toast } from 'react-toastify';
import EditCreateRecipe from '../../../components/editCreateRecipe/EditCreateRecipe.view';
import useCreateRecip from './createRecipe.logic';

const CreateRecipe = () => {
  const {handleChange,handleSubmit,recipeData}=useCreateRecip();

  return (
    <div>
      <ToastContainer />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Create a New Recipe</h1>
        <EditCreateRecipe 
          recipeData={recipeData} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
      </div>

    </div>
  );
};

export default CreateRecipe;
