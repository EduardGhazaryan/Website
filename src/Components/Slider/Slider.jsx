import React from 'react'
import s from './slider.module.css'
import { Carousel } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import video from './img-vid/video.mp4'
import building from './img-vid/building.svg'
import img from './img-vid/1674483783.jpg'
import bg from '../Footer/img/background.svg'

const Slider = () => {
  return (
    <div className={s.slider}>
        <Carousel>
      
        <Carousel.Item>
          <div className="d-block w-100 info"
          alt="First slide" style={{backgroundImage: `url(${bg})`}}>
            <h1>ՀՀ ՏԱՐԱԾՔԱՅԻՆ ԿԱՌԱՎԱՐՄԱՆ ԵՎ ԵՆԹԱԿԱՌՈՒՑՎԱԾՔՆԵՐԻ ՆԱԽԱՐԱՐԻ ՈՒՂԵՐՁԸ</h1>
            <img src={img} className={s.img}/>
            <span className={s.firstSpan}>Հարգելի բարեկամ</span>
            <div>
              
              <p>
                  <span>
                  Տարածքային կառավարման և ենթակառուցվածքների նախարարությունը գործադիր իշխանության հանրապետական մարմին է, որը մշակում և իրականացնում է տարածքային կառավարման և ենթակառուցվածքների, տարածքային կառավարման և տեղական ինքնակառավարման մարմինների գործունեության արդյունավետության բարձրացման, Երևանում տարածքային կառավարման ապահովման, մարզերի և համայնքների համաչափ զարգացմանն ուղղված ծրագրերի մշակման, վարչատարածքային արդյունավետ բաժանման, տրանսպորտի, քաղաքացիական ավիացիայի բնագավառներում
                  </span>
                  <span>
                  լիցենզավորման և թույլտվությունների տրամադրման, Հայաստանի Հանրապետությունում միասնական երթուղային ցանցի ձևավորման, էներգետիկայի, ընդերքօգտագործման և ընդերքի պահպանության, Հայաստանի Հանրապետության էներգետիկ անկախության, ընդերքի ողջամիտ ու համալիր օգտագործմանը նպաստելուն ուղղված, պետական սեփականություն հանդիսացող ջրային համակարգերի կառավարման և անվտանգ օգտագործման, պետական գույքի կառավարման, միգրացիայի ոլորտներում Կառավարության քաղաքականությունը:
                  </span>
                   &nbsp;
              </p>

              <p></p>

              <p>
                <span>
                Հավատարիմ մնալով տեղեկատվության, հրապարակայնության, թափանցիկության և մատչելիության ապահովման սկզբունքին՝ մենք նպատակ ունենք ամենօրյա հաճախականությամբ Ձեզ հաղորդակից և մասնակից դարձնել նախարարության կողմից իրականացվող լայնամասշտաբ ծրագրերին, միջոցառումներին և բարեփոխումներին։ 
                </span>
               &nbsp; &nbsp; &nbsp;
              </p>
            </div>
            <span className={s.secondSpan}>Հարգանքով՝ Գնել Սանոսյան</span>
          </div>
         
          
        </Carousel.Item>
        
        <Carousel.Item>
          <video src={video} controls  alt="Second slide" className="d-block w-100 video"></video>
          <Carousel.Caption>
            <p className={s.title}>«Գազ՝ էլեկտրաէներգիայի դիմաց» պայմանագիրը երկարաձգվել է մինչև 2030 թվականը</p>
          </Carousel.Caption>
        </Carousel.Item>
      
    </Carousel>
    </div>
  )
}

export default Slider