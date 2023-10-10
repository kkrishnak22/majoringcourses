// import {createSlice,createAsyncThunk } from "@reduxjs/toolkit"
// import {  firestoreDB } from "../firebase";
// import { getFirestore, collection, addDoc,setDoc,doc,getDocs,query,where } from "firebase/firestore";

// const initialState = {
//     allCourses: null,
//     isLoading:true,
// }
// export const getAllCourses = createAsyncThunk('allCourses/getAllCourses', async ({ dispatch }) => {
//    console.log("in get courses")
    
//     try {
//         const q = query(collection(firestoreDB, "allCourses"));

//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc)=>{
//             console.log(doc.id,doc.data())
//         })
//         // const docRef = doc(firestoreDB,"users",userDetails.uid)
//         // await setDoc(docRef,userDetails)
//     } catch (error) {
//       console.error('Error adding/updating user to DB:', error);
//       throw error;
//     }
//   });




// export const courseSlice = createSlice({
//     name:"allCourses",
//     initialState,
//     reducers:{
//         addCourse: (state,action)=>{
            
//             console.log("working")
//         },
//         getCourseByID: (state,action)=>{
          
//         },
       
       
//     }
// })

// export const {addCourse,getCourseByID}  = courseSlice.actions ;

// export default courseSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreDB } from '../firebase'; // Update the path

const initialState = {
  allCourses: null,
  isLoading: true,
};

export const getAllCourses = createAsyncThunk('allCourses/getAllCourses', async (_, { rejectWithValue }) => {
  try {
    console.log("get corses runed")
    const q = query(collection(firestoreDB, "allCourses" ));
    const querySnapshot = await getDocs(q);

    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push({
        id: doc.id,
        ...doc.data(),
      });
    });
  
    return courses;
  } catch (error) {
    console.error('Error fetching courses from DB:', error);
    return rejectWithValue(error.message); // You can handle the error in your component
  }
});

export const courseSlice = createSlice({
  name: "allCourses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      console.log("working");
    },
    getCourseByID: (state, action) => {
      // Handle getting a course by ID
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allCourses = action.payload;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.isLoading = false;
        console.error('Error fetching courses:', action.payload);
      });
  },
});

export const { addCourse, getCourseByID } = courseSlice.actions;

export default courseSlice.reducer;
