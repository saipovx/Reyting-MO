import React from 'react';
import {Link} from 'react-router-dom'

import h from '../header/header.module.scss'
import m from '../rezume/rezume.module.scss'


import Poisk from '../poisk/Poisk';
import Header from '../header/Header';
import KompCard from './KompCard';
import KompDatacard from './Komp.data'
import Port from '../port/Port';

import ster from '../img/abu__ster.svg'
import abu from '../img/abu.png'



function Rezume({auth, setAuth}) {
  return (

  <>

<Header

link='rezume/#rezume'
title='Резюме'

link2='rezume/#poisk' 
title2='Поиск'

link3='rezume/#reyting' 
title3='Рейтинг'

link4='rezume/#abu' 
title4='Обучение'

link5='rezume/#port' 
title5='Партнеры'





myRezume = 'Мои резюме'

myRezume_link = '/myrezume'

tarif_link= '/tarifrezume'

myLiveVakan = '/myLiveVakan'

auth={auth}
setAuth={setAuth}

 />
  
    <div className={m.section__rezume} id='rezume'>
        <div className={h.container}>
            
             <div className={m.rezume}>

                    <p className={m.rezume__title}>Размеcтить резюме</p>

                    <p className={m.rezume__subtitle}>Работа найдется для каждого.</p>

                
                        
                      {auth ?

                        <Link to='/addrezume' className={m.rezume__link}>
                        Разместить
                        </Link>
                        
                      :

                      <Link to='/reg' className={m.rezume__link}>
                      Разместить
                      </Link>
                             
                      }

                        

            </div> 

            <Link to='/' className={m.rezume__exit}>
            Назад
            </Link>

        </div>
    </div>

    <Poisk />

    <section className={m.section__komp} id='reyting'>
      <div className={h.container}>

        <p className={m.komp_title}>Рейтинг лучших КОМПАНИЙ</p>
        
        <div className={m.komp}>

        { KompDatacard.map( (info, index) => { 
              return <KompCard {...info} key = {index} />
        } ) }

        </div>

      </div>
    </section>


    <section className={m.section__abu} id='abu'>
      <div className={h.container}>
        
      <p className={m.abu__title}>OБУЧЕНИЕ</p>

      <div className={m.abu}>
        
        <div className={m.abu__flex}>

        <div className={m.abu__item}>
          <p className={m.abu__item_title}>Не можешь найти работу?</p>
          <p className={m.abu__item_subtitle}>Не хватает опыта?</p>
          
          <div className={m.abu__item_buttons}>
            <Link to='https://frantsuz.ru/' className={m.abu__item_buttons_link}>Подробнее</Link>
            <img src={ster} className={m.abu__item_buttons_svg} alt="svg" />
          </div>

        </div>
        


        <img src={abu} alt="img" className={m.abu__img} />

        </div>


        <p className={m.abu__footer}>Тогда тебе к нам !</p>

      </div>

      </div>
    </section>

    <Port />
  
  
  </>

    
  );
}

export default Rezume;
