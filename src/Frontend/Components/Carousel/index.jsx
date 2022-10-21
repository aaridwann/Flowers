import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay'   
import 'swiper/css/effect-fade'   

import Image from 'next/image';

const img = ['https://i.pinimg.com/564x/45/37/b8/4537b8e96664f51b4200d376fc1db277.jpg', 'https://i.pinimg.com/564x/7f/b0/0e/7fb00eb5177c273c0aa246c7bcb7b24a.jpg', 'https://i.pinimg.com/564x/03/49/1d/03491d732449d26d6079bf03f2469423.jpg', 'https://i.pinimg.com/564x/28/2e/de/282ede623451ee3826929b9ee35fb874.jpg', 'https://i.pinimg.com/564x/7b/0d/95/7b0d956e3bd29cce3cdb177aa1b8d7ea.jpg', 'https://i.pinimg.com/564x/0b/12/34/0b1234bb1b9f1e6d3dc2620e5735c816.jpg']


export default function Carousel() {
    return (
        <Swiper
            className=' mb-10 w-full px-4 mx-auto flex items-center justify-center'
            autoplay={true}
            a11y={true}
            effect='fade'
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {img.map((data, i) => (
                <SwiperSlide key={i} >
                    <div className='w-full relative h-40 overflow-hidden bg-slate-50'>
                        <Image src={data} alt='img' layout='fill' objectFit='cover' />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
