import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Student } from '../models/student.model'


// Define a service using a base URL and expected endpoints
export const studentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://65392571e3b530c8d9e800ea.mockapi.io/',
  //  prepareHeaders: (headers) => {
  //     headers.set("Access-Control-Allow-Headers", "*");
  //   },

}),
tagTypes:["Student"],

  endpoints: (builder) => ({
    getStudents: builder.query<Student[],void>({
      query: () => `/crud1`,
      providesTags: ['Student'],
      transformResponse:(response:Student[],meta,args)=>{
       // return response.slice(0,4) 
       return response.sort((a,b)=>
        a.firstName.localeCompare(b.firstName)
       )
      }
    }),
    getStudent: builder.query<Student,string>({
      query: (id) => `/crud1/${id}`,
      providesTags: ['Student'],
    }),
    addStudent: builder.mutation<void,Student>({
      query: (student) =>({
        url:"/crud1",
        method:"POST",
        body:student
      }),
       invalidatesTags: ['Student'],
    }),
    deleteStudent: builder.mutation<void,string>({
      query: (id) =>({
        url:`/crud1/${id}`,
        method:"DELETE",
        }),
       invalidatesTags: ['Student'],
    }),
    updateStudent: builder.mutation<void, Student>({
      query: ({id,...rest}) => ({
        url: `/crud1/${id}`,
        method: "PUT",
        body: rest
      }),
      invalidatesTags: ['Student'],
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetStudentsQuery, 
  useAddStudentMutation,
  useDeleteStudentMutation,
  useGetStudentQuery,
  useUpdateStudentMutation

} = studentApi