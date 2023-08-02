import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'

import h from '../components/header/header.module.scss'
import l from '../preparning/preap.module.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { myContext } from '../Context'
import axios from 'axios'

 export default function Preap ({auth, setAuth}) {

    
    const [

        FullName, setFullName,
        data , setData,
        city , setCity,
        address , setAddress,
        education , setEducation,
        AddEducation , setAddEducation,
        placeWork , setPlaceWork,
        postwork , setPostwork,
        DataStart , setDataStart,
        DataEnd , setDataEnd,
        About , setAbout,
        skills , setSkills,
        startSalary , setStartSalary,
        endSalary , setEndSalary,
        PhoneNumber, setPhoneNumber,

        foto, setFoto,
        recommendation, setRecommendation,
        certificate, setCertificate,

        busyness, setbusyness,
        experience, setexperience
    
    ] = useContext(myContext)


    const fotoUpload = (e) => {
        setFoto(e.target.files[0])
      
    }

    

    const recommendationUpload = (e) => {
        setRecommendation(e.target.files[0])
    }

    const certificateUpload = (e) => {
        setCertificate(e.target.files[0])
    }


    const token = JSON.parse(localStorage.getItem('token'))

    const [userId, setUserId] = useState()

    const navigate = useNavigate('')
  
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/',{

             headers: {
                'Content-Type': 'application/json ',
                authorization: `Token ${token}`
             }
            
            })

        .then(res => {setUserId(res.data[0].id)
            // window.location.reload()
            
        })

    }, [])

    const fotoRef = useRef(null)

    
    const PreapRezume = () => {       
    
        axios.post('http://127.0.0.1:8000/api/resume/', {

            FullName: FullName,
            PhoneNumber: PhoneNumber,
            data: data,
            city: city,
            address: address,

            education: education,

            AddEducation: AddEducation,
            placeWork: placeWork,
            postWork: postwork,
            DataStart: DataStart,
            DataEnd: DataEnd,
            About: About,
            skills: skills,
            startSalary: startSalary,
            endSalary: endSalary,
            user: userId,
            foto: foto , 
            recommendation: recommendation,
            certificate: certificate,
            busyness: busyness, 
            experience: experience
            
        },
        
        {
            headers : {
            'Content-Type': 'application/json , multipart/form-data',
            authorization: `Token ${token}`
            }            
        }

        
        )

        .then(res => { res.request.status === 201 ? navigate('/successtwo') : navigate('/preap')
        window.location.reload()
        } )

        .catch(err => alert('Неправильно ввели данные или не до конца заполнили форму'));



    };

   console.log(foto);
    
  
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

        <div className={l.section__preap}>
            <div className={h.container}>

                <p className={l.preap__title}>Составление резюме</p>
                
                <form onSubmit={PreapRezume} className={l.preap}>
                    
                    <div  className={l.preap__form}>
                        
                        <input value={FullName} onChange={(event) => setFullName(event.target.value)} type="text" placeholder='Ф.И.О' className={l.preap__form_input} />

                        <input value={PhoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} type="text" placeholder='Телефон' className={l.preap__form_input} />

                        <input value={data} type="number" onChange={(event) => setData(event.target.value)} placeholder='Ваш возраст' className={l.preap__form_input} />


                        <div  className={l.preap__form_flex}>
                            
                        {/* <input value={city} onChange={(event) => setCity(event.target.value)} type="text" placeholder='Город' className={l.preap__form_flex_arr} /> */}

      <select value={city} onChange={(event) => setCity(event.target.value)} className={l.preap__form_flex_select} >
        <option value="Город">Город</option>
        <option value="Москва">Москва</option>
        <option value="Санкт-Петербург">Санкт-Петербург</option>
        <option value="Сочи">Сочи</option>
        <option value="Екатеринбург">Екатеринбург</option>
        <option value="Саратов">Саратов</option>
        <option value="Нижний Новгород">Нижний Новгород</option>
        <option value="Новосибирск">Новосибирск</option>
        <option value="Ростов-на-Дону">Ростов-на-Дону</option>
        <option value="Краснодар">Краснодар</option>
      </select>                        

                        <input value={address} onChange={(event) => setAddress(event.target.value)} type="text" placeholder='Адрес проживания' className={l.preap__form_flex_arr} />
                            
                        </div>

                        <div className={l.preap__form_flex}>

      <select onChange={(event) => setEducation(event.target.value)} value={education}  className={l.preap__form_flex_select} >
        <option value="Образование">Образование</option>
        <option value="Среднее">Среднее</option>
        <option value="Среднее специальное">Среднее специальное</option>
        <option value="Неоконченное высшее">Неоконченное высшее</option>
        <option value="Высшее">Высшее</option>
        <option value="Бакалавр">Бакалавр</option>
        <option value="Магистр">Магистр</option>
        <option value="Кандидат наук">Кандидат наук</option>
        <option value="Доктор наук">Доктор наук</option>
      </select>

      <select onChange={(event) => setAddEducation(event.target.value)} value={AddEducation}  className={l.preap__form_flex_select} >
        <option value="Образование">Доп образование</option>
        <option value="Среднее">Среднее</option>
        <option value="Среднее специальное">Среднее специальное</option>
        <option value="Неоконченное высшее">Неоконченное высшее</option>
        <option value="Высшее">Высшее</option>
        <option value="Бакалавр">Бакалавр</option>
        <option value="Магистр">Магистр</option>
        <option value="Кандидат наук">Кандидат наук</option>
        <option value="Доктор наук">Доктор наук</option>
      </select>

                        </div>



                        <div className={l.preap__form_flex}>
                            
                            <input value={placeWork} onChange={(event) => setPlaceWork(event.target.value)}  type="text" placeholder='Прошлое место работы' className={l.preap__form_flex_arr} />
    
                            <input value={postwork} onChange={(event) => setPostwork(event.target.value)} type="text" placeholder='Должность' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <div className={l.preap__form_flex}>
                            
                            <input value={DataStart} onChange={(event) => setDataStart(event.target.value)} type="date" placeholder='Дата начало работы' className={l.preap__form_flex_arr} />
    
                            <input value={DataEnd} onChange={(event) => setDataEnd(event.target.value)} type="date" placeholder='Дата окончания работы' className={l.preap__form_flex_arr} />
                                
                        </div>

                        <input value={experience} onChange={(event) => setexperience(event.target.value)} type="number" placeholder='Опыт работы' className={l.preap__form_input} />


                        <select value={busyness} onChange={(event) => setbusyness(event.target.value)} type="text" placeholder='Занятость' className={l.preap__form_input_selec}>

        <option value="Занятость">Занятость</option>
        <option value="Полная занятость">Полная занятость</option>
        <option value="Частичная занятость">Частичная занятость</option>
        <option value="Проектная работа">Проектная работа</option>
        <option value="Волонтерство">Волонтерство</option>
        <option value="Стажировка">Стажировка</option>

                        </select>

                        <textarea value={About} onChange={(event) => setAbout(event.target.value)} className={l.preap__form_textarea} placeholder='Расскажите о себе'></textarea>

                        <textarea value={skills} onChange={(event) => setSkills(event.target.value)} className={l.preap__form_textarea} placeholder='Ключевые навыки'></textarea>


                        <div className={l.preap__form_footer}>
                            
                            <p className={l.preap__form_footer_text}>Желаемая зарплата</p>

                            <input value={startSalary} onChange={(event) => setStartSalary(event.target.value)} type="number" placeholder='от' className={l.preap__form_footer_input} />

                            <input value={endSalary} onChange={(event) => setEndSalary(event.target.value)} type="number" placeholder='до' className={l.preap__form_footer_input} /> 

                        </div>


                    </div>


                    <div className={l.preap__info}>
                    
        <div className={l.file__info}>
            
            <input type="file" ref={fotoRef} className={l.input_file} onChange={fotoUpload} />

            <p className={l.file__info_text}>

            фото

            </p>

        </div>
        
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} onChange={recommendationUpload} />

            <p className={l.file__info_text}>
            Загрузить
            Рекомендацию
            </p>

        </div>
        
        <div className={l.file__info}>
            
            <input type="file" className={l.input_file} onChange={certificateUpload}/>

            <p className={l.file__info_text}>

            Загрузить
            Сертификат 

            </p>

        </div>

                    </div>

                </form>

                <button  onClick={PreapRezume} className={l.preap__button}>Разместить</button>
                               

            </div>
        </div>

        </>

    )
}