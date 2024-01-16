'use client'
import { ToastContainer, toast } from 'react-toastify';
import EditCreateRecipe from '../../../../components/editCreateRecipe/EditCreateRecipe.view';
import useEditRecipe from './editRecipe.logic';

const EditRecipe = ({params}) => {
    const {getLoader,recipeData,handleChange,handleSubmit}=useEditRecipe(params.recipe_id);

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
