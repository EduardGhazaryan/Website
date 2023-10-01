import React from 'react'
import s from './haytararutyun.module.css'
import img from './photo_5226452854355645953_y.jpg'

const Haytararutyun = () => {
  return (
    <div className={s.main}>
        <img src={img} alt="" />
        <div>
            <h1>This website is created by us</h1>
        </div>
    </div>
  )
}

export default Haytararutyun