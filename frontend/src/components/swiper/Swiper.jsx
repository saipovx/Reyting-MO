import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper' 



import h from '../header/header.module.scss'

import '../swiper/swiper.scss' 


import vector from '../img/Vector.svg'

// Import Swiper styles
import "swiper/css";




function Swiperr () {
   

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
   

    return (

        <>

<section className="section__swiper" id="">

<div className={h.container}>

    <p className="swiper__title"> Специальные предложения</p>
    
</div>

<div className="swiper__flex">


<div className="swiper__flex__next" ref={navigationPrevRef} >
          <img src={vector} alt="img" />
</div>

<Swiper
slidesPerView={3.1}
centeredSlides={true}
spaceBetween={60}
className="mySwiper"
modules={[ Navigation]}

breakpoints={{
    // when window width is >= 640px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    765: {
      slidesPerView: 1.4,
    },

    1200: {
        slidesPerView: 3,
      },
}}

navigation={{
  prevEl: navigationPrevRef.current,
  nextEl: navigationNextRef.current,
}}
onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;
}}

>



<SwiperSlide className="swiper__global">

    <div className="swiper__otz">
              <p className="block__title">
                  Опубликуй 2 вакансии    
              </p>

              <div className="block__line"></div>

              <div className="block__contents">
                <p className="block__contents__title">3</p>
                <p className="block__contents__subtitle">в подарок</p>
              </div>
    </div>

</SwiperSlide>

<SwiperSlide className="swiper__global">

    <div className="swiper__otz">
              <p className="block__title">
                  Опубликуй 2 вакансии    
              </p>

              <div className="block__line"></div>

              <div className="block__contents">
                <p className="block__contents__title">3</p>
                <p className="block__contents__subtitle">в подарок</p>
              </div>
    </div>

</SwiperSlide>

<SwiperSlide className="swiper__global">

    <div className="swiper__otz">
              <p className="block__title">
                  Опубликуй 2 вакансии    
              </p>

              <div className="block__line"></div>

              <div className="block__contents">
                <p className="block__contents__title">3</p>
                <p className="block__contents__subtitle">в подарок</p>
              </div>
    </div>

</SwiperSlide>

<SwiperSlide className="swiper__global">

    <div className="swiper__otz">
              <p className="block__title">
                  Опубликуй 2 вакансии    
              </p>

              <div className="block__line"></div>

              <div className="block__contents">
                <p className="block__contents__title">3</p>
                <p className="block__contents__subtitle">в подарок</p>
              </div>
    </div>

</SwiperSlide>




</Swiper>


<div className="swiper__flex__prev" ref={navigationNextRef} >
        <img src={vector} alt="img" />
</div>


</div>



        </section>
        

        </>

    )

}

export default Swiperr


