import React from 'react'
import {Link} from 'react-router-dom'

import f from '../footer/footer.module.scss'
import h from '../header/header.module.scss'

// import Logo from './img/logo.'
import Logo2 from './img/HorizontalLogos.png'
import tel from '../img/tel.svg'
import Mail from '../img/mail.svg'
import Geol from '../img/bi_geo-alt-fill.svg'

import img1 from '../img/footer__img1.png'
import img2 from '../img/footer__img2.png'
import img3 from '../img/footer__img3.png'
import img4 from '../img/footer__img4.png'
import img5 from '../img/footer__img5.png'
import img6 from '../img/footer__img6.png'
import img7 from '../img/footer__img7.png'
import img8 from '../img/footer__img8.png'
import img9 from '../img/footer__img9.png'
import img10 from '../img/footer__img10.png'
import img11 from '../img/reyting.png'



function Footer () {
    return (

        <>
      <div className={f.section__footer} id='footer'>
        <div className={h.container}>
            
            <div className={f.footer}>

                <div className={f.footer__logos}>
                     <img src={img11} alt="logo" className={f.footer__logo} />
                     <img src={Logo2} alt="logo" className={f.footer__logoTwo} />
                </div>
                
               
                <div className={f.footer__info}>

                    <div className={f.footer__info_item}>

                        <p className={f.footer__info_item_title}>
                        Контакты
                        </p>
                        
                        <div className={f.footer__info_item_contacts}>
                            <img src={tel} alt="svg" />
                            
                            <div className={f.footer__info_item_contacts_tel}>
                                <Link to="tel:+7(495)9189807">+7(495)9189807</Link>
                                <Link to="tel:+7(968)0915552">+7(968)0915552</Link>
                            </div>

                            <div className={f.footer__info_item_contacts_icons}>

                                <Link to='/' >

<svg width="32" height="32" className={f.telegram} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32ZM16.6919 12.0074C15.2589 12.6034 12.3949 13.8371 8.09992 15.7083C7.40248 15.9856 7.03714 16.257 7.00388 16.5223C6.94767 16.9706 7.50915 17.1472 8.27374 17.3876C8.37774 17.4203 8.4855 17.4542 8.59598 17.4901C9.34822 17.7346 10.3601 18.0207 10.8862 18.0321C11.3633 18.0424 11.8959 17.8457 12.4839 17.4419C16.4968 14.7331 18.5683 13.3639 18.6983 13.3344C18.7901 13.3136 18.9172 13.2874 19.0034 13.3639C19.0895 13.4405 19.0811 13.5855 19.0719 13.6244C19.0163 13.8615 16.8123 15.9106 15.6717 16.971C15.3161 17.3015 15.0639 17.536 15.0124 17.5896C14.8969 17.7096 14.7791 17.823 14.666 17.9321C13.9672 18.6058 13.4431 19.111 14.695 19.936C15.2967 20.3325 15.7781 20.6603 16.2584 20.9874C16.7829 21.3446 17.306 21.7009 17.9829 22.1446C18.1554 22.2576 18.3201 22.375 18.4805 22.4894C19.0909 22.9246 19.6393 23.3155 20.3168 23.2532C20.7105 23.217 21.1172 22.8468 21.3237 21.7427C21.8118 19.1335 22.7712 13.4801 22.9929 11.1505C23.0123 10.9464 22.9879 10.6851 22.9683 10.5705C22.9486 10.4558 22.9076 10.2924 22.7586 10.1715C22.582 10.0283 22.3095 9.99805 22.1877 10.0001C21.6335 10.01 20.7834 10.3056 16.6919 12.0074Z" fill="white" className={f.telegram} />
</svg>

                                </Link>

                                <Link to='/' >

<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 21.7C13.6 22.3 14.8 22.6 16 22.6C19.7 22.6 22.6 19.6 22.6 16.1C22.6 14.3 22 12.7 20.7 11.4C19.4 10.2 17.8 9.5 16 9.5C12.4 9.5 9.39999 12.5 9.39999 16.1C9.39999 17.3 9.7 18.5 10.4 19.6L10.6 19.9L9.89999 22.3L12.4 21.6L12.6 21.7ZM18.2 17C18.4 17 19.4 17.5 19.6 17.6C19.6311 17.6156 19.6623 17.6287 19.6931 17.6417C19.8599 17.7121 20.0156 17.7779 20.1 18.2C20.2 18.2 20.2 18.6 20 19.1C19.9 19.5 19.1 20 18.7 20C18.6322 20 18.5673 20.0057 18.498 20.0119C18.1582 20.0419 17.712 20.0814 16.3 19.5C14.5475 18.799 13.3325 17.0999 12.9913 16.6228C12.9431 16.5554 12.9124 16.5124 12.9 16.5C12.883 16.466 12.8485 16.4116 12.8031 16.3399C12.5819 15.9906 12.1 15.2297 12.1 14.4C12.1 13.4 12.6 12.9 12.8 12.7C13 12.5 13.2 12.5 13.3 12.5H13.7C13.8 12.5 14 12.5 14.1 12.8C14.3 13.2 14.7 14.2 14.7 14.3C14.7 14.3333 14.7111 14.3667 14.7222 14.4C14.7445 14.4667 14.7667 14.5333 14.7 14.6C14.65 14.65 14.625 14.7 14.6 14.75C14.575 14.8 14.55 14.85 14.5 14.9L14.2 15.2C14.1 15.3 14 15.4 14.1 15.6C14.2 15.8 14.6 16.5 15.2 17C15.8751 17.5907 16.4078 17.8254 16.6778 17.9443C16.7278 17.9663 16.7688 17.9844 16.8 18C17 18 17.1 18 17.2 17.9C17.25 17.8 17.375 17.65 17.5 17.5C17.625 17.35 17.75 17.2 17.8 17.1C17.9 16.9 18 16.9 18.2 17Z" className={f.whatsapp} fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C18.1 8 20.1 8.8 21.6 10.3C23.1 11.8 24 13.8 24 15.9C24 20.3 20.4 23.9 16 23.9C14.7 23.9 13.4 23.5 12.2 22.9L8 24L9.10001 20C8.40001 18.8 8 17.4 8 16C8 11.6 11.6 8 16 8Z" fill="white" className={f.whatsapp} />
</svg>
                                    
                                </Link>
                                





                                
                            </div>

                        </div>

                        <div className={f.footer__info_item_mail}>

                        <img src={Mail} alt="svg" />
                        <Link className={f.footer__info_item_mail_text} to='mailto:hr@rating.ru'>hr@rating.ru</Link>

                        </div>  
                        
                        <div className={f.footer__info_item_geo}>
                            

                        <img src={Geol} alt="svg" />
                        <p className={f.footer__info_item_geo_text}>г. Орехово-Зуево ул. Ленина, 36А</p>

                        </div>    

                        <p className={f.footer__info_item_text}>
                        Развлекательный комплекс “Француз”
                        </p>          
                        


                    </div>

                    <div className={f.footer__info_port}>


                    <p className={f.footer__info_item_title}>
                    Наши проекты
                    </p>

                   <div className={f.footer__info_port_imgs}>

                    <Link to='https://шашландия.рф/'>
                    <img src={img1} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://frantsuz-club.ru/'>
                    <img src={img2} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://frantsuz.ru/'>
                    <img src={img3} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://wetop.ru/'>
                    <img src={img4} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='http://comicadze.ru/'>
                    <img src={img5} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://tyteda.ru/'>
                    <img src={img6} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='/'>
                    <img src={img7} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://corp-pitanie.tyteda.ru/'>
                    <img src={img8} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://poyuvsegda.ru/'>
                    <img src={img9} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    <Link to='https://pominki-dostavka.ru/'>
                    <img src={img10} alt="img" className={f.footer__info_port_imgs_img} />
                    </Link>

                    {/* <Link to='/'>
                    <img src={img11} alt="img" className={f.footer__info_port_imgs_img2} />
                    </Link> */}


                   </div>


                    </div>


                </div>


            </div>

        </div>
      </div>


        <div className={f.footer__bottom}>

            <div className={h.container}>

                <div className={f.bottom}>


                    <p className={f.bottom_left}>
                    ИП Авалян. В .Г
                    ИНН: 502807103555
                    </p>


                    <p className={f.bottom_right}>
                    <Link to='/policy'> Политика конфиденциальности</Link>
                    <span>Не является публичной офертой</span>
                     <span>©Все права защищены</span>
                    </p>

                    <p className={f.bottom_center}>
                    Сделано WeTop digital agency 2023
                    </p>

                </div>


            </div>


        </div>

                </>

    )
}

export default Footer