
import { useState } from 'react';

import axios from 'axios'

import h from '../components/header/header.module.scss'
import l from '../auth/login.module.scss'

import { Link, useNavigate } from 'react-router-dom';


function LoginAuth ({
     token, setToken ,setAuth, auth
    }) {   

    

    // const [inputValue, setInputValue] = useState("");
    
    const [ValuePocht, setValuePocht] = useState('');

    const [ValuePassw, setValuePassw] = useState(''); 

    const navigate = useNavigate('')

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    
    const Login = (e) => {

        e.preventDefault()

        axios.post(`http://127.0.0.1:8000/api/auth/${emailRegex.test(ValuePocht) ? 'token-email' : 'token-phone'}/`,
        
        {
            email: emailRegex.test(ValuePocht) === true ? ValuePocht : null,
            phone: !emailRegex.test(ValuePocht) ? ValuePocht : null,
            password: ValuePassw,
        },
        
        {
            headers : {

            'Content-Type': 'application/json',


            }
            
        }
        
        )

        .then(res => {
            res.request.status == 200 ? navigate('/') : navigate('/login')
            setAuth(true)
            setToken(res.data.auth_token)
        } )

        .catch(err => console.log(err))
        
    }
    



    
    return (

<section className={l.section__form}>
        <div className={h.container}>
            
            <form className={l.form} onSubmit={Login}>

                <p className={l.form__title}>ВХОД В ЛИЧНЫЙ КАБИНЕТ</p>

            <input type='text'
                onChange={(e) => setValuePocht(e.target.value)}
                value={ValuePocht}
                className={l.form__input} 
                placeholder="Почта или телефон"
             />

                <input type="password" value={ValuePassw} onChange={event => setValuePassw(event.target.value)} className={l.form__input} placeholder="Пароль" />

                <div className={l.form__footer}>

                    <p className={l.form__footer_link}>Еще нет аккаунта?</p>

                    <Link to='/reg' className={l.form__footer_link2}>Зарегистрируйтесь!</Link>


                </div>

                <button onClick={Login} className={l.form__link}>Войти</button>

                <Link to='/reg' className={l.form__footer_exit}>Назад</Link>

            </form>

        </div>
    </section>
        

    )
}

export default LoginAuth