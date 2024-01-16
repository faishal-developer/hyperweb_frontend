import { backendApiEndPoints } from "../../paths/apiEndPoints";
import { api } from "./baseApi";

// const recipeUrl = backendApiEndPoints.recipe;

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    AddRecipe: builder.mutation({
      query: (data: any) => {
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
    UpdateRecipe: builder.mutation({
      query: ({ data, id }: any) => {
        return {
          url: backendApiEndPoints.recipe_details(id),
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        };
      },
    }),
    DeleteRecipe: builder.mutation({
      query: (id: string) => {
        return {
          url: backendApiEndPoints.recipe_details(id),
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useAddRecipeMutation,
  useDeleteRecipeMutation,
  useUpdateRecipeMutation,
} = recipeApi;
