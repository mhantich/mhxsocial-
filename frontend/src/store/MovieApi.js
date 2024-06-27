import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Function to get the current date in "YYYY-MM-DD" format

export const MovieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl:`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=31c94a1859c33186bfdef85564ce63f2` }),
  reducerPath: "MovieApi",
  tagTypes: ["Movie"],
  endpoints: (build) => ({
    GetMovie: build.query({
      query: () => ``,
      providesTags: ["Movie"],
    }),
  }),
});
export const { useGetMovieQuery } = MovieApi;
