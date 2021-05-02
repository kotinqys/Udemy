import React from 'react';
import earth from '../assets/earth.png';
import upArrow from '../assets/up-arrow.png';
import logo from '../assets/logo-coral.svg';

function Footer(props) {
  return (
    <footer className='footer'>
      <hr />
      <div className='footer__about'>
        <div className='footer__body'>
          <div className='footer__item'>
            <a href='/'>Udemy for Business</a>
            <a href='/'>Преподавайте на Udemy</a>
            <a href='/'>Скачать приложение</a>
            <a href='/'>О нас</a>
            <a href='/'>Наши координаты</a>
          </div>
          <div className='footer__item'>
            <a href='/'>Карьера</a>
            <a href='/'>Блог</a>
            <a href='/'>Справка и поддержки</a>
            <a href='/'>Партнеры</a>
          </div>
          <div className='footer__item'>
            <a href='/'>Условия пользования</a>
            <a href='/'>Политика конфедециальности</a>
            <a href='/'>Карта сайта</a>
            <a href='/'>Рекомендуемые курсы</a>
          </div>
        </div>
        <div className='footer__language'>
          <button className='button'>
            <img src={earth} alt='' />
            Русский
            <img src={upArrow} alt='' />
          </button>
        </div>
      </div>
      <div className='footer__end'>
        <img src={logo} alt='' />
        <div>© 2021 Udemy, Inc.</div>
      </div>
    </footer>
  );
}

export default Footer;
