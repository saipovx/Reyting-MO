
import h from '../header/header.module.scss'
import p from '../port/port.module.scss'

import port1 from '../img/port1.jpg'
import port2 from '../img/port2.jpg'
import port3 from '../img/port3.jpg'
import port4 from '../img/port4.jpg'
import port5 from '../img/port5.jpg'


function Port () {

    return (
      <div className={p.section__port} id='port'>
        <div className={h.container}>
            
            <p className={p.port__title}>Наши партнеры</p>

            <div className={p.port}>
                
                <img src={port1} alt="img" className={p.port__img} />
                <img src={port2} alt="img" className={p.port__img} />
                <img src={port3} alt="img" className={p.port__img} />
                <img src={port4} alt="img" className={p.port__img} />
                <img src={port5} alt="img" className={p.port__img} />

            </div>

        </div>
      </div>
    )

}

export default Port