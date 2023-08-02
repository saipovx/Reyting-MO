import axios from 'axios'
import Mycard from '../Myvakan/Mycard'
import MyDataCardTwo from '../Myvakan/my.data.card'
import Header from '../components/header/Header'
import './MyLiveVakan.scss'
import { useEffect, useState } from 'react'




export default function MyLiveVakan({auth, setAuth ,onClick, myVakanId}) {
    
    const token = JSON.parse(localStorage.getItem("token"));

    const [final , setFinal] = useState([])

    const getId = localStorage.getItem('headrd')


    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/vacancy/?is_favorited=1`, {

        headers: {
          "content-type": "application/json",
          authorization: `Token ${token}`,
        },

      })

      // .then(res => getId(res) )

      .then(res => setFinal(res.data))
      .catch(err => console.error(err))


    },[])






    return (
        <>

        <Header

        link='#onas'
        title='О нас'

        link2='#info' 
        title2='Предложения'

        link3='#kval' 
        title3='Обучение'

        link4='#novos' 
        title4='Новости и статьи '

        link5='#footer' 
        title5='Контакты'

        myRezume = 'Мои резюме'

myRezume_link = '/myrezume'

tarif_link= '/tarifrezume'

auth={auth}
setAuth={setAuth}

myLiveVakan = '/myLiveVakan'


         />
        
        <section className='section__mylive'>


                <h1 className='mylive__title'>Мои избранные вакансии</h1>

                <div className="mylive">

                  {final === null ? <p>нечего нет </p>
                  
                  :
                  
                  <>

                  {final.map( (info, index) => { 
                          return <Mycard {...info}  key={index} />
                  } ) }

                  </>
                  
                  }
                        

                </div>
                

        </section>

        </>
    )
}