import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';

//Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'

//Styles
import styles from './Slider.module.css';

//Slider Image
import img1 from '../../image/01.jpeg';
import img2 from '../../image/02.jpeg';
import img3 from '../../image/03.jpg';

const Slider = () => {
    return (
        <div className={styles.container}>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                pagination={{clickable: true}}
                autoplay={{delay: 6000}}
                effect='fade'
            >
                <SwiperSlide><img src={img1} alt='slider' /></SwiperSlide>
                <SwiperSlide><img src={img2} alt='slider' /></SwiperSlide>
                <SwiperSlide><img src={img3} alt='slider' /></SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default Slider;