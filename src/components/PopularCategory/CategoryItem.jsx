import React from 'react';
import SubCategory from './SubCategory';

function CategoryItem({ title, items }) {
  return (
    <div className='featured-category__item'>
      <h4>{title}</h4>
      {items &&
        items.map((val) => (
          <SubCategory key={val.name + val.count} name={val.name} count={val.count} />
        ))}
    </div>
  );
}

export default CategoryItem;
