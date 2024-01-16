// pages/recipes/[id].js

import { config } from "../../../../config/config";
import { getRecipes } from "../../../../helper/commonFunctions";
import { paths } from "../../../../paths/Paths";


const RecipeDetails = async({params}) => {

  // Fetch recipe details based on the 'id' parameter
  // Replace this with your actual data fetching logic
  const recipe=await getRecipes(paths.recipe_details(params.recipe_id))

  if (!recipe) {
    return <p>Loading...</p>; // Replace with proper loading state or error handling
  }

  return (
    <div>

      <div className="container mx-auto p-8">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            className="w-full max-h-96 lg:w-1/2 h-auto mb-8 lg:mb-0 lg:mr-8 rounded-lg object-cover"
            src={recipe.image}
            alt={`${recipe.title} Image`}
          />

          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.description}</p>

            <h2 className="text-xl font-bold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients?.split(config.word_breaker)?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className="text-xl font-bold mb-2">Instructions:</h2>
            <ol className="list-decimal list-inside">
              {recipe.instructions?.split(config.word_breaker).map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

    </div>
  );
};

export default RecipeDetails;
