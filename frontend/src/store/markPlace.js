



import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const markPlace = createApi({
  baseQuery: fetchBaseQuery(  { baseUrl:'https://fakestoreapi.com' }),
  reducerPath: "markPlace",
  tagTypes: ["markPlace",'categories'],
  endpoints: (build) => ({
    getmarkPlace: build.query({
      query: () => `/products`,
      providesTags: ["markPlace"],
    }),
    getcategories: build.query({
        query: () => "/products/categories",
        providesTags: ["categories"],
      }),
  }),
});

export const { useGetmarkPlaceQuery, useGetcategoriesQuery} = markPlace;
