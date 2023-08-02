import s from '../success/Success.module.scss'

import vector from '../components/img/Vector.png'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'

 export default function SuccessVakan ({auth, setAuth}) {
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

    <section className={s.section__pay}>
         
        <div className={s.payF}>

            <img src={vector} alt="img" />

            <p className={s.payF__title}>ваше вакансия измнено</p>

            <Link to='/myvakan' className={s.payF__link}>Перейти в мои вакансии</Link>

        </div>

    </section>
        
        </>


    )
}