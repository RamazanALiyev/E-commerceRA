import React from 'react';
import './_productanniversary.scss';

function Productanniversary({ image, image3, title1, title3, ptext, buttonlink, bgColor, alignItems, fontWeight, fontSize, appleicon }) {
  return (
    <div className={bgColor ? 'Productanniversary bgColor' : 'Productanniversary'}>
        <div className={alignItems ? 'leftinfoanniversary alignItems' : 'leftinfoanniversary'}>
            <h1 className={fontWeight}>{appleicon}{title1}</h1>
            <h3 className={fontSize}>{title3}</h3>
            <p>{ptext}</p>
            <button>{buttonlink}</button>
        </div>
        <div className='productimganniversary'>
            <img src={image} alt='pic' />
            {image3 ? <img src={image3} alt='pic' /> : null}
        </div>
    </div>
  )
}
export default Productanniversary