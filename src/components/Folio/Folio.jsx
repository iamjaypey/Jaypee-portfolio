import React from 'react'
import './Folio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'

const Folio = () => {
  return (
    <div className='folio'>
        <span> Recent Projects</span>
        <span> Portfolio</span>

        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='folio-slider'
        >

            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide> 

            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>


            


        </Swiper>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='folio-slider'
        >
            <SwiperSlide>
                    <img src={MusicApp} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={hoc} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={ecommerce} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>

        </Swiper>

        
            
    </div>
  )
}

export default Folio