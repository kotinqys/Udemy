import React from 'react';

function Cart({ img, name, author, price, oldPrice, rating }) {
  return (
    <div className='cart'>
      <img src={img} alt='' />
      <h4 className='cart__name'>{name}</h4>
      <p className='cart__author'>{author}</p>
      <div className='cart__rating'>
        {rating}
        <div className='rating'>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star checked'></span>
          <span className='fa fa-star'></span>
        </div>
      </div>
      <p className='cart__price'>
        {price}$<span>{oldPrice}$</span>
      </p>
    </div>
  );
}

export default Cart;
