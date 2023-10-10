import {createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import {  firestoreDB } from "../firebase";
import { getFirestore, collection, addDoc,setDoc,doc } from "firebase/firestore";

const initialState = {
    user: null,
    isLoading:true,
}



export const addUserToDB = createAsyncThunk('user/addUserToDB', async (userDetails, { dispatch }) => {
    console.log(userDetails)
    const userRef = collection(firestoreDB,"users")
    try {
        // console.log("hi from try")
        // await addDoc(userRef,userDetails)
        const docRef = doc(firestoreDB,"users",userDetails.uid)
        await setDoc(docRef,userDetails)
    } catch (error) {
      console.error('Error adding/updating user to DB:', error);
      throw error;
    }
  });
  
  // ... (other code)
  

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        loginUser: (state,action)=>{
            state.user = action.payload;

        },
        logOut:(state)=>{
            state.user=null;
        },
        setLoading: (state,action)=>{
            state.isLoading = action.payload
        },
        
       
    }
})

export const {loginUser,logOut,setLoading}  = userSlice.actions ;

export default userSlice.reducer;