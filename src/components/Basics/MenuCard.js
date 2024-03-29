import React from 'react';

const MenuCard = ({menuData}) => {
    return (<>
    <section className='main-card--container'>
      {menuData.map((curElem) => {
        const {id, name, category, image, description} = curElem;

        return (
          <>
          <div className='card-container' key={id}>
            <div className='card'>
              <div className='card-body'>
                <span className='card-number card-circle subtle'>{id}</span>
                <span className='card-author subtle'>{category}</span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description'>
                {description}
                </span>
              <div className='card-read'>Read</div>
            <img src={image} alt='images' />
          </div>
      </div>
    </div>
    </>
        );
      })}
    </section>
    </>
    )};

export default MenuCard;
