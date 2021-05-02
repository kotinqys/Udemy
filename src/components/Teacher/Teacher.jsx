import React from 'react';

function Teacher(props) {
  return (
    <div className='teacher'>
      <div className='teacher__wrapper'>
        <div className='teacher__body'>
          <div className='container'>
            <img
              src='https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg'
              alt=''
            />
            <div className='teacher__about'>
              <h2>Станьте преподавателем</h2>
              <p>
                Лучшие преподаватели со всего мира обучают миллионы студентов на Udemy. Мы даем вам
                средства преподавать то, что вы любите.
              </p>
              <button className='button button__active'>Начните преподовать сегодня</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
