import React from "react"
import { useState } from "react";
import {   useNavigate } from "react-router-dom";

import o from '../Oplata/OplataRezume.module.scss'
import Header from '../components/header/Header'
import h from '../components/header/header.module.scss'

import card from '../components/img/card_hr.svg'
import p from '../components/img/card_p.svg'
import axios from "axios";



function OplataRezume ({price, auth, setAuth, TarifInfo, num_order}) {

    const navigate = useNavigate()
    console.log(navigate)

    const handleClick = e => {

        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/payment/', {

        price: price,
        service_name: TarifInfo,
        num_order: num_order,
            
        },
        
        {
            headers : {
            'Content-Type': 'application/json ',
             authorization: `Token ${tokenTwo}`
            }            
        }

        
        )

        .then(res => {
            const link = res.data.success; // Получаем ссылку из ответа
            window.location.href = link;// Перенаправляем пользователя

            // const erorr = res.request.status === 200 ? navigate('/tarifvakan') : navigate('/addvakan')
        })



    };

    const tokenTwo = JSON.parse(localStorage.getItem('token'))




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
        
        <div className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                    Оплата
                </p>

                <div className={o.oplata}>

                    <div className={o.oplata__item}>

                        <p className={o.oplata__item_title}>Заказ: {num_order}</p>

                        <div className={o.oplata__item_info}>
                            <p className={o.oplata__item_info_title}>Тариф</p>
                            <p className={o.oplata__item_info_title}>{price} руб</p>
                        </div>

                        <p className={o.oplata__subtitle}>{TarifInfo}</p>


                    </div>

                </div>
                
                <button onClick={handleClick} className={o.oplata__button}> Оплатить </button>

            </div>
        </div>
        </>


    )
}

export default OplataRezume