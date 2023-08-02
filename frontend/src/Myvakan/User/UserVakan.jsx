import { useEffect, useState } from 'react';
import Header from '../../components/header/Header'

import './userVakan.scss' 
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function UserVakan ({auth, setAuth, uservaka, mycardId , ...myVakanId}) {

    const paramss = useParams()
    const userVakanId = myVakanId.myVakanId.findIndex(user => user.id === +paramss.userVakanId)
    const mas = myVakanId.myVakanId[userVakanId]

    

    const token = JSON.parse(localStorage.getItem("token"));

    const [selectTrue, setselectTrue] = useState(false)

    const [Text, setText] = useState(false)

  


    useEffect(() => {
        if (mas) {
          axios
            .get(`http://127.0.0.1:8000/api/vacancy/${mas.id}/get_job_posting/`, {
              headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
              },
            })
            .then((res) => setGetClick(res.data[0]))
            .catch((err) => console.error(err));
        }
      }, [mas?.id]);

      

    
    async function handleOtklik (e) {

        setText(!Text)
        setselectTrue(!selectTrue)

        e.preventDefault()

        await axios
    
          .post(`http://127.0.0.1:8000/api/vacancy/${mas.id}/add_job_posting/` ,

          {

            resume_id: selectedId 

          },

          {

              headers: {
                "content-type": "application/json",
                authorization: `Token ${token}`,
              },

          }


          )

          .then(res => window.location.reload())

          .catch(err => console.error(err))

    }

    const [getClick, setGetClick] = useState([])    

      const [selectedId, setSelectedId] = useState()

      const handleSelectChange = (event) => {
        setSelectedId(event.target.value);
      };
      
      const location = useLocation();
      
      const params = new URLSearchParams(location.search);
      const fromPage = params.get('fromPage');





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

 {mas && 
 

  <section className="section__bigTheater">
     <div className="container">
         <div className="bigTheater">
             <div className="bigTheater__top">
                 <p className="bigTheater__top_title">
                 
                 {mas.company_name}

                 <br />

                 </p>
                 <img className="bigTheater__top_pic" src={mas.logo}  alt="" />
             </div>
 
 
             <div className="bigTheater__exp">
                 <div className="bigTheater__exp_two">
 
                     <p className="bigTheater__top_title">
                        {mas.job_title}
                     </p>
 
                     <p className="bigTheater__top_title">
                         От {mas.start_salary} - {mas.final_salary} руб на руки
                     </p>
                 </div>
                 
                 <div className="bigTheater__exp_grid6">
 
 
                 <p className="bigTheater__exp_grid6_bold">
                     Тип занятости:
                 </p>

                 <p className="bigTheater__exp_grid6_gray">{mas.employment_type}</p>
 
                 <p className="bigTheater__exp_grid6_bold">
                     График работы:
                 </p>
                 <p className="bigTheater__exp_grid6_gray">{mas.schedule}</p>
                 </div>
 
                 <div className="bigTheater__exp_near">
                     <p className="bigTheater__exp_near_wk">Опыт работы</p>
                     <p className="bigTheater__exp_near_gr"> от {mas.start_experience} - {mas.final_experience} года</p>
                 </div>  
 
             </div>
 
 
             <div className="bigTheater__opi">
 
                 <p className="bigTheater__opi_txt">О компании</p>
 
                 <ul className="bigTheater__opi_ul">
 
                     <p className="bigTheater__opi_li">
                     {mas.about_company}
                     </p>
 
                 </ul>
                 
             </div>
 
             <div className="bigTheater__opi">
 
                 <p className="bigTheater__opi_txt">Требования</p>
 
                 <ul className="bigTheater__opi_ul">
 
                     <p className="bigTheater__opi_li">
                     {mas.requirements}
                     </p>
 
                 </ul>
                 
             </div>
 
             <div className="bigTheater__opi">
 
                 <p className="bigTheater__opi_txt">Условия Работы</p>
 
                 <ul className="bigTheater__opi_ul">
 
                     <p className="bigTheater__opi_li">
                     {mas.conditions}
                     </p>
 
                 </ul>
                 
             </div>


 {fromPage === 'poisk' &&


 <>

{getClick?.applied_at ? (
  <div className='button'>
    Отправлено
  </div>
) : (
  <button onClick={() => setselectTrue(true)} className='button'>
    Откликнуться
  </button>
)}








{ selectTrue ? 

<form onSubmit={handleOtklik} className='footer__form'>
<select value={selectedId} onChange={handleSelectChange}>
  <option
    value=''
    style={{
      color: '#282828',
      background: '#fff',
      fontSize: '20px',
      fontWeight: '600',
      padding: '20px 0px',
      lineHeight: '160%',
    }}
  >
    Выберите резюме
  </option>
  {mycardId.map((info) => (
    <option
      key={info.id}
      value={info.id}
      style={{
        color: '#282828',
        background: '#fff',
        fontSize: '20px',
        fontWeight: '600',
        padding: '20px 0px',
        lineHeight: '160%',
      }}
    >
      {info.id} {info.postWork}
    </option>
  ))}
</select>

<button onClick={(e) => handleOtklik(e)}>Отправить</button>

</form>
 :

 ''

 }

 
 </>

 }


     
 
 
         </div>
     </div>
 
 </section> 
 
 }





</>

    )
}


