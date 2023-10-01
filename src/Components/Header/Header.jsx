import React, { useRef } from 'react'
import s from './header.module.css'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
import bg from '../Footer/img/background.svg'
import gear from './images/gear.svg'

const Header = () => {
    const menuXRef = useRef(null)
    const asideRef = useRef(null)
    const barref = useRef(null)

const barfunc = ()=>{
    barref.current.classList.add('menux')
    menuXRef.current.style.display='inline-block'
    asideRef.current.style.display = 'flex'
    document.body.style.overflowY= 'hidden' 

}

const xfunc =()=>{
    barref.current.classList.remove('menux')
    menuXRef.current.style.display='none'
    asideRef.current.style.display = 'none'
    document.body.style.overflowY= 'scroll'
}

  return (
    <div className={s.header}>
        <div className={s.top}></div>
        <div className={s.bottom}>
            <div  className={s.barLogo}>
                <div className={s.icon}><i class="fa-solid fa-bars bar" ref={barref} onClick={()=>barfunc()}></i>
                <i class="fa-solid fa-xmark menux" onClick={()=>xfunc()} ref={menuXRef}></i>
                </div>
                <NavLink onClick={()=>xfunc()} to={`/`} className={s.logo}>
                <img src={logo} alt="" />
                <p>ՀՀ ՏԱՐԱԾՔԱՅԻՆ ԿԱՌԱՎԱՐՄԱՆ ԵՎ ԵՆԹԱԿԱՌՈՒՑՎԱԾՔՆԵՐԻ ՆԱԽԱՐԱՐՈՒԹՅՈՒՆ</p>
                </NavLink >
            </div >
            <div className={s.search}>
                <div className={s.inputDiv}>
                    <input placeholder='Որոնում'/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className={s.text}>
                    <NavLink to={`/media`} onClick={()=>xfunc()}>Տեսանյութեր</NavLink>
                    <NavLink to={`/questions`} onClick={()=>xfunc()}>Հաճախակի տրվող հարցեր</NavLink>
               
                </div>
            </div>
            <div className={s.icons}>
                <a href="https://www.facebook.com/MinistryTerritorialAdministrationInfrastructureRA">
                    <i class="fa-brands fa-facebook-f facebook"></i>
                </a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FOfMtai">
                    <i class="fa-brands fa-twitter twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCbWk_rDRk1mEfck-FW9-9qQ">
                    <i class="fa-brands fa-youtube youtube"></i>
                </a>

            </div>
        </div>
        <div className='asidemenu' ref={asideRef} style={{backgroundImage : `url(${bg})`}}>
            <div className={s.asideItem}>
            <i className={`${"fa-solid fa-landmark"} ${s.landmark}`}></i>
            <div className={s.asideTwo}>
                <p>Նախարարություն</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>

            <div className={s.asideItem}>
            <i className={`${'fa-solid fa-globe'} ${s.landmark}`} ></i>
            <div className={s.asideTwo}>
                <p>Գործունեության ոլորտներ</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>

            <div className={s.asideItem}>
            <i className={`${'fa-solid fa-gavel'} ${s.landmark}`} ></i>
            <div className={s.asideTwo}>
                <p>Օրենսդրություն</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>

            <div className={s.asideItem}>
            <i className={`${"fa-regular fa-file-lines"} ${s.landmark}`}></i>
            <div className={s.asideTwo}>
                <p>Մեդիա կենտրոն</p>
                <i className={`${"fa-solid fa-chevron-right"} `}></i>
            </div>
            </div>

            <div className={s.asideItem}>
            <i className={`${"fa-solid fa-display"} ${s.landmark}`}></i>
            
            
            <div className={s.asideTwo}>
                <p>Ծրագրեր և գերակա խնդիրներ</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>

            <div className={s.asideItem}>
            <i className={`${"fa-solid fa-city"} ${s.landmark}`} ></i>
           
            <div className={s.asideTwo}>
                <p>Ենթակա մարմիններ և ոլորտային կազմակերպություններ</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>

            <div className={s.asideItem}>
           
            <i className={`${"fa-solid fa-people-group"} ${s.landmark}`}></i>
            <div className={s.asideTwo}>
                <p>Կադրային ապահովում</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>

            <div className={s.asideItem}>
            <i className={`${'fa-solid fa-people-carry-box'} ${s.landmark}`} ></i>
           
            <div className={s.asideTwo}>
                <p>Միջազգային համագործակցություն</p>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header