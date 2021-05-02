import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();
  const { isAuth, error } = useSelector((state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error,
  }));

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.length > 2 && password.length > 5) {
      dispatch(login(email, password));
      setErr(false);
    } else {
      setErr(true);
    }
  };

  //Редиректид на главную страницу если пользователь ввел все данные правильно
  if (isAuth) {
    return <Redirect to='/' />;
  }

  return (
    <div className='content'>
      <div className='container'>
        <div className='login'>
          <h3 className='login__title'>Войти в учетную запись Udemy</h3>
          <hr />
          <form action='' className='login__form' onSubmit={onSubmit}>
            <div className='login__login'>
              <input
                className={err || error ? 'input-form err' : 'input-form '}
                placeholder='Адрес электронной почты'
                type='text'
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className='login__password'>
              <input
                className={err || error ? 'input-form err' : 'input-form '}
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={handlePass}
              />
            </div>
            <button className='login__button'>Вход</button>
          </form>
          <p className='login__forgot'>
            или <Link to=''>Забыли пароль?</Link>
          </p>
          <p className='login__register'>
            Не зарегистрированы? <Link to='/register'>Регистрация</Link>
            <br />
            <Link to=''>Вход от имени организации</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
