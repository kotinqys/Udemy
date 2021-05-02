import React from 'react';
import CategoryCart from './CategoryCart';
import CategoryItem from './CategoryItem';

function PopularCategory(props) {
  return (
    <>
      <div className='popular-category'>
        <div className='container'>
          <h3>Популярные категории</h3>
          <div className='popular-category__items'>
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg'
              text='Дизайн'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg'
              text='Разработка'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg'
              text='Маркетинг'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg'
              text='ИТ и ПО'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg'
              text='Личностный рост'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg'
              text='Бизнес'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg'
              text='Фотография'
            />
            <CategoryCart
              img='https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg'
              text='Музыка'
            />
          </div>
        </div>
      </div>
      <div className='featured-category'>
        <div className='container'>
          <h3>Featured topics by category</h3>
          <div className='featured-category__items'>
            <CategoryItem
              title='Разработка'
              items={[
                { name: 'Python', count: '26 500 000' },
                { name: 'Веб-разработка', count: '66 500 000' },
                { name: 'Машинное обучени', count: '6 500 000' },
              ]}
            />
            <CategoryItem
              title='Бизнес'
              items={[
                { name: 'Финансовый анализ', count: '2 600 000' },
                { name: 'SQL', count: '6 500 000' },
                { name: 'PMP', count: '500 000' },
              ]}
            />
            <CategoryItem
              title='ИТ и ПО'
              items={[
                { name: 'Сертификация AWS', count: '2 500 000' },
                { name: 'Этичный хакинг', count: '700 000' },
                { name: 'Кибербезопасность', count: '2 900 000' },
              ]}
            />
            <CategoryItem
              title='Дизайн'
              items={[
                { name: 'Photoshop', count: '9 500 000' },
                { name: 'Графический дизайн', count: '2 500 000' },
                { name: 'Рисование', count: '2 500 000' },
              ]}
            />
          </div>
          <button className='button button__active'>Explore more</button>
        </div>
      </div>
    </>
  );
}

export default PopularCategory;
