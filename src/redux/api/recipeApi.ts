/* eslint-disable */
import { backendApiEndPoints } from "../../paths/apiEndPoints";
import { api } from "./baseApi";

// const recipeUrl = backendApiEndPoints.recipe;

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRecipe: builder.query({
      query: (params: any) => ({
        url: backendApiEndPoints.recipe,
        method: "GET",
        params,
      }),
      providesTags: ["Recipe"],
    }),
    getARecipe: builder.query({
      query: (id: string) => ({
        url: backendApiEndPoints.recipe_details(id),
        method: "GET",
      }),
    }),
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
      invalidatesTags: ["Recipe"],
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
      invalidatesTags: ["Recipe"],
    }),
    DeleteRecipe: builder.mutation({
      query: (id: string) => {
        return {
          url: backendApiEndPoints.recipe_details(id),
          method: "DELETE",
        };
      },
      invalidatesTags: ["Recipe"],
    }),
  }),
});

export const {
  useAddRecipeMutation,
  useDeleteRecipeMutation,
  useUpdateRecipeMutation,
  useGetAllRecipeQuery,
  useGetARecipeQuery,
} = recipeApi;
