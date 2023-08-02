
import o from './Oplata.module.scss'
import h from '../components/header/header.module.scss'
import Header from '../components/header/Header'


export default function Services () {
    return (

        <>

        <Header
                link='#onas'
                title='О нас'
        
                link2='#info' 
                title2='Предложения'
        
                link3='#kval' 
                title3='Обучение'
        
                link4='#novos' 
                title4='Новости и статьи '
        
                link5='#footer' 
                title5='Контакты'
    
        />
        
        <section className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                Услуги и цены
                </p>

                <div className={o.oplata}>
                    
            <div className={o.oplata__item}>

                <p className={o.oplata__subtitle}>
                Соискателям
                </p>

                <ul>

                <li className={o.oplata__text}>
                Платное составление полного резюме за вас: 200 рублей;
                </li> 

                <li className={o.oplata__text}>
                Платное составление резюме и его продвижение в поиске: 700 рублей;
                </li> 

                <li className={o.oplata__text}>
                Все вклчено. Составление резюме, продвижение резюме на 30 дней: 2000 рублей.
                </li> 

                </ul>



            </div>

            <div className={o.oplata__item}>

                <p className={o.oplata__subtitle}>
                Работодателям
                </p>

                <ul>

                <li className={o.oplata__text}>
                Разблокирование одного номера соискателя: 100 руб;
                </li> 

                <li className={o.oplata__text}>
                Разблокировать шесть номеров соискателей: 500руб;
                </li> 

                <li className={o.oplata__text}>
                Доступ ко всем номерам соискателей на 30 дней: 2000 руб.
                </li> 

                </ul>


            </div>

                </div>

            </div>
        </section>
        
        </>
        

    )

}