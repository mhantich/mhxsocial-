import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  reducerPath: "UserApi",
  tagTypes: [
    "login",

  ],
  endpoints: (build) => ({
    Getlogin: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["login"],
    })
  }),
});

export const {
  useGetloginQuery,

} = UserApi;