import React from 'react';
import author from '../../assets/author.jpg';
import Slider from '../Slider/Slider';

function Course(props) {
  return (
    <div className='course'>
      <div className='course__body'>
        <div className='course__about'>
          <h2>Расширьте свои возможности для карьеры в Python</h2>
          <p>
            Работая в сфере машинного обучения, финансов, веб-разработки или сбора и анализа данных,
            вам наверняка пригодятся навыки работы с Python. Простой синтаксис языка Python особенно
            хорошо подходит для настольных решений, а...
          </p>
          <button className='button'>Изучайте тему Python</button>
        </div>
        <div className='course__author'>
          <img src={author} alt='' />
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Course;
