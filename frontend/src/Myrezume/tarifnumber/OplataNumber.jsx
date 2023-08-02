

import React from "react"
import { useState } from "react";
import {   useNavigate } from "react-router-dom";
import Header from '../../components/header/Header'

import o from '../../Oplata/OplataRezume.module.scss'
import h from '../../components/header/header.module.scss'

import card from '../../components/img/card_hr.svg'
import p from '../../components/img/card_p.svg'
import { Link } from "react-router-dom";



 export default function OplataNumber({priceThree, auth, setAuth}) {

    const [CardNum, setCardNum] = useState('');

    const [CardName, setCardName] = useState('');

    const [CardGod, setCardGod] = useState('');

    const [CardKod, setCardKod] = useState('');

    // const [path, setPath] = useState('')

    const navigate = useNavigate()
    console.log(navigate)


    


    const handleClick = e => {

        

        e.preventDefault();

        if (
            
        (CardName.length > 0) && 
        
        (CardNum.length === 16) && 

        (CardGod.length === 4)&& 

        (CardKod.length === 3) ) {

          return navigate('/successfive')

        } else {

          return  alert('Неправильно ввели данные')

        }
    };


    return (

        <>

<Header

link='vakan/#vakan'
title='Разместить вакансию'

link2='vakan/#poisk' 
title2='Резюме'

link3='vakan/#reyting' 
title3='Рейтинг работников'

link4='vakan/#obuch' 
title4='Обучение'

myRezume = 'Мои вакансии'

myRezume_link = '/myvakan'

tarif_link= '/tarifvakan'

myLiveVakan = '/myliverezume'
auth={auth}
setAuth={setAuth}

 />
        
        <div className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                    Оплата
                </p>

                <div className={o.oplata}>

                    <div className={o.oplata__item}>

                        <p className={o.oplata__item_title}>Заказ: 454</p>

                        <div className={o.oplata__item_info}>
                            <p className={o.oplata__item_info_title}>Тариф</p>
                            <p className={o.oplata__item_info_title}>{priceThree} руб</p>
                        </div>


                    </div>

                    <div className={o.oplata__item}>

                        <div className={o.oplata__item_card}>
                            
                            <div className={o.oplata__item_card_header}>
                                <img src={card} alt="svg" />
                                <img src={p} alt="svg" />
                            </div>

                            <div className={o.oplata__item_card_content}>
                                <p className={o.oplata__item_card_content_text}>Номер карты</p>
                                <p className={o.oplata__item_card_content_num}>{CardNum}</p>
                            </div>

                            <div className={o.oplata__item_card_footer}>
                                
                                <div className={o.oplata__item_card_footer_item}>
                                    <p className={o.oplata__item_card_footer_item_text}>Имя держателя карты</p>
                                    <p className={o.oplata__item_card_footer_item_name}>{CardName}</p>
                                </div>

                                <div className={o.oplata__item_card_footer_item}>
                                    <p className={o.oplata__item_card_footer_item_text}>Срок годности</p>
                                    <p className={o.oplata__item_card_footer_item_name}>{CardGod}</p>
                                </div>

                                <div className={o.oplata__item_card_footer_item}>
                                    <p className={o.oplata__item_card_footer_item_text}>cvc код</p>
                                    <p className={o.oplata__item_card_footer_item_name}>{CardKod}</p>
                                </div>

                            </div>

                        </div>

                        <form action="" className={o.oplata__item_form}>

                            <input type="text" placeholder='Имя владельца карты' className={o.oplata__item_form_input} onChange={event => setCardName(event.target.value)}  />


                            <input type="text" placeholder='Номер карты' className={o.oplata__item_form_input} onChange={event => setCardNum(event.target.value)}  />
                            
                            <div className={o.oplata__item_form_flex}>

                                <input   type="text" placeholder='срок действия' className={o.oplata__item_form_flex_input} onChange={event => setCardGod(event.target.value)}  />

                                <input type="text" placeholder='cvc код' onChange={event => setCardKod(event.target.value)} className={o.oplata__item_form_flex_input}  />

                            </div>
                            
                        </form>
                        
                    </div>

                </div>
                
                <Link to='/successfive' onClick={handleClick}  className={o.oplata__button}> Оплатить </Link>

            </div>
        </div>
        </>


    )
}
