import React from 'react'
import s from './programs.module.css'
import arm from './img/armeina.svg'
import elec from './img/electric.svg'
import hands from './img/hands.svg'
import trash from './img/trash.svg'
import road from './img/road.svg'
import train from './img/train.svg'
import work from './img/work.svg'
import water from './img/water.svg'
import build from './img/build.svg'
import user from './img/user.svg'
import license from './img/license.svg'
import search from './img/search.svg'
import vol from './img/vol.svg'
import { NavLink } from 'react-router-dom'

const Programs = () => {
  return (
    <div className={s.main}>
      <div className={s.programs}>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.arm}`}>
                  <img src={arm} alt="" />
              </div>
              <div className={s.title}>
                  <p>Տարածքային և համայնքային ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.hands}`}>
                  <span>
                  <img src={hands} alt="" />
                  </span>
              </div>
              <div className={s.title}>
                  <p>Սուբվենցիոն ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.trash}`}>
                  <img src={trash} alt="" />
              </div>
              <div className={s.title}>
                  <p>Աղբահանության և կոշտ թափոնների կառավարման ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.elec}`}>
                  <img src={elec} alt="" />
              </div>
              <div className={s.title}>
                  <p>Էներգետիկ ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.road}`}>
                  <img src={road} alt="" />
              </div>
              <div className={s.title}>
                  <p>Ճանապարհաշինական ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.train}`}>
                  <img src={train} alt="" />
              </div>
              <div className={s.title}>
                  <p>Տրանսպորտային ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.work}`}>
                  <img src={work} alt="" />
              </div>
              <div className={s.title}>
                  <p>Ընդերքի ծրագրեր</p>
              </div>
          </div>
          <div className={s.programItem}>
              <div className={`${s.icon} ${s.water}`}>
                  <img src={water} alt="" />
              </div>
              <div className={s.title}>
                  <p>Ջրային համակարգ</p>
              </div>
          </div>
      </div>
      <div className={s.interesting}>
            <div className={s.interestingItem}>
                <div className={`${s.icon}`}>
                    <img src={build} alt="" />
                </div>
                <div className={s.title}>
                    <p>ՏԱՐԱԾՔԱՅԻՆ ԿԱՌԱՎԱՐՈՒՄ ԵՒ ՏԵՂԱԿԱՆ ԻՆՔՆԱԿԱՌԱՎԱՐՈՒՄ</p>
                </div>
            </div>
            <div className={s.interestingItem}>
                <div className={`${s.icon} ${s.user}`}>
                    <img src={user} alt="" />
                </div>
                <div className={s.title}>
                    <p>ՀԱՄԱՅՆՔԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆ</p>
                </div>
            </div>
            <div className={s.interestingItem}>
                <div className={`${s.icon}`}>
                    <img src={license} alt="" />
                </div>
                <div className={s.title}>
                    <p>ԼԻՑԵՆԶԻԱՆԵՐ ԵՒ ԹՈՒՅԼՏՎՈՒԹՅՈՒՆՆԵՐ</p>
                </div>
            </div>
            <div className={s.interestingItem}>
                <div className={`${s.icon}`}>
                    <img src={search} alt="" />
                </div>
                <div className={s.title}>
                    <p>ԹԱՓՈՒՐ ՊԱՇՏՈՆՆԵՐ</p>
                </div>
            </div>
          
           <NavLink to={`/haytararutyun`} className={s.interestingItem}>
                <div className={`${s.icon}`}>
                    <img src={vol} alt="" />
                </div>
                <div className={s.title}>
                    <p>ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆՆԵՐ</p>
                </div>
            </NavLink>
        
      </div>
    </div>
  )
}

export default Programs