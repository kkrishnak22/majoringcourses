import React from 'react';
import './SingleCourse.css';

export default function SingleCoursePage() {
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
            an empty string for decorative images img elements must have an
            alt prop, either with meaningful text, or an empty string for
            decorative images{' '}
          </p>
          <div>Price: $1400</div>
          <button>Buy Now</button>
        </div>
      </div>

      {/* // if course is bought then bottom section should be rendered. */}
      <div>
      <div >
      
      <h1>Course </h1>
      <video
        controls
        width="600"
        height="400"
        style={{ objectFit: 'cover' }}
        controlsList="nodownload"
        onContextMenu={(e) => e.preventDefault()} // Disable right-click
     
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    
    </div>
      </div>
</div>


    
  );
}
