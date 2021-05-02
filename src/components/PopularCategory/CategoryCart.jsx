import React from 'react';

function CategoryCart({ img, text }) {
  return (
    <div className='category'>
      <img src={img} alt='' />
      <h4>{text}</h4>
    </div>
  );
}

export default CategoryCart;
