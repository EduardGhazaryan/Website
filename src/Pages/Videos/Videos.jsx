import React from 'react'
import s from './videos.module.css'
import facebook from './images/facebook.jpg'
import one from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'
import five from './images/5.jpg'
import Footer from '../../Components/Footer/Footer'

const Videos = () => {
  return (
    <div className={s.main}>
        <div className={s.media}>
        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>Լայնածավալ ճանապարհաշինություն Կոտայքում. այս տարի մարզում կնորոգվի մոտ 70 կմ ճանապարհ</p>
        </div>

        <div className={s.mediaItem}>
            <img src={one} alt="" />
            <p>Լայնածավալ ճանապարհաշինություն Կոտայքում. այս տարի մարզում կնորոգվի մոտ 70 կմ ճանապարհ</p>
        </div>

        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>Լայնածավալ ճանապարհաշինություն Կոտայքում. այս տարի մարզում կնորոգվի մոտ 70 կմ ճանապարհ</p>
        </div>

        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>Սյունիքում 2022-ին մոտ 170 կմ ճանապարհ է կառուցում պետությունը. լայնածավալ աշխատանքներ են ընթանում</p>
        </div>

        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>Սյունիքում 2022-ին մոտ 170 կմ ճանապարհ է կառուցում պետությունը</p>
        </div>
        
        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>Պետական աջակցություն՝ էներգաարդյունավետ նորոգման համար</p>
        </div>

        <div className={s.mediaItem}>
            <img src={two} alt="" />
            <p>Բնակարանների և անհատական բնակելի տների էներգաարդյունավետ վերանորոգման աշխատանքների պետական աջակցության ծրագիր</p>
        </div>

        <div className={s.mediaItem}>
            <img src={two} alt="" />
            <p>Բնակարանների և անհատական բնակելի տների էներգաարդյունավետ վերանորոգման աշխատանքների պետական աջակցության ծրագիր</p>
        </div>

        <div className={s.mediaItem}>
            <img src={three} alt="" />
            <p>Օգոստոսի 1-ից ձեր տրանսպորտային միջոցների վրա տեղադրված գազաբալոնները չեն լիցքավորվի, եթե գազաբալոնը տեղադրված կամ վկայագրված չէ լիցենզավորված կազմակերպության կողմից</p>
        </div>

        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>ՏԿԵ նախարար Գնել Սանոսյանի հարցազրույցը՝ Պետրոս Ղազարյանին</p>
        </div>

        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>2022-ի ընթացքում կատարվել է 381.4 կմ ճանապարհի շինաշխատանք, ևս 155 կմ-ի էլ կիրականացվի մինչև տարեվերջ</p>
        </div>

        <div className={s.mediaItem}>
            <img src={facebook} alt="" />
            <p>Սյունիքում այս տարի կառուցվում, նորոգվում է մոտ 230 կիլոմետր ճանապարհ</p>
        </div>

        <div className={s.mediaItem}>
            <img src={four} alt="" />
            <p>ՏԱՐԱԾՔԱՅԻՆ ԿԱՌԱՎԱՐՄԱՆ ԵՒ ԵՆԹԱԿԱՌՈՒՑՎԱԾՔՆԵՐԻ ՆԱԽԱՐԱՐՈՒԹՅԱՆ 2022Թ. ԳՈՐԾՈՒՆԵՈՒԹՅԱՆ ԿԱՏԱՐՈՂԱԿԱՆԸ</p>
        </div>

        <div className={s.mediaItem}>
            <img src={five} alt="" />
            <p>ՀՀ ՏԿԵ նախարարությունը սուբվենցիոն ծրագրերի մշտադիտարկում է իրականացնում բոլոր մարզերում</p>
        </div>

        
        </div>

        <Footer/>
    </div>
  )
}

export default Videos