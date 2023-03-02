import React from 'react'

function Feature({ icon, title }) {
  return (
    <div className="feature">
        {/* icon */}
        <div className="icon">
            <img src={require(`../img/${icon}.png`)} alt="" className="w-40"/>
        </div>

        <span className='mt-10 font-semibold'>{title}</span>
    </div>
  )
}
 
export default Feature