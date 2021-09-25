import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost/8080/users",
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ()=> `/users`,
        })
    })
})

export const { useGetUsersQuery } = usersApi;