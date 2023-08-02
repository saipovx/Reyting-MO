import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import './RezumeUser.scss' 
import { Link } from 'react-router-dom';

export default function RezumeUser (cardMassiv) {

    const [mas, setMas] = useState(cardMassiv.cardMassiv)
    const [result, setResult] = useState(null)

    // setMas(cardMassiv)

    useEffect(() => {
        if(mas) {
            setResult(mas[0]) 
        }
    }, [mas])


    // console.log(mas[0].zp);

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
        myRezume_link = '/fd'
        
        tarif_link= '/tarifrezume'
        
        myLiveVakan = '/myLiveVakan'
        
        />


 <section className="sectionRec">

    <div className="container">

        <div className="recomendation">
    
            <div className="recomendation__top">
    
                <div className="recomendation__top_left">
    
                    <p className="recomendation__top_left_name">

                    {result === null ? '' : result.name} {result === null ? '' : result.surname}, {result === null ? '' : result.years}, город {result === null ? '' : result.gorod}
                    </p>
    
                    <Link to='/otzivuser' className="recomendation__top_left_blue">
                    РЕКОМЕНДАЦИИ 
                    </Link>
    
                </div>

                <img src={result === null ? '' : result.avatar} alt="svg" />

    
            </div>
    
    
            <div className="recomendation__speciality">
    
                <div className="recomendation__top">
    
                    <div>
    
                        <p className="recomendation__top_title">
                            {result === null ? '' : result.proves}
                        </p>
    
                    </div>
    
                    <div>
    
                        <p className="recomendation__top_title">
                           {result === null ? '' : result.zp} на руки
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
    
                        <p className="recomendation__speciality_leftS_specializ_text1">
                            График работы
                        </p>
    
                    </div>
    
    
                    <div className="recomendation__speciality_description">
    
                        <p className="recomendation__top_left_text">
                        {result === null ? '' : result.proves}

                        </p>
    
                        <p className="recomendation__top_left_text">
                             {result === null ? '' : result.zynytost}
                        </p>
    
                        <p className="recomendation__top_left_text">
                              {result === null ? '' : result.grafik}
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
                        {result === null ? '' : result.opetrabot}
                    </p>
    
                </div>
    
                
    
                <div className="recomendation__experience_info">
    

                    <div> <p className="recomendation__speciality_leftS_specializ_text1">Прошлое место работы:</p> </div>
        
                    <div><p className="recomendation__top_left_text">{result === null ? '' : result.exitrabot} От {result === null ? '' : result.setStartSalary} До  {result === null ? '' : result.setEndSalary}</p> </div>
        
                    <div><p className="recomendation__speciality_leftS_specializ_text1">Ключевые навыки:</p></div>
        
                    <div className="recomendation__experience_info_grids"> 

                    <p className="recomendation__experience_info_grids_skills">{result === null ? '' : result.skills}</p> 
                    
                     </div>
        
                    <div><p className="recomendation__speciality_leftS_specializ_text1">Категория прав</p></div>
        
                    <div> <p className="recomendation__top_left_text">{result === null ? '' : result.prava}</p> </div>
                    
                    <div><p className="recomendation__speciality_leftS_specializ_text1">{result === null ? '' : result.education}</p></div>
        
                    <div> <p className="recomendation__top_left_text"> {result === null ? '' : result.dopeducation}</p></div>
    
                </div>
    
    
    
    
    
            </div>

            
    
    <div style={{marginBottom: '50px', width: '100%'}}>


        <p className="recomendation__experience_vi_exp">
            О себе
        </p>

        <p className='recomendation__speciality_leftS_specializ_text1' > {result === null ? '' : result.About}</p>

    </div>

    
            
    
            <div className="recomendation__number">
                <p className="recomendation__number_text">
                    Телефон {result === null ? '' : result.number}
                </p>
               
            </div>
    
          
        </div>

    </div>


</section>

</>

    )
}