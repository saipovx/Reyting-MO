import s from '../success/Success.module.scss'

import vector from '../components/img/Vector.png'
import Header from '../components/header/Header'
import { Link } from 'react-router-dom'

 export default function SuccessTwo ({auth, setAuth}) {
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

    <section className={s.section__pay}>
         
        <div className={s.payF}>

            <img src={vector} alt="img" />

            <p className={s.payF__title}>ваше резюме размещено</p>

            <Link to='/myrezume' className={s.payF__link}>Перейти в мои резюме</Link>

        </div>

    </section>
        
        </>


    )
}