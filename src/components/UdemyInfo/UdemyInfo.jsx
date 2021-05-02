import React from 'react';
import play from '../../assets/play.png';
import star from '../../assets/star.png';
import infinity from '../../assets/infinity.png';

function UdemyInfo(props) {
  return (
    <div className='udemy'>
      <hr />
      <div className='udemy__items'>
        <div className='udemy__item'>
          <img src={play} alt='' />
          <h3>Более 130 000 видеокурсов для развития личных навыков и карьерного роста</h3>
        </div>
        <div className='udemy__item'>
          <img src={star} alt='' />
          <h3>Выбирайте лучших преподавателей со всего мира</h3>
        </div>
        <div className='udemy__item'>
          <img src={infinity} alt='' />
          <h3>Учитесь в удобном темпе с помощью пожизненного доступа с мобильных устройств и ПК</h3>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default UdemyInfo;
