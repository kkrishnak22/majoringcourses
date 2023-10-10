import React,{useState,useEffect} from "react";
import Carousel from "nuka-carousel";

import "./home.css";

import Image from "../../assets/majoringicon.png";
import CourseGridCard from "../../components/Course/CourseGridCard";
import { getAllCourses,addCourse } from "../../features/courseSlice";
import { useDispatch,useSelector } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const { allCourses, isLoading } = useSelector((state) => state.data.allCourses);

  const [courseData, setCourseData] = useState([
    {
      id:1,
      courseThumbnail:"https://source.unsplash.com/DLwUVlzrP0Q",
      courseTitle:"HtML & CSS",
      coursePrice:"1200"
    },
    {
      id:2,
      courseThumbnail:"https://source.unsplash.com/DLwUVlzrP0Q",
      courseTitle:"React Js",
      coursePrice:"1200"
    },
    {
      id:3,
      courseThumbnail:"https://source.unsplash.com/DLwUVlzrP0Q",
      courseTitle:"HtML & CSS",
      coursePrice:"1200"
    },
    {
      id:4,
      courseThumbnail:"https://source.unsplash.com/DLwUVlzrP0Q",
      courseTitle:"HtML & CSS",
      coursePrice:"1200"
    },
    {
      id:5,
      courseThumbnail:"https://source.unsplash.com/DLwUVlzrP0Q",
      courseTitle:"HtML & CSS",
      coursePrice:"1200"
    },
  ])
  const allCoursesData = allCourses.map((course)=>{
    
    return <CourseGridCard key={course.id} course={course} />
  });

 
  useEffect(()=>{
  
   const courses =  dispatch(getAllCourses())
   
  },[dispatch])
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Carousel className="carausel">
        <div class="carousel-item-container">
          <div class="image-container">
            <img src="https://www.wallpaperup.com/uploads/wallpapers/2013/12/03/182679/efddea4ac7f19462dba4e5947e74a3d9-1000.jpg" />
          </div>
        
        </div>

        <div class="carousel-item-container">
          <div class="image-container">
            <img src="https://th.bing.com/th/id/R.0ff6420bc316e6629d77927708c8c47a?rik=NsJAFY3JnBdH%2bQ&riu=http%3a%2f%2fwww.drupak.com%2fsites%2fdefault%2ffiles%2f2021-01%2fHTML+and+CSS-04.jpg&ehk=CJnjiMXRI5tuk2XQo88t9%2bL3RyRopYU8HIBNMsSdEsI%3d&risl=&pid=ImgRaw&r=0"/>
          </div>
          
        </div>

        <div class="carousel-item-container">
          <div class="image-container">
            <img src="https://soject.com/wp-content/uploads/2021/02/EzgdmaCQuT84bgDL4fhXZS.jpg" />
          </div>
        
        </div>
      </Carousel>

      <div className="courses-grid-container">
       {allCoursesData}
  
       
      
      </div>
    </div>
  );
}
