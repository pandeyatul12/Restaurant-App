import React from 'react';

const MenuCard = ({menuData}) => {
    return <>
    <div className='card-container'>
      <div className='card'>
        <div className='card-body'>
          <span className='card-number card-circle subtle'>1</span>
          <span className='card-author subtle'>Breakfast</span>
          <h2 className='card-title'>Maggi</h2>
          <span className='card-description'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Nam, excepturi rerum debitis eius qui quisquam.
          </span>
          <div className='card-read'>Read</div>
          <img src={image} alt='images' className='card-media' />
        </div>
      </div>
    </div>
    </>
  };

export default MenuCard;
