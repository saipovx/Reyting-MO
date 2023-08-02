
import h from '../header/header.module.scss'
import n from '../novos/novos.module.scss'

import { Link } from 'react-router-dom'

import img1 from '../img/novos1.jpg'
import img2 from '../img/novos2.jpg'
import img3 from '../img/novos3.jpg'
import img4 from '../img/novos4.jpg'

 function Novos () {
    return (
      <div className={n.section__novos} id='novos'>
        <div className={h.container}>

            <p className={n.novod__title}>
            новости и статьи
            </p>

            <div className={n.novod}>

                <div className={n.novod__item}>
                    <img src={img1} alt="img" className={n.novod__item_img} />
                    <p className={n.novod__item_title}>Актуальные тенденции на рынке труда FMCG-компаний, зима 2023</p>
                    <Link to='/' className={n.novod__item_link}>Подробнее</Link>
                </div>


                <div className={n.novod__item}>
                    <img src={img2} alt="img" className={n.novod__item_img} />
                    <p className={n.novod__item_title}>ANCOR на HR-форуме издательского дома «Коммерсантъ»</p>
                    <Link to='/' className={n.novod__item_link}>Подробнее</Link>
                </div>


                <div className={n.novod__item}>
                    <img src={img3} alt="img" className={n.novod__item_img} />
                    <p className={n.novod__item_title}>Как компаниям создать правильную культуру удаленной работы?</p>
                    <Link to='/' className={n.novod__item_link}>Подробнее</Link>
                </div>


                <div className={n.novod__item}>
                    <img src={img4} alt="img" className={n.novod__item_img} />
                    <p className={n.novod__item_title}>Коммерсантъ FM: Сокращение штата в российских компаниях</p>
                    <Link to='/' className={n.novod__item_link}>Подробнее</Link>
                </div>

            </div>

        </div>
      </div>
    )
}

export default Novos