import React, { useState } from 'react';
import Course from './Course';

function Courses() {
  const [active, setActive] = useState(null);
  const arr = [
    'Python',
    'Excel',
    'Веб-разработка',
    'JavaScript',
    'Обработка и анализ данных',
    'Сертификация AWS',
    'Рисование',
  ];

  return (
    <div className='courses'>
      <div className='container'>
        <div className='courses__title'>
          <h2>Самый большой выбор курсов в мире</h2>
          <p>
            Выбирайте из 130 000 онлайн-видеокурсов; новые курсы добавляются на сайт каждый месяц
          </p>
        </div>
        <div className='courses__body'>
          <div className='courses__names'>
            {arr &&
              arr.map((val, index) => (
                <h3 className={active === index ? 'active' : ''} onClick={() => setActive(index)}>
                  {val}
                </h3>
              ))}
          </div>
          <Course />
        </div>
      </div>
    </div>
  );
}

export default Courses;
