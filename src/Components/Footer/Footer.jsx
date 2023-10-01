import React from 'react'
import s from './footer.module.css'
import back from './img/background.svg'
import partner from './img/partner.png'

const Footer = () => {
  return (
    <div className={s.main}>
        <div className={s.firstBlock}>
            <div className={s.item}>
                <img src={partner} alt="" />
            </div>
            <div className={s.item}>
                <h5>ԴԻՄԵՔ ՄԵԶ</h5>
                <p>Դուք հնարավորո ւթյուն ունեք առցանց ռեժիմում ուղարկել Ձեր դիմումներն, առաջարկություներն ու նամակները: Դրանք չեն կարող համարվել պաշտոնական, ունեն բացառապես տեղեկատվական բնույթ և ենթակա չեն պաշտոնական ընթացակարգով քննության <br /> <span>ԱՅՍՏԵՂ :</span></p>
                
            </div>
            <div className={s.item}>
                <h5>ՀԵՏԵՎԵՔ ՁԵՐ ՆԱՄԱԿԻ ԸՆԹԱՑՔԻՆ</h5>
                <p>ՀՀ տարածքային կառավարման և ենթակառուցվածքների նախարարությանն ուղղված Ձեր պաշտոնական դիմումը այլևս թափանցիկ ընթացակարգ ունի: Մեր կայքի շնորհիվ Դուք կարող եք տեղեկանալ, թե պետական որ մարմնին կամ պաշտոնյային է Ձեր առձեռն հանձնած կամ փոստով ուղարկած դիմումը վերահասցեագրվել:</p>
            </div>
            <div className={s.item}>
                <h5>Պաշտոնական էլ. փոստ`</h5>
                <span>39161512@e-citizen.am</span>
                <p>(միայն <span>www.e-citizen.am</span>  <br /> համակարգով ծանուցումների համար)</p>
                <p>(այլընտրանքային էլ․ հասցե՝ <span>mtai.secretariat@gmail.com </span> )</p>
                <p> ԹԵԺ ԳԻԾ <br /><span>Հեռ. (010)51-13-79  </span></p>

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
        </div>

        <div className={s.secondBlock}>
          <p>Կայքը ստեղծվել է Շվեյցարիայի զարգացման և համագործակցության գործակալության (ՇԶՀԳ) կողմից ֆինանսավորվող «Տեղական ինքնակառավարման համակարգի բարելավում Հայաստանում» ծրագրի շրջանակներում: Արտահայտված տեսակետները պարտադիր չէ, որ համընկնեն Շվեյցարիայի զարգացման և համագործակցության գործակալության (ՇԶՀԳ) կամ Շվեյցարիայի կառավարության տեսակետներին: </p>
         <h6></h6>
         <p>© 2022, Հայաստանի Հանրապետության տարածքային կառավարման և ենթակառուցվածքների նախարարություն. Հայաստանի Հանրապետություն, Երևան 0010, Հանրապետության հրապարակ, Կառավարական տուն 3  </p>
        
        </div>

        <div className={s.bg} style={{backgroundImage : `url(${back})`}}></div>
    </div>
  )
}

export default Footer