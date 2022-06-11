import React from 'react';
import Productanniversary from './Productanniversary';
import './_anniversary.scss';
import image from '../../../assets/images/phone.png';
import image3 from '../../../assets/images/phone2.png';
import { FaApple } from 'react-icons/fa';


const Anniversary = () => {
  return (
    <div className='Anniversary'>
      <div className='center'>
        <Productanniversary image={image} title1='iPhone 11 Rəngli. Güclü. Əsl sizə lazim olan.' title3='1519 AZN' ptext='Faizsiz taksitlə 127 AZN-dən' buttonlink='Indi alın'/>
        <Productanniversary bgColor='bgColor' alignItems='alignItems' fontWeight='fontWeight' fontSize='fontSize' image={image} image3={image3}
        title1='AirTag' appleicon={<FaApple />} title3='Əşyalarınızı tapmağın super asan yolu' ptext='79 AZN-dən*' buttonlink='Indi alın'
        />
      </div>
    </div>
  )
}

export default Anniversary