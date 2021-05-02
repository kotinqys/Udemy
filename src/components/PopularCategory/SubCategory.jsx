import React from 'react';

function SubCategory({ name, count }) {
  return (
    <div className='subcategory'>
      <h4 className='subcategory__title'>{name}</h4>
      <p>Студентов: {count}</p>
    </div>
  );
}

export default SubCategory;
