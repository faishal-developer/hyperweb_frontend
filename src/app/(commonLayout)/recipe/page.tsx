// pages/index.js

import Link from "next/link";
import { paths } from "../../../paths/Paths";
import { getRecipes } from "../../../helper/commonFunctions";

const RecipePage = async() => {
  const recipes=await getRecipes(paths.recipe);

  return (
    <div className="bg-gray-100 text-slate-950 min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes?.map((recipe) => (
          <Link key={recipe.id} href={paths.recipe_details(recipe.id)}>
            <span className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                className="w-full h-48 object-cover object-center"
                src={recipe.image}
                alt={`${recipe.title} Image`}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">Click to view details</p>
              </div>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
