import React from 'react'

export default function CourseVideo() {
  return (
    <div>
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
  )
}
