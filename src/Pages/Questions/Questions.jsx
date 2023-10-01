import React, { useRef } from 'react'
import s from './questions.module.css'
import MainNews from '../../Components/MainNews/MainNews'
import Footer from '../../Components/Footer/Footer'


const Questions = () => {
    let infoptag = document.querySelectorAll('.infoptag')
    let infotext = document.querySelectorAll('.infoabout')



    
    infoptag.forEach((item)=>{
        item.addEventListener('click',function(){
            let activeinfop = item
            let infoid=activeinfop.getAttribute('data-tab')
            let ret=document.querySelector(infoid)
            if(! activeinfop.classList.contains('activeinf')){
                infoptag.forEach((items)=>{
                    items.classList.remove('activeinf')
                })
        
                infotext.forEach((e)=>{
                    e.classList.remove('infotextsec')
                })
        
                activeinfop.classList.add('activeinf');
                ret.classList.add('infotextsec')
            }else{
                infoptag.forEach((items)=>{
                    items.classList.remove('activeinf')
                })
        
                infotext.forEach((e)=>{
                    e.classList.remove('infotextsec')
                })
            }
            
        })
    })
  return (
    <div className={s.main}>
        <div className={s.questions}>
            <div className={s.title}>
                <h1>ՀԱՃԱԽԱԿԻ ՏՐՎՈՂ ՀԱՐՑԵՐ</h1>
            </div>
            <div className={s.information}>
            <div class="infoptag" data-tab="#finp1">
                    <div class="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                        <p>Ինչպե՞ս են ձեւավորվում համայնքային բյուջեները եւ վերահսկողության ինչպիսի՞ մեխանիզմներ են սահմանված</p>
                    </div>
                    
                    <div class="infoabout "  id="finp1" >
                        <p> -Համայնքի բյուջեի ձևավորման հիմնական աղբյուրներն են` պաշտոնական տրանսֆերտները, սեփական եկամուտները և պակասուրդի ֆինանսավորման նպատակով ներգրաված միջոցները:
Սեփական եկամուտներ`
-Ընթացիկ եկամուտներ,
-Հարկային եկամուտներ `

հողի հարկ` համայնքի վարչական տարածքում գտնվող հողի համար,

գույքահարկ` համայնքի վարչական տարածքում գտնվող գույքի համար,

եկամտային հարկից մասհանումներ,

շահութահարկից մասհանումներ,

բնապահպանական վճարներից մասհանումներ,

հողի հարկի և գույքահարկի գծով համայնքի բյուջե վճարումների բնագավառում բացահայտված հարկային օրենսդրության խախտումների համար հարկատուներից գանձվող տույժեր և տուգանքներ:

Եկամտային հարկի, շահութահարկի և բնապահպանական վճարների գումարներից համայնքների բյուջեներ կատարվող մասհանումների տոկոսաչափերը սահմանվում են յուրաքանչյուր տարվա պետական բյուջեի մասին օրենքով:
-Տուրքեր`
ա. տեղական տուրքեր
բ. պետական տուրքեր

-Պաշտոնական դրամաշնորհներ՝
ա. պետական բյուջեից ֆինանսական համահարթեցման սկզբունքով տրամադրվող դոտացիաներ,
բ. պետական բյուջեից տրամադրվող այլ դոտացիաներ,
գ. պետական բյուջեից ընթացիկ ծախսերի ֆինանսավորման նպատակային հատկացումները՝ սուբվենցիաներ,
դ.այլ աղբյուրներից հանրապետության այլ համայնքներ, միջազգային կազմակերպություններ, օտարերկրյա պետությունների տեղական ինքնակառավարման մարմիններ ընթացիկ ծախսերի ֆինանսավորման նպատակով ստացվող պաշտոնական դրամաշնորհներ:
-Այլ եկամուտներ, այդ թվում`
ա. համայնքի սեփականություն համարվող հողերի, ինչպես նաև համայնքի վարչական տարածքում գտնվող պետական սեփականություն համարվող հողերի վարձակալության կամ կառուցապատման իրավունքի դիմաց գանձվող վարձավճարներ,
բ. համայնքի սեփականություն համարվող հիմնարկների հաշվեկշիռներում հաշվառվող գույքի վարձակալությունից առաջացած եկամուտներ,
գ. վարչական իրավախախտումների համար տեղական ինքնակառավարման մարմինների կիրառած պատժամիջոցներից առաջացած եկամուտներ,
դ. համայնքի սեփականություն համարվող ընկերությունների տրամադրության տակ մնացած շահույթից համայնքի ավագանու որոշումներով կատարվող մասհանումներ,
ե. տեղական վճարներ,
զ. տեղական ինքնակառավարման մարմինների կողմից օրենքով գանձվող և համայնքների բյուջեների եկամուտներին հաշվանցման ենթակա այլ տեղական վճարներ,
է. համայնքի սեփականություն համարվող, ինչպես նաև տիրազուրկ, ժառանգության իրավունքով, ֆիզիկական և իրավաբանական անձանցից նվիրատվության կարգով համայնքին որպես սեփականություն անցած հիմնական միջոց կամ ոչ նյութական ակտիվ չհանդիսացող գույքի օտարումից եկամուտներ,
ը. պետության կողմից տեղական ինքնակառավարման մարմինների պատվիրակած լիազորությունների իրականացման համար համայնքների բյուջեներից` ծախսերի ֆինանսավորման նպատակով պետական բյուջեից տրամադրվող հատկացումներ,
թ. տիրազուրկ, ժառանգության իրավունքով, ինչպես նաև ֆիզիկական և իրավաբանական անձանցից բացառությամբ պետության, հանրապետության այլ համայնքների, միջազգային կազմակերպությունների և օտարերկրյա պետությունների տեղական ինքնակառավարման մարմինների նվիրատվության կարգով համայնքին որպես սեփականություն անցած դրամական միջոցներ:
Պակասուրդի ֆինանսավորման նպատակով ներգրավված միջոցներ`
-Փոխառու միջոցներ
-Համայնքի վարչական տարածքում գտնվող պետական սեփականություն հանդիսացող անշարժ գույքի բացառությամբ հողերի, այդ թվում` անավարտ շինարարության օբյեկտների մասնավորեցումից մուտքեր:
Համայնքի բյուջեի կատարման վերահսկողությունն իրականացնում է համայնքի ավագանին, որն իրավազոր է ստուգել ցանկացած բյուջետային գործողություն, աշխատանքների կատարման արդյունավետությունը և որակը, պահանջել հաշվետվություններ` կատարված ծախսերի վերաբերյալ:
Բյուջեի կատարման վերահսկողությունը մշտապես և արդյունավետ իրականացնելու նպատակով համայնքների ավագանիները կարող են սահմանված կարգով ներգրավել աուդիտորական ծառայություններ, որոնց դիմաց վճարումը կատարվում է համայնքային բյուջեից:</p>
                    </div>
         </div>
                
        <div className="infoptag"  data-tab="#finp2">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Հողի հարկի եւ գույքահարկի մասով ի՞նչ արտոնություններ են գործում</p>
                    </div>
                    
                    <div className="infoabout "  id="finp2">
                        <p>Հողի հարկից ազատվում են «Հողի հարկի մասին» ՀՀ օրենքի 10-րդ հոդվածով սահմանված անձիք՝ նույն հոդվածով նախատեսված դեպքերում:Հողի հարկից 50 տոկոսի չափով ազատվում են «Հողի հարկի մասին» ՀՀ օրենքի 11-րդ հոդվածով սահմանված անձիք՝ նույն հոդվածով նախատեսված դեպքերում:Համայնքի ավագանու սահմանած արտոնության գումարը չի կարող գերազանցել տվյալ տարվա համար հողի հարկի գծով համայնքի բյուջեում հաստատված եկամուտների 10 տոկոսը:
Գույքահարկի գծով արտոնությունները սահմանված են «Գույքահարկի մասին» ՀՀ օրենքի 15-րդ հոդվածով:
Համայնքի ավագանու սահմանած արտոնության գումարը չի կարող գերազանցել տվյալ տարվա համար գույքահարկի գծով համայնքի բյուջեում հաստատված եկամուտների 10 տոկոսը:Հաշվետու տարվա ընթացքում արտոնություն ունեցող գույքահարկ վճարողը գույքահարկը վճարելուց ազատվում է այն ամսվա 1-ից, երբ առաջացել է արտոնության իրավունքը:Հաշվետու տարվա ընթացքում գույքահարկի արտոնությունը դադարելու դեպքում գույքահարկը հաշվարկվում է արտոնության իրավունքը դադարելու ամսվան հաջորդող ամսվա 1-ից::</p>
                    </div>
        </div>

        <div className="infoptag"  data-tab="#finp3">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Կա՞ն արդյոք արտոնություններ սահմանամերձ համայնքների համար</p>
                    </div>
                    
                    <div className="infoabout "  id="finp3">
                        <p>  ՀՀ սահմանամերձ բնակավայրերի՝ մարտական գործողությունների հետևանքով չօգտագործվող հողատարածքների համար հողի հարկ վճարողներն ազատվում են 1994 թ. և հետագա տարիների համար հաշվարկված հողի հարկից և սահմանված ժամկետներում չվճարելու հետևանքով հաշվարկված տույժերից: Արտոնություն ստացող բնակավայրերի ցանկը հաստատում է ՀՀ կառավարությունը, իսկ չօգտագործվող հողատարածքներինը` մարզպետը:

ՀՀ սահամանամերձ համայնքների հողօգտագործողների հողի հարկը (մարտական գործողությունների հետևանքով չօգտագործվող հողատարածքների համար) 2013 թ-ից պետությունը վճարում է ամբողջությամբ, իսկ ջրօգտագործողների ջրի վարձավճարը` 50%-ով: Համայնքների ցանկը հաստատում է ՀՀ կառավարությունը:</p>
                    </div>
        </div>

        <div className="infoptag"  data-tab="#finp4">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Համայնքներում հողի վարձակալության կամ ձեռքբերման համար ո՞ւմ է հարկավոր դիմել</p>
                    </div>
                    
                    <div className="infoabout "  id="finp4">
                        <p>Համայնքներում պետության և համայնքի հողերից հողամասերի վարձակալության կամ ձեռքբերման համար հարկավոր է դիմել համայնքի ղեկավարին: Իսկ վարձակալության իրավունքը տրամադրվում է մրցույթով` հրապարակային սակարկությունների միջոցով:

Աճուրդային կարգով հողամասերի օտարման և մրցութային կարգով վարձակալության կամ կառուցապատման իրավունքի տրամադրման մասին հայտարարությունները պարտադիր հրապարակվում են "Հայաստանի Հանրապետություն" օրաթերթում և Հայաստանի Հանրապետության հրապարակային ծանուցումների պաշտոնական ինտերնետային կայքում` հետեւյալ հասցեով` http://www.azdarar.am :  </p>
                    </div>
        </div>

        <div className="infoptag"  data-tab="#finp5">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Ովքե՞ր ունեն անհատույց կարգով հողատարածք ստանալու իրավունք</p>
                    </div>
                    
                    <div className="infoabout "  id="finp5">
                        <p> Համաձայն ՀՀ հողային օրենսգրքի 64-րդ հոդվածի.
"1. Պետության և համայնքների սեփականության հողամասերը սեփականության իրավունքով անհատույց տրամադրվում են գյուղատնտեսական գործունեության համար և որպես տնամերձ կամ անհատական բնակելի տան կառուցման և սպասարկման համար`

1) սահմանամերձ, լեռնային, բարձրլեռնային, երկրաշարժից տուժած և լքված բնակավայրերում (ցանկը հաստատում է ՀՀ կառավարությունը) այն ընտանիքներին, որոնք նախկինում չեն օգտվել հողի սեփականաշնորհումից, չեն ստացել (ձեռք բերել) տնամերձ կամ բնակելի տան շինարարության և դրա սպասարկման համար հողամասեր,

2) Հայաստանի Հանրապետությունում բնակվող այն ընտանիքներին, որոնք ցանկություն են հայտնում մշտական բնակություն հաստատել սույն հոդվածի 1-ին կետի 1-ին ենթակետում նշված բնակավայրերում,

3) Հայաստանի Հանրապետության կառավարության որոշմամբ վերաբնակեցվածներին,

4) հողի սեփականաշնորհում իրականացրած համայնքներում բնակվող` զոհված և հաշմանդամ դարձած ազատամարտիկների, "Զինծառայողների և նրանց ընտանիքների անդամների սոցիալական ապահովության մասին" Հայաստանի Հանրապետության օրենքով սահմանված անձանց, չորս և ավելի երեխա ունեցող ընտանիքներին, որոնք չեն օգտվել հողի սեփականաշնորհումից, նախկինում չեն ստացել (ձեռք բերել) տնամերձ կամ բնակելի տան շինարարության և դրա սպասարկման համար հողամաս,

5) բնակարանային պայմանների բարելավման կարիք ունեցող այն բռնադատվածներին, ովքեր չեն օգտվել հողի սեփականաշնորհումից, նախկինում չեն ստացել (ձեռք բերել) տնամերձ կամ բնակելի տան շինարարության և դրա սպասարկման համար չծանրաբեռնված հողամաս այն բնակավայրերում, որտեղ նրանք բնակվել են բռնադատման պահին:

Հողամասերը անհատույց տրամադրվում են պետության սեփականություն հանդիսացող հողամասերից, իսկ պետության սեփականություն հանդիսացող հողամասերի բացակայության դեպքում` համայնքների սեփականություն հանդիսացող հողամասերից:"</p>
                    </div>
        </div>

        <div className="infoptag"  data-tab="#finp6">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Ինչպիսի՞ն են պետական եւ համայնքային սեփականության հողերի օտարման ընթացակարգերը:</p>
                    </div>
                    
                    <div className="infoabout "  id="finp6">
                        <p>Պետության և համայնքային սեփականություն հանդիսացող հողամասերի վաճառքը, բացառությամբ հողամասերը սեփականության իրավունքով անհատույց տրամադրելու և ուղղակի վաճառքի դեպքերի, կատարվում է աճուրդով:

Աճուրդով վաճառքի մեկնարկային գինը չի կարող պակաս լինել հողի կադաստրային արժեքի 50 տոկոսից, իսկ Հայաստանի Հանրապետության կառավարության սահմանած ցանկում ընդգրկված սահմանամերձ, լեռնային, բարձրլեռնային, ծայրամասային բնակավայրերում աճուրդով վաճառքի մեկնարկային գինը` հողի կադաստրային արժեքի 30 տոկոսից:

Համայնքային սեփականություն հանդիսացող հողամասերի կամ դրանց առանձին հատվածների աճուրդով վաճառքի մեկնարկային գինը հայտարարում է համայնքի ղեկավարը` համայնքի ավագանու որոշման հիման վրա: Աճուրդների կազմակերպման և իրականացման կարգը սահմանվում է Հայաստանի Հանրապետության քաղաքացիական օրենսգրքով, Հողային օրենսգրքով և "Հրապարակային սակարկությունների մասին" Հայաստանի Հանրապետության օրենքով: </p>
                    </div>
        </div>

        <div className="infoptag" data-tab="#finp7">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Նպատակահարմա՞ր է հողի հարկի եւ գույքահարկի ավտոմատացված համակարգերի կենտրոնացված վարումը:</p>
                    </div>
                    
                    <div className="infoabout " ref={infotext} id="finp7">
                        <p>Համայնքների հողի հարկի և գույքահարկի հաշվարկման և հաշվառման ավտոմատացված համակարգը ներդրվել է առանձին խոշոր համայնքներում և այդ նպատակով ստեղծված միջհամայնքային միություններում կամ կառույցներում:Խոշոր համայնքները, ունենալով համապատասխան տեխնիկական և ֆինանսական միջոցներ, ինչպես նաև համապատասխան մասնագետներ, կարողանում են ինքնուրույն վարել իրենց համակարգերը (բազաները), իսկ փոքր համայնքները, որոնք այդ հնարավորությունը ժամանակին չեն ունեցել, միացել են և ստեղծել միջհամայնքային միություններ կամ կառույցներ և կենտրոնացած վարում են իրենց համակարգերը՝ խուսափելով բազմաթիվ ռիսկերից:

Հայաստանի Հանրապետությունում թվով 502 համայնքներից հողի հարկի և գույքահարկի ավտոմատացված համակարգերը ինքնուրույն վարում են 394-ը: Գործում են թվով 3 համայնքների միություններ, որոնցում ընդգրկված են 42 համայնքներ, և 22 միջհամայնքային կառույցներ, որոնցում ընդգրված համայնքների թիվը 65 է:Ինտերնետ կապի առկայությունը և տեղեկատվական տեխնոլոգիաների ներդրումը թույլ են տալիս այդ համայնքներին առանց փոփոխություն անելու՝ դիտման ռեժիմում, հասանելիություն ունենալ իրենց առնչվող տվյալներին:

ՀՀ տարածքային կառավարման և զարգացման նախարարության կողմից իրականացված ուսումնասիրությունները ցույց են տալիս, որ ավտոմատացված համակարգերի կենտրոնացած վարումն ավելի արդյունավետ է և ծախսային առումով համայնքների համար ավելի շահավետ:</p>
                    </div>
        </div>

        <div className="infoptag" data-tab="#finp8">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Ո՞ր դեպքերում է հողերի կատեգորիաների փոփոխման անհրաժեշտություն առաջանում եւ ի՞նչ ընթացակարգ է անհրաժեշտ դրա համար:</p>
                    </div>
                    
                    <div className="infoabout " id="finp8">
                        <p> Համաձայն «Տեղական ինքնակառավարման մասին» ՀՀ օրենքի 26-րդ հոդվածի՝ համայնքի ղեկավարի լիազորությունները դադարեցվում են համայնքի ավագանու կողմից, իր ընդունած որոշման կամ կազմած արձանագրության հիման վրա այն դեպքերում, երբ համայնքի ղեկավարը.
• համայնքի ղեկավարը հրաժարական է տվել.
• դադարեցվել է համայնքի ղեկավարի` Հայաստանի Հանրապետության քաղաքացիությունը.
• համայնքի ղեկավարը դադարել է համայնքի բնակիչ լինելուց.
• դատարանի` օրինական ուժի մեջ մտած դատավճռով համայնքի ղեկավարը դատապարտվել է ազատազրկման և կրում է պատիժը.
• դատարանի` օրինական ուժի մեջ մտած վճռով համայնքի ղեկավարը ճանաչվել է անգործունակ, անհայտ բացակայող կամ մահացած.
• համայնքի ղեկավարն անհամատեղելի պաշտոն է զբաղեցնում.
• համայնքի ղեկավարը վեց ամիս անընդմեջ չի հրավիրում համայնքի ավագանու նիստ:
• եթե համայնքի ղեկավարը մահացել է:</p>
                    </div>
        </div>

        <div className="infoptag" data-tab="#finp9">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Ի՞նչ է համայնքային ծառայությունը եւ ինչպե՞ս է հնարավոր դառնալ համայնքային ծառայող:</p>
                    </div>
                    
                    <div className="infoabout " id="finp9">
                        <p> Համայնքային ծառայությունը հանրային ծառայության ինքնուրույն տեսակ է, որն իրականացվում է ՀՀ քաղաքապետարանների (գյուղապետարանների) աշխատակազմերում: Համայնքային ծառայությունը մասնագիտական գործունեություն է և ուղղված է Հայաստանի Հանրապետության օրենսդրությամբ տեղական ինքնակառավարման մարմիններին վերապահված խնդիրների և գործառույթների իրականացմանը:

Համայնքային ծառայության պաշտոն զբաղեցնելու իրավունք ունեն 18 տարին լրացած, հայերենին տիրապետող Հայաստանի Հանրապետության քաղաքացիները և Հայաստանի Հանրապետությունում փախստականի կարգավիճակ ունեցողները` անկախ ազգությունից, ռասայից, սեռից, դավանանքից, քաղաքական կամ այլ հայացքներից, սոցիալական ծագումից, գույքային կամ այլ դրությունից, եթե նրանք, իհարկե, բավարարում են համայնքային ծառայության տվյալ պաշտոնի անձնագրով ներկայացվող պահանջները  "Հանրային ծառայության մասին» ՀՀ օրենքի 3-րդ հոդված, "Համայնքային ծառայության մասին" ՀՀ օրենքի 11-րդ հոդված):</p>
                    </div>
        </div>

        <div class="infoptag" data-tab="#finp10">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Ավագանին կարո՞ղ է բողոքարկել համայնքի ղեկավարի որոշումները եւ ո՞ր դեպքերում:</p>
                    </div>
                    
                    <div className="infoabout " id="finp10">
                        <p> Համայնքի ավագանու անդամը համայնքի ղեկավարի որոշումները ստանալուց հետո` եռօրյա ժամկետում, կարող է նախաձեռնել ավագանու արտահերթ նիստ, եթե համայնքի ղեկավարի որոշումը, իր կարծիքով, հակասում է օրենսդրությանը կամ ավագանու որոշումներին: Այս դեպքում ավագանու նիստ պետք է հրավիրվի այդ մասին պահանջը համայնքի ղեկավարին ներկայացվելուց հետո` եռօրյա ժամկետում: Եթե համայնքի ավագանին գտնի, որ համայնքի ղեկավարի որոշումը հակասում է օրենսդրությանը կամ ավագանու որոշումներին, ապա նա պարտավոր է համայնքի ղեկավարին ներկայացնել գրավոր բողոք` համապատասխան հիմնավորումներով, առաջարկելով համայնքի ղեկավարին փոփոխելու իր որոշումը:
Եթե համայնքի ղեկավարը եռօրյա ժամկետում համայնքի ավագանու որոշման վերաբերյալ որևէ որոշում չի կայացնում, ապա համայնքի ղեկավարի որոշումը համարվում է չընդունված:
Համայնքի ղեկավարի որոշումները համայնքի ավագանին կարող է բողոքարկել դատական կարգով: </p>
                    </div>
        </div>

        <div class="infoptag" data-tab="#finp11">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Կարո՞ղ են համայնքի բնակիչները մասնակցել ավագանու նիստերին:</p>
                    </div>
                    
                    <div className="infoabout " id="finp11">
                        <p>Համաձայն «Տեղական ինքնակառավարման մասին» ՀՀ օրենքի 16-րդ հոդվածի 8-րդ մասի՝ «Համայնքի ավագանու նիստը հրապարակային է: Ավագանու կանոնակարգով նախատեսված դեպքերում ավագանու նիստին ներկա անդամների ձայների երկու երրորդի որոշմամբ կարող են անցկացվել դռնփակ նիստեր և քննարկումներ:»:
Բացի այդ, համաձայն «Տեղական ինքնակառավարման մասին» ՀՀ օրենքի 14-րդ հոդվածի 2-րդ մասի՝ համայնքի ավագանու նիստի օրակարգում հարց ընդգրկելու նախաձեռնությամբ կարող է հանդես գալ նաև համայնքում հաշվառված, տասնվեց տարին լրացած անձանց ոչ պակաս, քան մեկ տոկոսը` տասը հազարից ավելի բնակիչ ունեցող համայնքներում, երկու տոկոսը` հազարից մինչև տասը հազար բնակիչ ունեցող համայնքներում, և չորս տոկոսը` մինչև հազար բնակիչ ունեցող համայնքներում:
Ավագանու նիստի օրակարգում հարց ընդգրկելու նախաձեռնությունը ստորագրում են համայնքի՝ դրան կողմ բնակիչները և ներկայացնում են համայնքի ղեկավարին։ Համայնքի բնակիչների նախաձեռնությունը պարտադիր կարգով ներկայացվում և քննարկվում է ավագանու նիստում ոչ ուշ, քան համայնքի ղեկավարի կողմից դրա ստանալուց հետո` մեկ ամսվա ընթացքում։:</p>
                    </div>
        </div>

        <div class="infoptag" data-tab="#finp12">
                    <div className="ptext">
                    <div class="picon">
                        <i class="fa-solid fa-angle-down "></i>
                    </div>
                        <p>Ո՞ր դեպքերում է դադարեցվում համայնքի ղեկավարի լիազորությունները եւ ի՞նչ ընթացակարգով:</p>
                    </div>
                    
                    <div className="infoabout " id="finp12">
                        <p> Համաձայն «Տեղական ինքնակառավարման մասին» ՀՀ օրենքի 26-րդ հոդվածի՝ համայնքի ղեկավարի լիազորությունները դադարեցվում են համայնքի ավագանու կողմից, իր ընդունած որոշման կամ կազմած արձանագրության հիման վրա այն դեպքերում, երբ համայնքի ղեկավարը.
• համայնքի ղեկավարը հրաժարական է տվել.
• դադարեցվել է համայնքի ղեկավարի` Հայաստանի Հանրապետության քաղաքացիությունը.
• համայնքի ղեկավարը դադարել է համայնքի բնակիչ լինելուց.
• դատարանի` օրինական ուժի մեջ մտած դատավճռով համայնքի ղեկավարը դատապարտվել է ազատազրկման և կրում է պատիժը.
• դատարանի` օրինական ուժի մեջ մտած վճռով համայնքի ղեկավարը ճանաչվել է անգործունակ, անհայտ բացակայող կամ մահացած.
• համայնքի ղեկավարն անհամատեղելի պաշտոն է զբաղեցնում.
• համայնքի ղեկավարը վեց ամիս անընդմեջ չի հրավիրում համայնքի ավագանու նիստ:
• եթե համայնքի ղեկավարը մահացել է:</p>
                    </div>
        </div>
            </div>
        </div>
        <MainNews/>
        <Footer/>
    </div>
  )
}

export default Questions