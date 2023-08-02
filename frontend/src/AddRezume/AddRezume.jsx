import Header from '../components/header/Header'

import h from '../components/header/header.module.scss'
import l from '../AddRezume/AddRezume.module.scss'

import cv from '../components/img/cv.png'
import gal from '../components/img/galka.png'
import { Link } from 'react-router-dom'

function AddRezume ({auth, setAuth}) {

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

                <p className={l.form__title}>Разместить резюме</p>

                <div className={l.form__wrapper}>

                    <div className={l.form__item}>

                        <img src={cv} alt="svg" />

                        <p className={l.form__item__title}>Бесплатно</p>

                        <div className={l.form__item__middle}>

                            <img src={gal} alt="" width="30px" height="30px" />

                            <p className={l.form__item__text}>Составь резюме бесплатно самостоятельно и размести его бесплатно
                            </p>

                        </div>

                        <Link to='/preap' className={l.form__item__link}>Выбрать</Link>

                    </div>

                    <div className={l.form__item}>

                        <img src={cv} alt="" />

                        <p className={l.form__item__title}> Платно</p>


                        <div className={l.form__item__middle}>

                            <img src={gal} alt="" width="30px" height="30px" />

                            <p className={l.form__item__text}>Наше агенство берет все в свои руки!
                            Составляем правильное резюме с которым вы быстро найдете работу</p>

                        </div>


                        <Link to='/tarifrezume' className={l.form__item__link}>Подробнее</Link>

                    </div>

                </div>

            </div>

            </div>

    </section>
        
        </>


    )
}

export default AddRezume

