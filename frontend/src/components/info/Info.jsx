import h from '../header/header.module.scss'
import i from '../info/info.module.scss'

import info__data from './Info.data.js'
import Card from '../info/Info__card'


function Info () {

    return (

        <>
        
        <section className={i.section__info} id='info'>
            <div className={h.container}>


                <div className={i.info}>
                    
            {info__data.map( (info, index) => { 
                    return <Card {...info}  key={index} />
            } ) }


                </div>
                

            </div>
        </section>

        </>

    )

}

export default Info