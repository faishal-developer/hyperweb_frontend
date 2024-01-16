import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config/config";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    // baseUrl: "http://localhost:5000",
  }),
  endpoints: () => ({}),
  tagTypes: ["Recipe"],
});
