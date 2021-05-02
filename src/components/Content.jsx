import React from 'react';
import Billboard from './Billboard/Billboard';
import Courses from './Courses/Courses';
import PopularCategory from './PopularCategory/PopularCategory';
import PopularCourses from './PopularCourses/PopularCourses';
import Sponsors from './Sponsors/Sponsors';
import Teacher from './Teacher/Teacher';
import UdemyInfo from './UdemyInfo/UdemyInfo';

function Content(props) {
  return (
    <div className='content'>
      <Billboard />
      <Courses />
      <UdemyInfo />
      <PopularCourses />
      <PopularCategory />
      <Teacher />
      <Sponsors />
    </div>
  );
}

export default Content;
