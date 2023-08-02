import React from 'react';

import p from '../poisk/poisk.module.scss'
import h from '../header/header.module.scss'

import svg from '../img/search-normal.svg'
import { Link, useLocation } from 'react-router-dom';



function Poisk() {

    const textPoisk = useLocation()

  return (

  <>
  
    <div className={p.section__poisk} id='poisk'>
        <div className={h.container}>

            <p className={p.poisk__title}>
            поиск
            </p>
            
             <div className={p.poisk}>
            
            <p className={p.poisk__subtitle}>
            {textPoisk.pathname === '/rezume' ? 'Найди подходящую для себя вакансию! ' : 'Не ждите откликов — найдите идеального сотрудника сами'}
            </p>

            <form className={p.poisk__form}>

                <Link to={textPoisk.pathname === '/rezume' ? '/poiksvakan' : '/poiksrezume'}>

                <input name='poisk' type="text" placeholder='Поиск' className={p.poisk__form_input} />

                </Link>

                <img src={svg} className={p.poisk__form_svg} alt="svg" />

            </form>

            <div className={p.poisk__footer}>

                <Link to={textPoisk.pathname === '/rezume' ? '/poiksvakan' : '/poiksrezume'} className={p.poisk__footer_button}>
                {textPoisk.pathname === '/rezume' ? 'Все вакансии' : 'Все резюме'}
                </Link>

                <div className={p.poisk__footer_ishut}>
                    <p className={p.poisk__footer_ishut_text}>Часто ищут:</p>
                    <Link to={textPoisk.pathname === '/rezume' ? '/poiksvakan' : '/poiksrezume'} className={p.poisk__footer_ishut_link}>web-designer</Link>
                    <Link to={textPoisk.pathname === '/rezume' ? '/poiksvakan' : '/poiksrezume'} className={p.poisk__footer_ishut_link}>web-developer</Link>
                </div>

            </div>

            </div> 

        </div>
    </div>


    
  
  
  </>

    
  );
}

export default Poisk;