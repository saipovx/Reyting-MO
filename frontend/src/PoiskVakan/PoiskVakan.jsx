
import { useEffect, useState } from 'react'
import Mycard from '../Myvakan/Mycard'

import Header from '../components/header/Header'
import svg from '../components/img/search-normal.svg'
import { AiOutlineMenu } from "react-icons/ai";

import './Poisk.scss'
import axios from 'axios';

export default function PoiksVakan ({ auth, setAuth, myVakanId}) {


    const [accordian, setAccordian] = useState(false)



    const openAcc = () => {
      setAccordian(!accordian)
    }

    const throwOff = () => {
      setpoiskvalue('')
      setCity('')
      setExperience('')
      setExperienceDo('')
      setIncome('')
      setIncomeFinaly('')
      setEmployment('')
    }

    const token = JSON.parse(localStorage.getItem("token"));

    const [ poiskvalue, setpoiskvalue] = useState('')

    const [postVakan, setPostVakan] = useState([])

    const [postLoading, setPostLoading] = useState(false)

    const [city , setCity] = useState('') 

    const [experience , setExperience] = useState('') 

    const [experienceDo , setExperienceDo] = useState('') 

    const [income , setIncome] = useState('')

    const [incomeFinaly , setIncomeFinaly] = useState('')

    const [employment , setEmployment] = useState('') 
    

    const PoiskValueVakan = (event) => {

      event.preventDefault()

      axios.get(`http://127.0.0.1:8000/api/vacancy/?city=${city}&job_title=${poiskvalue}&company_name=&start_salary=${income}&final_salary_min=&final_salary_max=&start_experience=${experience}&start_experience_max=&final_experience=${experienceDo}&final_experience_max=&employment_type=${employment}&is_favorited=&salary_min=&salary_max=`, {

      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },

    })

    .then(res => {
       setPostVakan(res.data)
       setPostLoading(true)
     })

    .catch(err => console.error(err))

    }

    const tokenTwo = JSON.parse(localStorage.getItem('token'))

    const [ myVakanPoisk, setmyVakanPoisk] = useState([])
     

    useEffect(() => {
  
      axios.get('http://127.0.0.1:8000/api/vacancy/?&is_active=true', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
    
      })
    
      .then((res) => {
        setmyVakanPoisk(res.data)
        //  window.location.reload()
        })
      .catch((err) => console.error(err))
    
    }, [])


    


    return (
        <>
        
        <Header
        
        link='rezume/#rezume'
        title='Резюме'
                
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

        <section className='section__posk'>

                
                <div className="poisk">
                    
    <div className="poisk__accordion">

        <div className='poisk__accordion_burger' onClick={openAcc} ><AiOutlineMenu /> Фильтр </div>

        {accordian &&
        
        <form onSubmit={PoiskValueVakan} className='anumation'>

          

        <div className='poisk__accordion' >
        <p className='poisk__accordion_text'>Регион</p>


          <select className='poisk__accordion_select' value={city} onChange={(event) => setCity(event.target.value)} >
            <option  value="выберите подходящий">Выберите подходящий</option>
        
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

        </div>  

        <div className='poisk__accordion' >

        <p className='poisk__accordion_text'>Специализация</p>


          <select className='poisk__accordion_select' value={poiskvalue} onChange={(event) => setpoiskvalue(event.target.value)} >
            <option  value="выберите подходящий">Выберите подходящий</option>
            <option  value="Актерское мастерство">Актерское мастерство</option>
            <option  value="Веб-разработчик">Веб-разработчик</option>
            <option  value="Веб-дизайнер">Веб-дизайнер</option>
            <option  value="Пантомима">Пантомима</option>
            <option  value="Клоунада">Клоунада</option>
            <option  value="Ведущий">Ведущий</option>
            <option  value="Бармен">Бармен</option>
            <option  value="Блогер">Блогер</option>
            <option  value="Вокал">Вокал</option>
          </select>

        </div>


        <div className='poisk__accordion' >

        <p className='poisk__accordion_text'>Опыт работы</p>

        <input type="number" value={experience} onChange={(event) => setExperience(event.target.value)} className='poisk__accordion_selectTwo' placeholder='От'
        />

        <input type="number" className='poisk__accordion_selectTwo' placeholder='До'
               value={experienceDo} onChange={(event) => setExperienceDo(event.target.value)}
        />

        </div>

        <div className='poisk__accordion' >

        <p className='poisk__accordion_text'>Уровень дохода</p>

        <input type="number" className='poisk__accordion_selectTwo' placeholder='От'
               value={income} onChange={(event) => setIncome(event.target.value)}
        />


        </div>               


        <div className='poisk__accordion' >

          <p className='poisk__accordion_text'>Тип занятости</p>

          <select className='poisk__accordion_select' value={employment} onChange={(event) => setEmployment(event.target.value)}>
            <option  value="выберите подходящий">Выберите подходящий</option>
            <option  value="Полная занятость">Полная занятость</option>
            <option  value="Частичная занятость">Частичная занятость</option>
            <option  value="Проектная работа">Проектная работа</option>
            <option  value="Волонтерство">Волонтерство</option>
            <option  value="Частичная">Частичная</option>
            <option  value="Стажировка">Стажировка</option>
          </select>

        </div>

        <button  onClick={PoiskValueVakan} className='poisk__accordion_btn'>Применить</button>

        <button onClick={throwOff} className='poisk__accordion_btn'>Сбросить</button>


        </form>
        
      }

    </div>

                    <div className="poisk__item">
                        
            <form className="poisk__item_form" onSubmit={PoiskValueVakan} >

                <input value={poiskvalue} onChange={(event) => setpoiskvalue(event.target.value)} name='poisk' type="text" placeholder='Поиск' className="poisk__item_form_input" />

                <img src={svg} onClick={PoiskValueVakan} className="poisk__item_form_svg" alt="svg" />

            </form> 

            {postLoading ?
            
                postVakan.map( (info, index) => { 
                    return <Mycard {...info}  key={index} />
                } ) 
  
            :
 
                myVakanPoisk.map( (info, index) => { 
                  return <Mycard {...info}  key={index} />
                } ) 
            
            }

                    </div>

                </div>

                {/* myVakanId */}

        </section>
        
        </>
    )
}