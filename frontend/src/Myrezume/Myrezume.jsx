

import Header from '../components/header/Header'
import Mycard from './Mycard'
import '../Myrezume/Myrezume.scss'

import plus from '../components/img/+.svg'
import { Link } from 'react-router-dom'



export default function MyRezume({onClick, setAuth, employer, auth, mycardId, deletePost, applicants}) {

    


    return(

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



<section className="sectionmini">
 
 <div className="container">

     <div className="mini">

         <p className="mini__title">
             Мои резюме
         </p>

         {mycardId.map( (info, index) => { 
                return <Mycard deletePost={deletePost} applicants={applicants}  onClick={onClick} {...info}  key={index} employer={employer}/>
         } ) }

         <Link to='/preap' className='plus'>
                <img src={plus} alt="svg" />        
        </Link>

     </div>

 </div>

</section>


       </>

    )
}