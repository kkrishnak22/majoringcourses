import React, { useState } from "react";
import "./SingleCourse.css";
import CourseVideo from "../../components/Course/CourseVideo";

export default function SingleCoursePage() {
  const [boughtCourse, setBoughtCourse] = useState(false);
  async function handleBuy(){
    setBoughtCourse(!boughtCourse)
  }
  return (
    <div>
      <div className="banner-container">
        <img
          src="https://techflas.com/wp-content/uploads/2022/06/react-course-2.jpg"
          alt="React Course"
        />
        <div className="banner-details">
          <h1>React Crash Course</h1>
          <p>
            img elements must have an alt prop, either with meaningful text, or
            an empty string for decorative images img elements must have an alt
            prop, either with meaningful text, or an empty string for decorative
            images{" "}
          </p>
          <div>Price: $1400</div>
          <button onClick={handleBuy} >Buy Now</button>
          {boughtCourse &&<a href="#course-video-section">Watch Course</a>}
        </div>
      </div>

      {/* // if course is bought then bottom section should be rendered. */}
      {boughtCourse && (
        <div id="course-video-section">
          <h1>Course </h1>
          <CourseVideo />
        </div>
      )}
    </div>
  );
}
