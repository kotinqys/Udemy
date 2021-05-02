import React from 'react';

function Sponsors(props) {
  return (
    <div className='sponsors'>
      <hr />
      <div className='container'>
        <div className='sponsors__body'>
          <h3>Нам доверяют многие</h3>
          <div className='sponsors__items'>
            <img src='https://s.udemycdn.com/partner-logos/booking-logo.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/volkswagen-logo.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/mercedes-logo-v2.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/adidas-logo.svg' alt='' />
            <img src='https://s.udemycdn.com/partner-logos/eventbrite-logo.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
