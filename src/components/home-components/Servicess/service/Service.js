import React from 'react'
import '../service/_service.scss'

const Service = ({img,text,title}) => {
  return (
    <div className='service'>
      <div className="pad">
      <img src={img} alt="logo" />
      <span>{title}</span>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default Service