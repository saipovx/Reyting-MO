import o from '../onas/onas.module.scss'
import h from '../header/header.module.scss'

import onas__item from '../img/onas__item2.jpg'

import { Link } from 'react-router-dom'

function Onas () {
    return (

        <section className={o.section__onas} id='onas'>
            <div className={h.container}>

                <p className={o.onas__title}>
                О нас
                </p>
                
                <div className={o.onas}>

                    <img src={onas__item} alt="svg" className={o.onas__img} />
                    
                    <div className={o.onas__item}>
                        
                    <div className={o.onas__item_id}>

                            <div className={o.line}></div>

                            <p className={o.onas__item_id_title}>
                            Рейтинг — кадровое агенство для соискателей и работодателей.
                            </p>

                    </div>

                    <div className={o.onas__item_id}>

                        <div className={o.line}></div>

                        <p className={o.onas__item_id_title}>

                        Рейтинг — обучение сотрудников и повышение квалификации <Link to='https://frantsuz.ru/'><span>( партнер, “Академия Француз”)</span></Link>   

                        </p>

                    </div>

                    </div>

                </div>

            </div>
        </section>

    )
}

export default Onas 