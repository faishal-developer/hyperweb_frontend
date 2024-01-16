// pages/index.js
'use client'
import Link from "next/link";
import { paths } from "../../../paths/Paths";
import { debounce, getRecipes } from "../../../helper/commonFunctions";
import { useGetAllRecipeQuery } from "../../../redux/api/recipeApi";
import SearchBox from "../../../components/common/SearchBox";
import { useState } from "react";
import {style} from './recipe.tailwind'
import useRecipe from "./recipe.logic";

const RecipePage = () => {
  const {isLoading,state,onChange,data}=useRecipe();

  if(isLoading)return 'loading...'
  return (
    <div className={style.cont}>
      <h1 className={style.h2}>Recipe List</h1>
      <SearchBox value={state} onChange={onChange} handleSubmit={()=>{}}/>
      <div className={style.grid}>
        {data?.data?.map((recipe) => (
          <Link key={recipe.id} href={paths.recipe_details(recipe.id)}>
            <span className={style.span}>
              <img
                className={style.img}
                src={recipe.image}
                alt={`${recipe.title} Image`}
              />
              <div className="p-4">
                <h2 className={style.title}>{recipe.title}</h2>
                <p className="text-gray-600">Click to view details</p>
              </div>
            </span>
          </Link>
        )) }
      </div>
    </div>
  );
};

export default RecipePage;
