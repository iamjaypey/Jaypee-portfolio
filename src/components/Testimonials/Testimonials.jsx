import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import {Pagination} from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {

   const clients = [
        {
        img: profilePic1,
        review:
            "lorem Ipsum is just one character in the first world. Lorem Ipsum is just one character in the first world"
        },{
            img: profilePic2,
        review:
            "lorem Ipsum is just one character in the first world. Lorem Ipsum is just one character in the first world"
        },
        {
            img: profilePic3,
        review:
            "lorem Ipsum is just one character in the first world. Lorem Ipsum is just one character in the first world"
        },
        {
            img: profilePic4,
        review:
            "lorem Ipsum is just one character in the first world. Lorem Ipsum is just one character in the first world"
        }
    ]

  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients Reviews </span>
            <span>from my</span>
            <span> Exceptional work</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>

        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index) => {
            return (
                <SwiperSlide key={index}>
                    <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review} </span>
                    </div>
                    
                </SwiperSlide>
            )
})}


        </Swiper>
    </div>
  )
}

export default Testimonials