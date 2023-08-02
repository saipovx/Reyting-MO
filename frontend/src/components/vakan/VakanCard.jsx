import m from '../vakan/vakan.module.scss'

import {Link} from 'react-router-dom'


function VakanCard (props) {

    const {logo, title, subtitle, star, prov , provOpt, num, linkText, link} = props

    return (

<>


<div className={m.reyting__item}>
                    
                    <div className={m.reyting__item_flex}>

                        <div className={m.reyting__item_flex_fon}></div>

                        <img src={logo} className={m.reyting__item_flex_logo} alt="img" />

                        <p className={m.reyting__item_flex_title}>{title}</p>

                        <p className={m.reyting__item_flex_subtitle}>{subtitle}</p>

                        <div className={m.reyting__item_flex_footer}>
                            
                            <div className={m.reyting__item_flex_footer_item}>
                                <p className={m.reyting__item_flex_footer_item_title}>{prov}</p>
                                <p className={m.reyting__item_flex_footer_item_title}>Опыт: {provOpt} года</p>
                            </div>

                            <div className={m.reyting__item_flex_footer_ite}>
                                
                                <img src={star} alt="svg" />
                                <p className={m.reyting__item_flex_footer_ite_num}>{num}</p>

                            </div>

                        </div>

                    </div>

                    <Link to={link} className={m.reyting__item_link}>{linkText}</Link>

 </div>

</>



    )
}

export default VakanCard