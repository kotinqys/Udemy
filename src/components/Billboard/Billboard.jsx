import React from 'react';

function Billboard(props) {
  return (
    <div className='billboard'>
      <div className='container'>
        <img
          src='https://img-a.udemycdn.com/notices/home_banner/image_udlite/f224fc00-dea7-4a37-b1c1-5a451c2fa23c.jpg?sZgXla_IxNAnZeyNSc16fm5nKt41j1qANwKu_oGrLOD5aDRK92vcpwjnrQrf2kpWCmaTgSrPLysw-3C9s67nhEJR7TRtmdjWupFQRVPPxKZHS_VQe07HbT_V8QtHSpk9rQ6R6n2N5XscXl73N42ED3tSAnFzo_7h101eRZ0KaBi_3hbpYglRQA'
          alt=''
        />
        <div className='billboard__content-box'>
          <h1>Учитесь в собственном темпе</h1>
          <p>
            Изучайте любые темы в любое время. Мы предлагаем тысячи курсов по цене от 13,99 $ за
            каждый.
          </p>
          <div className='billboard__search'>
            <form action=''>
              <input type='text' />
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
