import { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import '../myLiveVakan/MyLiveVakan.scss'
import MyDataCard from '../Myrezume/my.data.card';
import Mycard from '../Myrezume/Mycard';
import axios from 'axios';




export default function MyLiveRezume ({auth,setAuth, onClick , mycardId}) {

    const token = JSON.parse(localStorage.getItem("token"));

    const [final , setFinal] = useState([])

    const [finesh , setFinesh] = useState(true)

    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/resume/?is_favorited=1`, {

        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },

      })

      // .then(res => getId(res) )

      .then(res => setFinal(res.data))
      .catch(err => console.error(err))
      .finally( () => setFinesh(true) )


    }, [])

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
responses = 'Отклики'
responses__link = '/responsesvakan'

myLiveVakan = '/myliverezume'
auth={auth}
setAuth={setAuth}




 />
        
        <section className='section__mylive'>

                <h1 className='mylive__title'>Мои избранные резюме</h1>

                <div className="mylive">

                  {final.map( (info, index) => { 
                          return <Mycard {...info}  key={index} />
                  } ) }

                </div>
                

        </section>

        </>
    )
}