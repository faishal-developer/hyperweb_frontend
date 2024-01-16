import React from 'react';

const EditCreateRecipe = ({recipeData,handleChange,handleSubmit}) => {

  console.log(recipeData,'recipedata')
    return (
        <>
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
        </>
    );
};

export default EditCreateRecipe;