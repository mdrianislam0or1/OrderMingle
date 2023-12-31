import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://order-mingle.vercel.app/api",
  }),
  tagTypes: ["Users", "User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      keepUnusedDataFor: 600,
      providesTags: ["users"],
    }),
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    getOrder: builder.query({
      query: (userId) => `/users/${userId}/orders`,
      providesTags: (result, error, arg) => [{ type: "Order", id: arg }],
    }),
    getCalculateOrder: builder.query({
      query: (userId) => `/users/${userId}/orders/total-price`,
      providesTags: (result, error, arg) => [{ type: "Calculate", id: arg }],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Users"],
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
    editUser: builder.mutation({
      query: ({ userId, user }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: (result, error, arg) => [
        "Users",
        { type: "User", id: arg.id },
        { type: "RelatedUsers", id: arg.id },
      ],
    }),
    addNewOrder: builder.mutation({
      query: ({ userId, order }) => ({
        url: `/users/${userId}/orders`,
        method: "PUT",
        body: order,
      }),
      invalidatesTags: (result, error, arg) => [
        "Users",
        { type: "User", id: arg.id },
        { type: "RelatedUsers", id: arg.id },
      ],
    }),
    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Videos",
        { type: "Video", id: arg.id },
        { type: "RelatedVideos", id: arg.id },
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useGetVideoQuery,
  useGetOrderQuery,
  useGetCalculateOrderQuery,
  useGetRelatedVideosQuery,
  useAddUserMutation,
  useAddNewOrderMutation,
  useAddVideoMutation,
  useEditUserMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = apiSlice;
