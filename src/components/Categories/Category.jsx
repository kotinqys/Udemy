import React, { useState } from 'react';

function Category({ name, items }) {
  const [active, setActive] = useState(false);
  const onMouseOver = () => {
    //при наведение добавляет класс
    setActive(true);
  };
  const onMouseOut = () => {
    setActive(false);
  };
  return (
    <li className='dev__category' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <p className={active ? 'category__active' : ''}>{name}</p>
      <ul className='dev__subcategory'>
        {items && items.map((val, i) => <Category key={val + i} name={val} />)}
      </ul>
    </li>
  );
}

export default Category;
