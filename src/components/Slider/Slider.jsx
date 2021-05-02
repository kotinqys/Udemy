import React from 'react';
import Cart from './Cart';
import Carousel from 'react-elastic-carousel';

function Slider(props) {
  return (
    <div className='slider'>
      <Carousel itemsToShow={5} itemPadding={[10, 10]}>
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
        <Cart
          img='https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg?secure=msoasgin-DQ6ZlSmhuXXFQ%3D%3D%2C1619770797'
          name='Полное руководство по Python 3'
          author='Dias Serikov'
          price='14'
          oldPrice='20'
          rating='4.6'
        />
      </Carousel>
    </div>
  );
}

export default Slider;
