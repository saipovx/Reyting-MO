import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import Home from './components/home/Home'
import Footer from './components/footer/Footer';
import Rezume from './components/rezume/Rezume'
import Vakan from './components/vakan/Vakan';
import ScrollToTop from './components/utils/scrollTop'
import RegAuth from './auth/Reg';
import LoginAuth from './auth/Login';
import AddRezume from './AddRezume/AddRezume';
import TarifRezume from './tarifRezume/TarifRezume';
import TarifVakan from './tarifVakan/TarifVakan';
import OplataRezume from './Oplata/OplataRezume';
import Success from './success/Success';
import Preap from './preparning/Preap';
import SuccessTwo from './preparning/Success';
import MyRezume from './Myrezume/Myrezume';
import SuccessThree from './preparning/SuccessThree';
import PreapLoad from './preparning/PreapLoad';
import AddVakan from './AddVakan/AddVakan';
import OplataVakan from './Oplata/OplataVakan';
import SuccessFour from './success/SuccessFour';
import MyVakan from './Myvakan/Myvakan';
import SuccessVakan from './preparning/SuccessVakan';
import LeadVakan from './AddVakan/leadVakan';
import RezumeUser from './Myrezume/User/RezumeUser';
import MyDataCardTwo from './Myvakan/my.data.card'
import ContextTwo from './ContextVakan';
import UserVakan from './Myvakan/User/UserVakan';
import PoiksVakan from './PoiskVakan/PoiskVakan';
import PoiksRezume from './PoiskRezume/PoiskRezume';
import MyLiveVakan from './myLiveVakan/MyLiveVakan';
import MyLiveRezume from './myLiveRezume/MyLiveRezume';
import TarifNumber from './Myrezume/tarifnumber/TarifNumber';
import OplataNumber from './Myrezume/tarifnumber/OplataNumber';
import SuccessFive from './Myrezume/tarifnumber/seccessFive';
import axios from 'axios';
import ResponsesVakan from './responses/ResponsesVakan';
import ResponsesVakanClicks from './Myvakan/Reaponses/Responses';
import OplataInfo from './OplataInfo/OplataInfo';
import ReturnInfo from './returnInfo/ReturnInfo'
import Services from './OplataInfo/services';
import Konfidi from './OplataInfo/konfidi';
import OplataPrav from './OplataInfo/OplataPrav';


function App() {

  const [mycardId , setMycardId] = useState([])

  const [myVakanId , setmyVakanId] = useState([])


  useEffect(() => {

    axios.get('http://127.0.0.1:8000/api/resume/', {
    
    headers: {
        'Content-Type': 'application/json , multipart/form-data',
        'authorization': `Token ${tokenTwo}`
    }

    })

    .then((res) => {
       setMycardId(res.data)
      //  window.location.reload()
      })
    .catch((err) => console.error(err))

}, [])



useEffect(() => {

  axios.get('http://127.0.0.1:8000/api/vacancy/', {
  
  headers: {
      'Content-Type': 'application/json , multipart/form-data',
      'authorization': `Token ${tokenTwo}`
  }

  })

  .then((res) => {
    setmyVakanId(res.data)
    //  window.location.reload()
    })
  .catch((err) => console.error(err))

}, [])


const deletePost = (id) => {

  axios.delete(`http://127.0.0.1:8000/api/resume/${id}`,
  
  {

    headers: {
      'Content-Type': 'application/json',
      'authorization': `Token ${tokenTwo}`

  }

  }

  )
    .then(() => window.location.reload() )
    .catch(err => console.error(err))
};

const deletePostVakan = (id) => {

  axios.delete(`http://127.0.0.1:8000/api/vacancy/${id}`,
  
  {

    headers: {
      'Content-Type': 'application/json',
      'authorization': `Token ${tokenTwo}`

  }
  
  }

  )
    .then(() => window.location.reload() )
    .catch(err => console.error(err))
};


  const [auth, setAuth] = useState(false)

  const [token, setToken] = useState('')



  useEffect(() => {
    
   
  if(auth) {

      localStorage.setItem('auth', JSON.stringify(auth))
      localStorage.setItem('token', JSON.stringify(token))


    } else

    if(localStorage.getItem('auth') !== 'undefined'){

    setAuth(JSON.parse(localStorage.getItem('auth')))
    setToken(JSON.parse(localStorage.getItem('token')))
   
  }


  }, [auth])

  const [price, setPrice] = useState('')
  const [TarifInfo, setTarifInfo] = useState('')
  const [num_order, setNum_order] = useState('')
  

  const [priceTwo, setPriceTwo] = useState('')

  const [priceThree, setPriceThree] = useState('')


const [cardMassivTwo, setCardMassivTwo] = useState(MyDataCardTwo)

const ClickIdTwo = (id) => {
                       
  setCardMassivTwo(MyDataCardTwo.filter((info) => info.CardIdTwo === +id ) )
    
};

  const [uservaka, setUservakan] = useState(false)

  function applicants () {
    setUservakan(true)

  }

  function employer () {
    setUservakan(false)

  }


  const tokenTwo = JSON.parse(localStorage.getItem('token'))



  return (

    <ContextTwo>

    <BrowserRouter>

    <div className="app" >

      <ScrollToTop />

        <Routes>

          <Route path='/'  element={<Home employer={employer} applicants={applicants} auth={auth} setAuth={setAuth} />} />

          <Route path='/rezume'  element={<Rezume auth={auth} setAuth={setAuth}  />} />

          <Route path='/vakan'  element={<Vakan auth={auth} setAuth={setAuth} />} />
          
          <Route path='/addvakan'  element={<AddVakan auth={auth} setAuth={setAuth} />} />

          <Route path='/addrezume'  element={<AddRezume auth={auth} setAuth={setAuth} />} />

          <Route path='/tarifrezume'  element={<TarifRezume

            price={price}
            TarifInfo={TarifInfo}
            setTarifInfo={setTarifInfo}
            setNum_order={setNum_order}
            setPrice={setPrice}

            auth={auth} setAuth={setAuth}
           
           />} />
           
          <Route path='/oplatarezume'  element={<OplataRezume 
          
          price={price} auth={auth} setAuth={setAuth}


          TarifInfo={TarifInfo}
          setTarifInfo={setTarifInfo}
          num_order={num_order}

          />} />

          <Route path='/oplatavakan'  element={<OplataVakan priceTwo={priceTwo} auth={auth} setAuth={setAuth} />} />

          <Route path='/oplatanumber'  element={<OplataNumber priceThree={priceThree} auth={auth} setAuth={setAuth}
          
          
          />} />

          <Route path='/leadvakan/:userVakanId'  element={<LeadVakan myVakanId={myVakanId} auth={auth} setAuth={setAuth}/>} />

          <Route path='/preap'  element={<Preap  auth={auth} setAuth={setAuth}/>} />

          <Route path='/preapload/:userId'  element={<PreapLoad mycardId={mycardId} auth={auth} setAuth={setAuth} />} />

          <Route path='/myrezume'  element={<MyRezume employer={employer} applicants={applicants} deletePost={deletePost}  auth={auth} setAuth={setAuth}  mycardId={mycardId} />} />

          <Route path='/poiksvakan'  element={<PoiksVakan  auth={auth} setAuth={setAuth} myVakanId={myVakanId} onClick={ClickIdTwo} />} /> 

          <Route path='/poiksrezume'  element={<PoiksRezume mycardId={mycardId} auth={auth} setAuth={setAuth}  />} /> 

          <Route path='/myvakan' element={<MyVakan deletePostVakan={deletePostVakan} auth={auth} setAuth={setAuth}  onClick={ClickIdTwo} myVakanId={myVakanId} applicants={applicants}  />} />
        
          <Route path='/tarifvakan'  element={<TarifVakan
          
            price={price}
            TarifInfo={TarifInfo}
            setTarifInfo={setTarifInfo}
            setNum_order={setNum_order}
            setPrice={setPrice}
            auth={auth} setAuth={setAuth}
          
          />} />

          <Route path='/reg'  element={<RegAuth  auth={auth} setAuth={setAuth}/>} />

          <Route path='/login'  element={<LoginAuth token={token} setToken={setToken} auth={auth} setAuth={setAuth} />} />

          <Route path='/success'  element={<Success auth={auth} setAuth={setAuth} />} />

          <Route path='/successtwo'  element={<SuccessTwo auth={auth} setAuth={setAuth} />} />

          <Route path='/successthree'  element={<SuccessThree auth={auth} setAuth={setAuth} />} />

          <Route path='/successfive'  element={<SuccessFive auth={auth} setAuth={setAuth} />} />

          <Route path='/successfour'  element={<SuccessFour auth={auth} setAuth={setAuth} />} />

          <Route path='/successvakan'  element={<SuccessVakan auth={auth} setAuth={setAuth} />} />

          <Route path='/rezumeuser/:userId'   element={<RezumeUser mycardId={mycardId}  auth={auth} setAuth={setAuth} uservaka={uservaka}  />} />

          {/* <Route path='/otzivuser/:userId'  element={<Otziv auth={auth} setAuth={setAuth} mycardId={mycardId}   />} /> */}

          <Route path='/vakanuser/:userVakanId'  element={<UserVakan uservaka={uservaka}  auth={auth} setAuth={setAuth}  myVakanId={myVakanId} mycardId={mycardId} />} />

          {/* <Route path='/otzivuservakan/:userVakanId'  element={<OtzivVakan auth={auth} setAuth={setAuth}  myVakanId={myVakanId} />} /> */}

          <Route path='/mylivevakan'  element={<MyLiveVakan myVakanId={myVakanId} auth={auth} setAuth={setAuth} onClick={ClickIdTwo} />} />

          <Route path='/myliverezume'  element={<MyLiveRezume mycardId={mycardId} auth={auth} setAuth={setAuth}  />} />

          <Route path='/tarifnumber'  element={<TarifNumber auth={auth} setAuth={setAuth} 
                      price={price}
                      TarifInfo={TarifInfo}
                      setTarifInfo={setTarifInfo}
                      setNum_order={setNum_order}
                      setPrice={setPrice}
          />} />

          <Route path='/responsesvakan' element={<ResponsesVakan myVakanId={myVakanId} applicants={applicants} mycardId={mycardId} />} />

          <Route path='/responsesvakanclicks/:vakanId' element={<ResponsesVakanClicks myVakanId={myVakanId} applicants={applicants} mycardId={mycardId} />} />

          <Route path='/oplatainfo'  element={<OplataInfo />} />

          <Route path='/oplataprav'  element={<OplataPrav />} />

          <Route path='/returninfo'  element={<ReturnInfo />} />

          <Route path='/services'  element={<Services />} />

          <Route path='/policy'  element={<Konfidi />} />



        </Routes>  

         <Footer  />

    </div>
    
    </BrowserRouter>

    </ContextTwo>
  );
}

export default App;
