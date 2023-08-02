import m from '../rezume/rezume.module.scss'

import {Link} from 'react-router-dom'


function KompCard (props) {

    const {logo, title, subtitle, star, num , link, linkText} = props

    return (

        <>

<div className={m.komp__block}>

<div className={m.komp__item}>

  <img src={logo} className={m.kopm__item_logo} alt="img" />
  
  <p className={m.komp__item_title}>{title}</p>
  
  <p className={m.komp__item_subtitle}>{subtitle}</p>

  <div className={m.komp__item_otz}>
    <img src={star} alt="svg" />
    <p className={m.komp__item_otz_num}>
        {num}
    </p>
  </div>
  

</div>

<Link to={link} className={m.komp__item_button}>
{linkText}
</Link>

</div>

</>



    )
}

export default KompCard