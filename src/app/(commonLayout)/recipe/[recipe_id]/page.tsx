// pages/recipes/[id].js

import Button from "../../../../components/common/Button";
import EditDeleteBtn from "../../../../components/common/EditDeleteBtn";
import { config } from "../../../../config/config";
import { getRecipes } from "../../../../helper/commonFunctions";
import { paths } from "../../../../paths/Paths";
import {style} from '../recipe.tailwind'

const RecipeDetails = async({params}) => {

  // Fetch recipe details based on the 'id' parameter
  // Replace this with your actual data fetching logic
  const recipe=await getRecipes(paths.recipe_details(params.recipe_id))

  if (!recipe) {
    return <p>Loading...</p>; // Replace with proper loading state or error handling
  }

  return (
    <div>
      
      <div className={style.cont2}>
        <div className={style.flex_cont2}>
          <div className={style.img_cont}>
            <div className="flex space-x-4 my-2">
              <EditDeleteBtn id={params.recipe_id}/>
            </div>
            <img
              className={style.img_details}
              src={recipe.image}
              alt={`${recipe.title} Image`}
            />
          </div>

          <div className="lg:w-1/2">
            <h1 className={style.title_d}>{recipe.title}</h1>
            <p className={style.desc}>{recipe.description}</p>

            <h2 className={style.incH}>Ingredients:</h2>
            <ul className={style.inc_li}>
              {recipe.ingredients?.split(config.word_breaker)?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h2 className={style.ins}>Instructions:</h2>
            <ol className={style.ins_li}>
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
