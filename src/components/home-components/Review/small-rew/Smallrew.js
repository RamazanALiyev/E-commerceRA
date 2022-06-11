import React from 'react'
import '../small-rew/_smallrew.scss'
const Smallrew = ({background,device,countpro,gotoproduc}) => {
  return (
    <div className='small-rew' style={{ height: "342px",  width: "100%", marginBottom:"16px", backgroundImage: "url(" + background  + ")", backgroundPosition:" right bottom",backgroundRepeat:"no-repeat",backgroundColor : "#F2F2F2",borderRadius:"8px"}}>
      
      <div className="spans">
      <span>{device}</span>
      <span>{countpro}</span>
      <span>{gotoproduc}</span>
      </div>
    </div>
  )
}

export default Smallrew