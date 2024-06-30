import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://contact-api.mmsdev.site/api/v1` }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    contact : builder.query({
      query : (token) => ({
        url :  "/contact",
        headers : {authorization : `Bearer ${token}`}
      }),
      providesTags : ["contact"]
    }),
    create : builder.mutation({
        query : ({token,contact}) => ({
          url :  "/contact",
          method : "POST",
        headers : {authorization : `Bearer ${token}`},
          body : contact
        }),
        invalidatesTags : ["contact"]
      }) 
  }),
});

export const { useContactQuery,useCreateMutation } = contactApi;
