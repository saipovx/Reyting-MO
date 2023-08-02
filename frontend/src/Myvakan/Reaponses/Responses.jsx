
import { useEffect, useState } from "react"
import h from "../../components/header/header.module.scss"
import r from "../../responses/ResponsesVakan.module.scss"
import axios from "axios"
import { useParams } from "react-router-dom"
import Header from "../../components/header/Header"
import Mycard from "../../Myrezume/Mycard"

export default function ResponsesVakanClicks ({ applicants, ...myVakanId}) {

    const tokenTwo = JSON.parse(localStorage.getItem('token'))
    const paramss = useParams()
    const vakanId = myVakanId.myVakanId.findIndex(user => user.id === +paramss.vakanId)
    const mas = myVakanId.myVakanId[vakanId]


    // console.log(mas);

    const [MyClickId, setMyClickId ] = useState([])

    useEffect(() => {
        if (mas) {
          axios
            .get(`http://127.0.0.1:8000/api/vacancy/${mas.id}/get_job_posting/`, {
              headers: {
                'Content-Type': 'application/json , multipart/form-data',
                'authorization': `Token ${tokenTwo}`
              }
            })

            .then(res => {
                const clickIds = res.data.map(item => item.resume);
                setMyClickId(clickIds);
              })

            .catch(err => console.error(err));
        }
    }, [mas, tokenTwo]);

    console.log(MyClickId);

  const [resumeInfo, setResumeInfo] = useState ([])

 

  useEffect(() => {
    if (MyClickId.length > 0) {
      Promise.all(
        MyClickId.map(id =>
          axios.get(`http://127.0.0.1:8000/api/resume/${id}/`, {
            headers: {
              'Content-Type': 'application/json , multipart/form-data',
              'authorization': `Token ${tokenTwo}`
            }
          })
        )
      )
        .then(responses => {
          const resumeData = responses.map(res => res.data);
          setResumeInfo(resumeData);
        })
        .catch(err => console.error(err));
    }
  }, [MyClickId, tokenTwo]);

  

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

responses = 'Отклики'

responses__link = '/responsesvakan'

 />
        
        <section className={r.section__respons}>
            <div className={h.container}>
              


              {MyClickId.length === 0 ?
              
              <p className={r.respons__title}>Для данной вакансии нету откликов </p>

              :

              <p className={r.respons__title}>
              Отклики соискателей  на вашу вакансию
              </p>
              
              }




                <div className={r.respons}>
                    
        {MyClickId.map( (info, index) => { 

                return <Mycard applicants={applicants}  {...info}  key={index} /> 

         } ) }


                </div>


            </div>
        </section>

        </>

    )
}