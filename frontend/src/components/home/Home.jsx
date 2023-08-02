import Header from '../header/Header'

import h from '../header/header.module.scss'
import m from '../home/home.module.scss'

import {Link} from 'react-router-dom'


import Onas from '../onas/Onas'
import Info from '../info/Info'
import Choise from '../choise/choise'
import Swiperr from '../swiper/Swiper'
import Kval from '../kval/Kval'
import Novos from '../novos/Novos'
import Port from '../port/Port'



function Home ({applicants,employer, auth, setAuth}) {

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

        auth={auth}
        setAuth={setAuth}


         />

{/* <>
 
                    
 <div className={h.user}  >
     <img src={mail} alt="svg" />
     <Link to=''>Чаты</Link>
 </div>
 
 <div className={h.user}>
     <img src={chat} alt="svg" />
     <Link to=''>Тарифы</Link>
 </div>
 
 <div className={h.user}>
     <img src={contact} alt="svg" />
     <Link to=''>Мои резюме</Link>
 </div>
 
 <div className={h.user}>
     <img src={like} alt="svg" />
     <Link to=''>Мои избранные вакансии</Link>
 </div>
 
 <div className={h.user}>
     <img src={nast} alt="svg" />
     <Link to='/nast'>Настройки</Link>
 </div>
 
                 </> */}
        
        <section className={m.section__home}>
            <div className={h.container}>
                
                <div className={m.home}>

                    <p className={m.home__title}>Кадровое агенство</p>
                    <p className={m.home__title}>РЕЙТИНГ</p>

                    <p className={m.home__subtitle}>помощь в поиске работы или сотрудника</p>

                    <div className={m.home__buttons}>
                        
                        <Link to='/rezume' onClick={applicants} className={m.home__buttons__link}>
                        Соискателям
                        </Link>

                        <Link to='/vakan' onClick={employer} className={m.home__buttons__link}>
                        Работодателям
                        </Link>

                    </div>

                </div>

            </div>
        </section>



        <Onas />
        
        <Info />

        <Choise />

        <Swiperr />

        <Kval />

        <Novos />

        <Port />

        </>

    )

}

export default Home