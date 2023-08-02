
import {Link} from 'react-router-dom'

import h from '../header/header.module.scss'
import k from '../kval/kval.module.scss'

 function Kval () {

    return (


        <>
        
      <section className={k.section__kval} id='kval'>
        <div className={h.container}>

            <p className={k.kval__title}>
            Повышение квалификации
            </p>

            
            
            <div className={k.kval}>
                
                <div className={k.kval__item}>
                    <p className={k.kval__item_title}>Повышайте свой профессиональный уровень</p>
                    <Link to='https://frantsuz.ru/' className={k.kval__item_link}>Подробнее</Link>
                </div>

                <p className={k.kval__item_subtitle}>Обучайте своих сотрудников</p>


            </div>

        </div>
      </section>


      <section className={k.section__kon}>
        <div className={h.container}>
            
            <p className={k.kon__title}>
            Получите бесплатную консультацию
            </p>

            <div className={k.kon__item}>
                
    <select name="selectedFruit" className={k.kon__item_select}>
        <option className={k.kon__item_select_link} value="apple">Что вы ищете</option>
        <option className={k.kon__item_select_link}  value="banana">Banana</option>
        <option className={k.kon__item_select_link} value="orange">Orange</option>
    </select>

    <form className={k.kon__item_form}>
        <input type="mail" className={k.kon__item_form_mail} placeholder='Ваше имя' />
        <input type="number" className={k.kon__item_form_mail} placeholder='Телефон' />
        <input type="button" value="Оставить заявку" className={k.kon__item_form_button} />
    </form>

            </div>

        </div>
      </section>
        
        
        
        </>



    )
  
}

export default Kval