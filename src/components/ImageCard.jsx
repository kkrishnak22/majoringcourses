import React from 'react';
import './coursecard.css';

export default function ImageCard({ imageSrc, title, author }) {
  return (
    <div className="image-card">
      <div className="image-container">
        <img src="https://source.unsplash.com/DLwUVlzrP0Q" alt="k" />
       </div>
      <div className="details">
        <p>lorem1-0 lorem1  lorem10   </p>
        
      </div>
    </div>
  );
}
