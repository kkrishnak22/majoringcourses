import React from "react";
import "./CourseGridCard.css";
import { Link } from "react-router-dom";
export default function CourseGridCard({course}) {
  const courseId = course.id ;
  
  return (
    <Link to={`/singleCourse/${courseId}`}>
      <div className="course-item-1">
        <div className="course-image-container">
          <img
            src={course.courseThumbnail}
            width="100%"
            height="100%"
          />
        </div>
        <div>{course.courseTitle} </div>
        <div>{course.coursePrice}</div>
      </div>
    </Link>
  );
}
