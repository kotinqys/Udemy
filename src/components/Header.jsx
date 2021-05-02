import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-coral.svg';
import { logout } from '../redux/actions/auth';
import Categories from './Categories/Categories';

function Header() {
  const { isAuth, fullname } = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    fullname: state.auth.fullname,
  }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <header className='header'>
      <div className='header__body'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='' />
        </Link>
        <Categories />
        <div className='header__search'>
          <form action=''>
            <button>
              <svg
                fill='#73726c'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 48 48'
                width='24px'
                height='24px'>
                <path d='M 20.5 6 C 12.515556 6 6 12.515562 6 20.5 C 6 28.484438 12.515556 35 20.5 35 C 23.773158 35 26.788919 33.893018 29.220703 32.050781 L 38.585938 41.414062 A 2.0002 2.0002 0 1 0 41.414062 38.585938 L 32.050781 29.220703 C 33.893017 26.788918 35 23.773156 35 20.5 C 35 12.515562 28.484444 6 20.5 6 z M 20.5 10 C 26.322685 10 31 14.677319 31 20.5 C 31 23.295711 29.914065 25.820601 28.148438 27.697266 A 2.0002 2.0002 0 0 0 27.701172 28.144531 C 25.824103 29.912403 23.29771 31 20.5 31 C 14.677315 31 10 26.322681 10 20.5 C 10 14.677319 14.677315 10 20.5 10 z' />
              </svg>
            </button>
            <input type='text' placeholder='Ищите что угодно' />
          </form>
        </div>
        <div className='header__teach'>
          <span>Преподавайте на Udemy</span>
        </div>
        {isAuth && (
          <div className='header__teach'>
            <span>Мое обучение</span>
          </div>
        )}
        <div className='header__cart'>
          <svg
            id='Layer_1'
            fill='#73726c'
            height='24'
            viewBox='0 0 511.343 511.343'
            width='24'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='m490.334 106.668h-399.808l-5.943-66.207c-.972-10.827-10.046-19.123-20.916-19.123h-42.667c-11.598 0-21 9.402-21 21s9.402 21 21 21h23.468c12.825 142.882-20.321-226.415 24.153 269.089 1.714 19.394 12.193 40.439 30.245 54.739-32.547 41.564-2.809 102.839 50.134 102.839 43.942 0 74.935-43.826 59.866-85.334h114.936c-15.05 41.455 15.876 85.334 59.866 85.334 35.106 0 63.667-28.561 63.667-63.667s-28.561-63.667-63.667-63.667h-234.526c-15.952 0-29.853-9.624-35.853-23.646l335.608-19.724c9.162-.538 16.914-6.966 19.141-15.87l42.67-170.67c3.308-13.234-6.71-26.093-20.374-26.093zm-341.334 341.337c-11.946 0-21.666-9.72-21.666-21.667s9.72-21.667 21.666-21.667c11.947 0 21.667 9.72 21.667 21.667s-9.72 21.667-21.667 21.667zm234.667 0c-11.947 0-21.667-9.72-21.667-21.667s9.72-21.667 21.667-21.667 21.667 9.72 21.667 21.667-9.72 21.667-21.667 21.667zm47.366-169.726-323.397 19.005-13.34-148.617h369.142z' />
          </svg>
        </div>
        <div className='header__buttons'>
          {isAuth ? (
            <div className='profile'>
              {fullname}
              <div className='logout' onClick={onLogout}>
                <p>Выйти</p>
              </div>
            </div>
          ) : (
            <>
              <Link to='/login' className='button'>
                Войти
              </Link>
              <Link to='/register' className=' button button__active'>
                Регистрация
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
