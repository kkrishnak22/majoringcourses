
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import './App.css';

import SingleCoursePage from './pages/courses/SingleCoursePage';
import HomeSharedLayout from './sharedlayout/HomeSharedLayout';

function App() {
  return (
    <div className="App">
     
      
      <Routes>
        <Route path='/' element={<HomeSharedLayout/>} >
          <Route index element={<Home/>}/>
          <Route path='singleCourse' element={<SingleCoursePage/>}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
