import i from '../info/info.module.scss'

// import {Link} from 'react-router-dom'


function Info__card ({text , img}) {

    // const {img, text} = props

    return (

        <>
        
        <div className={i.info__item}>

            <img src={img} alt="img" className={i.info__item_img} />

            <p className={i.info__item_text}>{text}</p>

        </div>

        </>

    )

}

export default Info__card