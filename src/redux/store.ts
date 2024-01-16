"use client";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/baseApi";
import testReducer from "./testSlice";
// ...

export const store = configureStore({
  reducer: {
    testReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
