import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/'}),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'register/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    Loginphonenumber: builder.mutation({
      query: (user) => {
        return {
          url: 'login2/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: 'profile/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    
    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'changepassword/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: 'send-reset-password-email/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),

    table: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'view/register_v/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    LocationInfoBox: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: 'view/booking/',
          method: 'POST',
          body: actualData,
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    getTableUser: builder.query({
      query: (access_token) => {
        return {
          url: 'view/register_v/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    getCity: builder.query({
      query: (access_token) => {
        return {
          url: 'view/map/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),


    getState: builder.query({
      query: (access_token ) => {
        return {
          url: `view/map/rajasthan/`,
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`, 
           
          }
        }
      }
    }),


    getAddress: builder.query({
      query: (access_token) => {
        return {
          url: `view/map/jaipur/`,
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
  
    getParkingplace: builder.query({
      query: (access_token) => {
        return {
          url:"view/map/rajasthan/jaipur/ajmeri gate/",
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),

    getViewbooking: builder.query({
      query: (access_token) => {
        console.warn("agvyevgudedghdedvhuedvhjcedhjvdebhjdugyfedue"+access_token)
        return {
          url: 'view/booking/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
    getPlatenumber: builder.query({
      query: (access_token) => {
        return {
          url: 'view/register_v/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),


    tab: builder.mutation({
      query: (id) => {
      //  console.log("Deletffffffffffffffffffffe ID:", id)
       return {
        url: `view/register_v/${id}/`,
        method: 'DELETE',
       }
      }
     }),

     updatePost: builder.mutation({
      query: (updatePostData) => {
       console.log("Update Post: ", updatePostData)
       const { id, ...data } = updatePostData
       console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyy ", updatePostData)
       return {
        url: `/view/register_v/${id}`,
        method: 'PUT',
        body: data,
        headers: {
         'Content-type': 'application/json; charset=UTF-8',
        }
       }
      }
     }),

    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        console.warn("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", id)
        return {
          url: `/reset-password/${id}/${token}/`,
          method: 'POST',
          body: actualData,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
   }),

  
})

export const {useUpdatePostMutation, useTabMutation, useRegisterUserMutation,useLocationInfoBoxMutation,useTableMutation,useGetPlatenumberQuery,useGetParkingplaceQuery,useGetViewbookingQuery,useGetCityQuery,useGetAddressQuery  ,useGetStateQuery,useGetTableUserQuery,useLoginphonenumberMutation, useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation, useSendPasswordResetEmailMutation, useResetPasswordMutation} = userAuthApi