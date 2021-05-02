import React from 'react';
import Slider from '../Slider/Slider';

function PopularCourses(props) {
  return (
    <div className='popular-courses'>
      <div className='container'>
        <h3>Студенты просматривают</h3>
        <Slider />
      </div>
    </div>
  );
}

export default PopularCourses;
