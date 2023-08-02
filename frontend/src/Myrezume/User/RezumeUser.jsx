
import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import './RezumeUser.scss' 
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function RezumeUser ({auth, setAuth , uservaka , ...mycardId }) {
    
    const params = useParams()
    const userId = mycardId.mycardId.findIndex(user => user.id === +params.userId)
    const mas = mycardId.mycardId[userId]
    
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


        {mas &&
        
 <section className="sectionRec">

    <div className="container">

        <div className="recomendation">
    
            <div className="recomendation__top">
    
                <div className="recomendation__top_left">
    
                    <p className="recomendation__top_left_name">

                    {mas.FullName} {mas.data} лет, город {mas.city}
                    </p>

    
                </div>

                <img src={mas.foto}  width='120px' className='avatar'  alt="svg" />

    
            </div>
    
    
            <div className="recomendation__speciality">
    
                <div className="recomendation__top">
    
                    <div>
    
                        <p className="recomendation__top_title">
                            {mas.postWork}
                        </p>
    
                    </div>
    
                    <div>
    
                        <p className="recomendation__top_title">
                           Желаемая зарплата <br />
                           от {mas.startSalary} до {mas.endSalary}
                        </p>
    
                    </div>
    
                </div>
    
    
                <div className="recomendation__speciality_leftS">
    
                    <div className="recomendation__speciality_leftS_specializ">
    
                        <p className="recomendation__speciality_leftS_specializ_text1">
                            Специализации:
                        </p>
    
                        <p className="recomendation__speciality_leftS_specializ_text1">
                            Тип занятости
                        </p>

    
                    </div>
    
    
                    <div className="recomendation__speciality_description">
    
                        <p className="recomendation__top_left_text">
                        {mas.postWork}

                        </p>
    
                        <p className="recomendation__top_left_text">
                            {mas.busyness}
                        </p>

    
                    </div>
    
                </div>
    
            </div>
    
            <div className="recomendation__experience">
    
                <div className="recomendation__experience_vi">

    
                    <p className="recomendation__experience_vi_exp">
                        Опыт работы
                    </p>
        
                    
                    <p className="recomendation__experience_vi_exp1">
                    {mas.experience} года
                    </p>
    
                </div>
    
                
    
                <div className="recomendation__experience_info">
    

                    <div> <p className="recomendation__speciality_leftS_specializ_text1">Прошлое место работы:</p> </div>
        
                    <div><p className="recomendation__top_left_text">{mas.placeWork} с {mas.DataStart} До  {mas.DataEnd}</p> </div>
        
                    <div><p className="recomendation__speciality_leftS_specializ_text1">Ключевые навыки:</p></div>
        
                    <div className="recomendation__experience_info_grids"> 

                    <p className="recomendation__experience_info_grids_skills">{mas.skills}</p> 
                    
                     </div>
                    
                    <div><p className="recomendation__speciality_leftS_specializ_text1">Образование</p></div>
        
                    <div> <p className="recomendation__top_left_text">{mas.education} <br /> Дополнительно : {mas.AddEducation}</p></div>
    
                </div>
    
    
    
    
    
            </div>

            
    
    <div style={{marginBottom: '50px'}}>


        <p className="recomendation__experience_vi_exp">
            О себе
        </p>

        <p  className='recomendation__speciality_leftS_specializ_text1' > {mas.About}</p>

    </div>


    

        {uservaka ?

        <>
    
            
        <div className="recomendation__number">
            <p className="recomendation__number_text">
                Телефон 
            </p>
            <span className="recomendation__number_text">
                {mas.PhoneNumber}
            </span>
            
        </div>
        

        </>


            :

            <>

            <div className="recomendation__number">
                <p className="recomendation__number_text">
                    Телефон 
                </p>
                <span className="recomendation__number_blur">
                    {mas.PhoneNumber}
                </span>
            </div>
    
            <div className="recomendation__access">
                <p className="recomendation__access_text">
                    Для получения доступа к номеру телефона требуется оплата
                </p>
            </div>

            <Link to='/tarifnumber' className='recomendation__link'>
            Получить доступ
            </Link>
            

            </>
            
        }
    
          
        </div>

    </div>


</section>
        
        }
 
 

 

</>

    )
}