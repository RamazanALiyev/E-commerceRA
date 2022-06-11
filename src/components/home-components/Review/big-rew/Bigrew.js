import React from 'react'
import '../big-rew/_bigrew.scss'
const Bigrew = ({background,device,countpro,gotoproduc}) => {
  return (
    <div style={{ height: "700px",width: "50%",border: "1px solid #F2F2F2", backgroundImage: "url(" + background  + ")", backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor : "#F2F2F2",borderRadius:"8px"}} className='big-rew'>
      <div className="spans">
      <span>{device}</span>
      <span>{countpro}</span>
      <span>{gotoproduc}</span>
      </div>
     
    </div>
  )
}

export default Bigrew