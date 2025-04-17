import React from 'react';

export default function SliderComponent() {
  return (
    <div className='slide-container'>
      <div className="slide-contain">
        <div className='card-wrapper'>
          <div className='card'>
            <div className='image-content'>
              <span className='overlay'></span>
                <img src='images/profile.jpg' alt='' className='card-img'>
                </img>
            </div>
            <div className='card-content'>
              <h2 className='name'>Test Name</h2>
              <p className='description'>
                lorem ipsum cyka
              </p>
              <div className='button'>sales info</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}