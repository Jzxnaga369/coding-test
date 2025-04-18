import React from 'react';

const SkeletonCard = () => (
  <div className="card">
    <div className="image-content">
      <span className="overlay"></span>
      <div className="card-image skeleton-circle"></div>
    </div>
    <div className="card-content">
      <div className="skeleton-text skeleton-name"></div>
      <div className="description">
        <div className="skeleton-text skeleton-line"></div>
        <div className="skeleton-text skeleton-line"></div>
        <div className="skeleton-text skeleton-line"></div>
      </div>
    </div>
    <div className="button-content">
      <div className="skeleton-button"></div>
    </div>
  </div>
);

export default SkeletonCard;