import {Link} from 'react-router-dom'

import c from '../choise/choise.module.scss'
import h from '../header/header.module.scss'

function Choise() {
    return (
  
        <>
        
        <section className={c.section__choise} id='сhoise'>
            <div className={h.container}>
                
                <div className={c.choise}>
                    
                    <div className={c.choise__item}>
                        
                        <div className={c.choise__item_info}>

                        </div>

                        <div className={c.choise__item_content}>
                            
                            <ul className={c.choise__item_contect_ul}>
                                
                                <div className={c.choise__item_contect_ul_line}></div>

                                <li className={c.choise__item_contect_ul_text}>
                                Карьерная консультация
                                </li>

                            </ul>

                            <ul className={c.choise__item_contect_ul}>
                                
                                <div className={c.choise__item_contect_ul_line}></div>

                                <li className={c.choise__item_contect_ul_text}>
                                Помощь в составлении резюме
                                </li>

                            </ul>

                            <ul className={c.choise__item_contect_ul}>
                                
                                <div className={c.choise__item_contect_ul_line}></div>

                                <li className={c.choise__item_contect_ul_text}>
                                Поиск работы
                                </li>

                            </ul>

                            <Link to='/rezume' className={c.choise__item_content_button}>
                                Подробнее
                            </Link>

                        </div>

                    </div>

                    <div className={c.choise__item}>
                        
                        <div  className={c.choise__item_info2}>


                        </div>

                        <div className={c.choise__item_content}>
                            
                            <ul className={c.choise__item_content_ul}>
                                
                                <div className={c.choise__item_content_ul_line}></div>

                                <li className={c.choise__item_content_ul_text}>
                                Подбор персонала
                                </li>

                            </ul>

                            <ul className={c.choise__item_content_ul}>
                                
                                <div className={c.choise__item_content_ul_line}></div>

                                <li className={c.choise__item_content_ul_text}>
                                Повышение квалификации
                                </li>

                            </ul>

                            <ul className={c.choise__item_content_ul}>
                                
                                <div className={c.choise__item_content_ul_line}></div>

                                <li className={c.choise__item_content_ul_text}>
                                Составление вакансий
                                </li>

                            </ul>

                            <Link to='/vakan' className={c.choise__item_content_button}>
                                Подробнее
                            </Link>

                        </div>





                    </div>

                </div>

            </div>
        </section>
        
        

        </>

    );
  }
  
  export default Choise;