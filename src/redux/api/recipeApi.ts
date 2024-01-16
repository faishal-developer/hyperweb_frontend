import { backendApiEndPoints } from "../../paths/apiEndPoints";
import { api } from "./baseApi";

// const recipeUrl = backendApiEndPoints.recipe;

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    AddRecipe: builder.mutation({
      query: (data: any) => {
        console.log("api", data);
        return {
          url: backendApiEndPoints.create_recipe,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
  }),
});

export const { useAddRecipeMutation } = recipeApi;
