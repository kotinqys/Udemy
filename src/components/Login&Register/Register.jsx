import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../redux/actions/auth';

function Register(props) {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fullname.length > 2 && email.length > 5 && password.length > 5) {
      dispatch(register(fullname, email, password));
      setErr(false);
      setRedirect(true);
    } else {
      setErr(true);
    }
  };

  if (redirect) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='content'>
      <div className='container'>
        <div className='login'>
          <h3 className='login__title'>
            Зарегистрируйтесь и начните <br />
            обучение!
          </h3>
          <hr />
          <form action='' className='login__form' onSubmit={onSubmit}>
            <div className='login__name'>
              <input
                className={err ? 'input-form err' : 'input-form '}
                placeholder='Полное имя'
                type='text'
                value={fullname}
                onChange={handleFullName}
              />
            </div>
            <div className='login__login'>
              <input
                className={err ? 'input-form err' : 'input-form '}
                placeholder='Адрес электронной почты'
                type='text'
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className='login__password'>
              <input
                className={err ? 'input-form err' : 'input-form '}
                type='password'
                placeholder='Пароль'
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className='login__checkbox'>
              <input type='checkbox' />
              <p>
                Да, я хочу использовать Udemy максимально эффективно: получать рассылки с
                эксклюзивными предложениями, персональными рекомендациями и советами по обучению!
              </p>
            </div>
            <button className='login__button'>Зарегистрироваться</button>
          </form>
          <p className='login__forgot reg'>
            Зарегистрировавшись, вы принимаете наши
            <Link to=''>Условия использования и Политику конфиденциальности.</Link>
          </p>
          <hr />
          <p className='login__register'>
            Уже зарегистрировались?<Link to='/login'> Вход</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
