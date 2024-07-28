import React from 'react';
import './ComputerWarrantyPage.scss';

import GoogleIcon from '../../assets/google-icon.png';

const ReviewCard = ({ avatarColor, name, date, content }) => {
  return (
    <div className="google-review-card">
      <div className="google-review-card-header">
        <div 
          className="google-review-card-avatar"
          style={{ backgroundColor: avatarColor }}
        >
          {name.charAt(0)}
        </div>
        <div className="google-review-card-info">
          <div className="google-review-card-name-container">
            <h3 className="google-review-card-name">{name}</h3>
            <img src={GoogleIcon} alt="Avatar" className="google-review-card-avatar-img" />
          </div>
          <div className="google-review-card-rating-container">
            <div className="google-review-card-rating">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="google-review-card-date">{date}</span>
          </div>
        </div>
      </div>
      <p className="google-review-card-content">{content}</p>
      <a href="#" className="google-review-card-link">Read More »</a>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="google-reviews">
      <ReviewCard
        avatarColor="#a1a1aa"
        name="Chris Schmidt"
        date="a week ago"
        content="I am amazed by the friendly service and lightning fast repair done by NY Computer Help. My charging port on my laptop was not..."
      />
      <ReviewCard
        avatarColor="#ec4899"
        name="Rebecca Zagorsky"
        date="a month ago"
        content="I’d give six stars if I could - the professionals at New York Computer Help were incredible both in knowledge/expertise and in customer service. They..."
      />
      <ReviewCard
        avatarColor="#f96000"
        name="Richard Kim"
        date="2 months ago"
        content="I got the “CRITICAL PROCESS DIED” message on my desktop computer and it was completely dead and I personally couldn’t do anything to fix..."
      />
    </div>
  );
};

export default Reviews;
