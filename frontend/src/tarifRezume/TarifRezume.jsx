import Header from '../components/header/Header'


import { Link } from 'react-router-dom'

import h from '../components/header/header.module.scss'
import l from '../tarifRezume/TarifRezume.module.scss'

import cv from '../components/img/cv.png'
import gal from '../components/img/galka.png'



function TarifRezume ({setPrice, auth, setAuth, setTarifInfo, setNum_order}) {

    return (

        <>

        <Header
        
        auth={auth}
        setAuth={setAuth}
        
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

        />
        
        <section className={l.section__form}>

        <div className={h.container}>

            <div className={l.form}>

                <p className={l.form__title}>Тарифы</p>

                <div className={l.form__wrapper}>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="" />
    
                            <p className={l.form__item__titleI}> Тариф базовый</p>
    
                            <div className={l.form__item__middle}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Составляем за вас правильное  резюме</p>

                            </div> 
    
                            <input type='submit'
                             value="200 Руб"
                             className={l.form__item__link}
                            />
    
                            
                        </div>
                        
                        <Link  to="/oplatarezume" onClick={() => setPrice('200')
                     || setTarifInfo('Составляем за вас правильное резюме') || setNum_order('10')
                    }  className={l.form__item__link2}>Выбрать</Link>

                    </div>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="img" />
    
                            <p className={l.form__item__titleI}> Тариф стандартный</p>
    
    
                            <div className={l.form__item__middle2}>
    
                                
                                <div className={l.form__item__two}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Составляем за вас правильное резюме</p>

                                </div>
    
                                <div className={l.form__item__two}>
    
                                
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Дополнительно продвигаем ваше резюме в поиске</p>
    
                                </div>
                            
                            </div>
    
    
                             <input type='submit'
                             value="700 Руб"
                             className={l.form__item__link}
                              />
    
    
                        </div>

                        <Link to="/oplatarezume" onClick={() => setPrice('700')
                        || setTarifInfo('Составляем за вас правильное резюме , дополнительно продвигаем ваше резюме в поиске')|| setNum_order('11')
                    } className={l.form__item__link2}>Выбрать</Link>


                    </div>

                    <div className={l.form__flex}>

                        <div className={l.form__item}>
    
                            <img src={cv} alt="" />
    
                            <p className={l.form__item__titleI}> Тариф профи</p>
    
    
                            <div className={l.form__item__middle}>
    
                                <img src={gal} alt="" width="30px" height="30px" />
    
                                <p className={l.form__item__text}>Составляем продвигаем ваше резюме сроком до 6 месяцев</p>
                            </div>
    
    
    
                            <input type='submit'
                             value="2000 Руб"
                             className={l.form__item__link}
                            />
    
    
                        </div>

                        <Link to="/oplatarezume" onClick={() => setPrice('2000') 

                        || setTarifInfo('Составляем продвигаем ваше резюме сроком до 6 месяцев') || setNum_order('13')
                        
                        } className={l.form__item__link2}>Выбрать</Link>


                    </div>




                </div>

            </div>

            </div>

    </section>
        
        </>


    )
}

export default TarifRezume