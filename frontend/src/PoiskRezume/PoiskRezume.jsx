import { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import svg from '../components/img/search-normal.svg'
import { AiOutlineMenu } from "react-icons/ai";

import '../PoiskVakan/Poisk.scss'
import Mycard from '../Myrezume/Mycard';
import axios from 'axios';


export default function PoiksRezume ({onClick, setAuth, auth, mycardId}) {


  const [myCardPoisk, setMyCardPoisk] = useState([])

  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/resume/?&is_active=true', {
    
    headers: {
        'Content-Type': 'application/json , multipart/form-data',
        'authorization': `Token ${token}`
    }

    })

    .then((res) => {
      setMyCardPoisk(res.data)
      //  window.location.reload()
      })
    .catch((err) => console.error(err))

}, [])

    console.log(myCardPoisk);


  const [accordian, setAccordian] = useState(false)

  const openAcc = () => {
    setAccordian(!accordian)
  }

  const throwOff = () => {
    setpoiskvalue('')
    setCity('')
    setIncome('')
  }

  const token = JSON.parse(localStorage.getItem("token"));

  const [ poiskvalue, setpoiskvalue] = useState('')

  const [postVakan, setPostVakan] = useState([])

  const [postLoading, setPostLoading] = useState(false)

  const [city , setCity] = useState('')  

  const [income , setIncome] = useState('')

  const PoiskValueVakan = (event) => {

    event.preventDefault()

    // http://127.0.0.1:8000/api/resume/?post_work=${poiskvalue}&city=${city}&education=&start_salary=${income}&final_salary=${income}&is_favorited=

    axios.get(`http://127.0.0.1:8000/api/resume/?city=${city}&post_work=${poiskvalue}&company_name=&start_salary=${income}&final_salary_min=${income}&final_salary_max=&start_experience_min=&start_experience_max=&final_experience_min=&final_experience_max=&employment_type=&is_favorited=&salary_min=${income}&salary_max=&is_active=true`,{

    headers: {
      "content-type": "application/json",
      authorization: `Token ${token}`,
    },

  })

  .then(res => {
     setPostVakan(res.data)
     setPostLoading(true)
     console.log(res.data)
   })

  .catch(err => console.error(err))

  }

  

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

<p className='poisk__accordion_text'>Уровень дохода</p>

<input type="number" className='poisk__accordion_selectTwo' placeholder='От'
       value={income} onChange={(event) => setIncome(event.target.value)}
/>


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
             
                           myCardPoisk.map( (info, index) => { 
                                return <Mycard {...info}  key={index} />
                            } ) 
                        
                        }
            
                                </div>

                </div>

          

        </section>
        
        </>
    )
}