
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import './App.css';

import SingleCoursePage from './pages/courses/SingleCoursePage';
import HomeSharedLayout from './sharedlayout/HomeSharedLayout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useDispatch, useSelector } from 'react-redux';
import {loginUser, setLoading} from "./features/userSlice"
import { useEffect } from 'react';
import { auth } from './firebase';
import Loading from './components/loading/loading';
function App() {
  const user = useSelector((state)=>state.data.user.user);
  const isLoading = useSelector((state)=>state.data.user.isLoading);
  const dispatch = useDispatch();
  useEffect(()=>{
    
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch(loginUser({
          uid: authUser.uid,
          name:authUser.firstName,
          email : authUser.email,

        }))
        dispatch(setLoading(false))
      }else{
        console.log("user not logged in")
      }
    })
  },[])
  console.log(user)
  return (
    <div className="App">
     {isLoading && (
       <Loading/>
      )}
      
      <Routes>
          

      {
        user && (
          <Route path='/' element={<HomeSharedLayout/>} >
            <Route index element={<Home/>}/>
            <Route path='singleCourse/:id' element={<SingleCoursePage/>}/>
          </Route>)
      }
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
