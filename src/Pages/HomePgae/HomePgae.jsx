import React from 'react'
import s from './homePage.module.css'
import Slider from '../../Components/Slider/Slider'
import News from '../../Components/News/News'
import Programs from '../../Components/Programs/Programs'
import Map from '../../Components/Map/Map'
import MainNews from '../../Components/MainNews/MainNews'
import Footer from '../../Components/Footer/Footer'

const HomePgae = () => {
  return (
    <div className={s.mainDiv}>
        <div className={s.top}>
            <Slider/>
            <News/>
        </div>
        <div className={s.middle}>
          <Programs/>
          <Map/>
          <MainNews/>
        </div>
        <div className={s.bottom}>
          <Footer/>
        </div>


    </div>
  )
}

export default HomePgae