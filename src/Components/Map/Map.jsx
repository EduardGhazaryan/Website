import React from 'react'
import s from './map.module.css'
import infowork from './img/infoWork.jpg'
import infodone from './img/infoDone.jpg'
import infodone2 from './img/infoDone2.jpg'

const Map = () => {
  return (
    <div className={s.main}>
      <div className={s.title}>
        <h1>Հայաստանի Հանրապետության վարչատարածքային բարեփոխումների ինտերակտիվ քարտեզ</h1>
      </div>
      <div className={s.container}>
        <div className={s.inform}>
            <h1>ՀԱՅԱՍՏԱՆԻ ՀԱՆՐԱՊԵՏՈՒԹՅՈՒՆ</h1>
            <div className={s.infoItems}>
              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Աբովյան - համայնք</h2>
                    <h4>Աբովյան - քաղաք</h4>
                    <p>Վերանորոգված/Ճանապարհներ</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Աբովյան - համայնք</h2>
                    <h4>Գեղաշեն - գյուղ</h4>
                    <p>Վերանորոգված/Ճանապարհներ</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Արթիկ- համայնք</h2>
                    <h4>Արթիկ - քաղաք</h4>
                    <p>Արթիկ համայնքի Սպանդարյան փողոցի հիմնանորոգում Պատվիրատու ` ՀՀ տարածքային կառավարման և ենթակառուցվածքների նախարարություն</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Գյումրի - համայնք</h2>
                    <h4>Գյումրի - քաղաք</h4>
                    <p>Վերակառուցման և զարգացման եվրոպական բանկի աջակցությամբ իրականացվող Գյումրու քաղաքային ճանապարհների ծրագիր - Շենքերի և շինությունների կապիտալ վերանորոգում Պատվիրատու՝ ՀՀ տարածքային կառավարման և ենթակառուցվածքների նախարարություն և Գյումրի համայնք </p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Տաշիր - համայնք</h2>
                    <h4>Պրիվոլնոյե - գյուզ</h4>
                    <p>Մանկապերտեզի կառուցում/Սուբվենցիոն ծրագիր</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Թումանյան - համայնք</h2>
                    <h4>Թումանյան - քաղաք</h4>
                    <p>0.53 կմ ճանապարհների հիմնանորոգում/Սուբվենցիոն ծրագիր</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Բերդ - համայնք</h2>
                    <h4>Բերդ - քաղաք</h4>
                    <p>Բերդ համայնքի Բերդ և Արծվաբերդ բնակավայրերում ներհամայնքային ճանապարհներ հիմնովին վերանորոգում և սալիկապատում /կատարվել է 60%/: Սուբվենցիոն ծրագրեր ։</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>


              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h4>Շամիրամ համայնքի ճանապարհների վերանորոգում</h4>
                    <p>Շամիրամ համայնքի ներհամայնքային 1-ին փողոցի 3-րդ նրբ․1-ին և 2-րդ հատվածներ, 1-ին փողոցի 3-րդ փակուղի, 3-րդ վերին փողոցի սկիզբ և շարունակություն, 3-րդ ներքին փողոց, 4-րդ և 5-րդ փողոցների ասֆալտբետոնե ծածկույթի իրականացում և ասֆալտ բետոնե ծածկույթի կապիտալ վերանորոգման իրականացում (2855,5 ք/մ) </p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone} alt="" />
                </div>
              </div>


              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Թալին - համայնք</h2>
                    <h4>Լուսակն - գյուղ</h4>
                    <p>Լուսակնի միջնակարգ դպրոցի «Մոդուլային» տիպի շենքի կառուցում</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>

              <div className={s.infoItem}>
                <div className={s.infoWork}>
                    <img src={infowork} alt="" />
                </div>
                <div className={s.infoText}>
                    <h2>Ջրվեժ - համայնք</h2>
                    <h4>Զովք - գյուղ</h4>
                    <p>Սուբվենցիոն ծրագրով ընթանում են մանկապարտեզի վերակառուցման աշխատանքները</p>
                </div>
                <div className={s.infoDone}>
                    <img src={infodone2} alt="" />
                </div>
              </div>
            </div>
        </div>
        <div className={s.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1103912.8885952183!2d44.26634079506616!3d40.16104953739074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2z0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2sam!4v1695494990985!5m2!1sru!2sam" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map