import { useState } from 'react';
import axios from 'axios'

import f from '../auth/Reg.module.scss'
import h from '../components/header/header.module.scss'

import { Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';


function RegAuth () {
    
    const [ValueFerst, setValueFerst] = useState('');

    const [ValueLast, setValueLast] = useState(''); 

    const [ValuePocht, setValuePocht] = useState('');

    const [ValuePassw, setValuePassw] = useState(''); 

    const [ValuePasswEnd, setValuePasswEnd] = useState(''); 
    
    const [ValueTel, setValueTel] = useState('');  
    
    const [ValueType, setValueType] = useState('');   

    const [modal, setmodal] = useState(false)

   

    const navigate = useNavigate ('')  



    const hanClick =  (e) => {

        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/users/', {

       phone: ValueTel ,
       first_name: ValueLast,
       last_name: ValueFerst,
       email: ValuePocht,
       password: ValuePassw,
       re_password: ValuePasswEnd,
       user_type: ValueType ,

    },  {

        headers: {
            'Content-Type': 'application/json',

        }

    })

    .then(res => { res.request.status == 201 ? navigate('/login') : navigate('') } )

    .catch(err => {
    
    err.message === 'Request failed with status code 400' ? setmodal(true) : setmodal(false)

    } )
}






 
    return (
        
        <section className={f.section__form}>

            <div className={h.container}>

            {modal ?

                <div className={f.form__modal}>
                    <p>не правильно ввели данные</p>
                </div>

                :

                ''             
            }
                    



        <div className={f.form} >

            <p className={f.form__title}>Регистрация</p>


            <form className={f.info} onSubmit={hanClick}>


            <div className={f.info__item}>

            <input type="text" className={f.form__input} placeholder="Фамилия" 
            value={ValueFerst} onChange={event => setValueFerst(event.target.value)}
            />

            <input type="text" className={f.form__input}  placeholder="Имя"
            value={ValueLast} onChange={event => setValueLast(event.target.value)}
            />

            <input type="tel" className={f.form__input}  placeholder="Телефон"
            value={ValueTel} onChange={event => setValueTel(event.target.value)}
            />

            </div>


            <div class={f.info__item}>
            
            <input type="email" className={f.form__input} placeholder="Почта"
            value={ValuePocht} onChange={event => setValuePocht(event.target.value)}
            />

            <input type="password" className={f.form__input} placeholder="Пароль"
            value={ValuePassw} onChange={event => setValuePassw(event.target.value)}
            />

            <input type="password" className={f.form__input} placeholder="Повторите пароль"
            value={ValuePasswEnd} onChange={event => setValuePasswEnd(event.target.value)}
            />

            <select className={f.form__inputtwo} value={ValueType} onChange={event => setValueType(event.target.value)}>
                <option style={{fontSize: '20px', border: 'none'}} value="">Вибирете</option>
                <option style={{fontSize: '20px', border: 'none'}} value="employer">Работадатель</option>
                <option style={{fontSize: '20px', border: 'none'}} value="job_seeker">Соискатель</option>
            </select>

            </div>
            
            </form>


            <div className={f.form__footer}>

                <p className={f.form__footer_link}>Есть аккаунт?</p>

                <Link to='/login' className={f.form__footer_link2} >Войдите! </Link>

            </div>

            <input type="submit" onClick={hanClick} value='Зарегистрироваться' className={f.form__link}/>

            <Link to='/' className={f.form__footer_exit}>Назад</Link>

            </div>

        </div>  

</section>




    )
}

export default RegAuth