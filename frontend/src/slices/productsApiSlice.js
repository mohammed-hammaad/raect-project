import {
  PRODUCTS_URL,
  MEDICINEDETAILS_URL,
  CATEGORYDETAILS_URL,
  CATEGORY_URL,
} from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: PRODUCTS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    // getProductDetails: builder.query({
    //   query: (medicineName) => ({
    //     url: `${PRODUCTS_URL}/${medicineName}`,
    //   }),
    //   keepUnusedDataFor: 5,
    // }),

    getCategoryDetails: builder.query({
      query: (categoryName) => ({
        url: `${CATEGORYDETAILS_URL}/${categoryName}`,
      }),
      keepUnusedDataFor: 5,
    }),
    // getCategoryName: builder.query({
    //   query: ({ catName }) => ({
    //     url: CATEGORY_URL,
    //     params: { catName },
    //   }),
    //   keepUnusedDataFor: 5,
    // }),

    getMedicineDetails: builder.query({
      query: (medicineName) => ({
        url: `${MEDICINEDETAILS_URL}/${medicineName}`,
      }),
      keepUnusedDataFor: 5,
    }),

    createProduct: builder.mutation({
      query: () => ({
        url: `${PRODUCTS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.medicineName}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Products'],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: `/api/upload`,
        method: 'POST',
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
      }),
      providesTags: ['Product'],
    }),
    createReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.medicineName}/reviews`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
    getTopProducts: builder.query({
      query: () => `${PRODUCTS_URL}/top`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoryNameQuery,
  useGetCategoryDetailsQuery,
  useGetMedicineDetailsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productsApiSlice;
