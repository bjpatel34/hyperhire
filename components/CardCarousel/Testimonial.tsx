// "use client"
import BoxIcon from '@/utils/icons/box-icon';
import ImageIcon from '@/utils/icons/image-icon';
import MarketingIcon from '@/utils/icons/marketing-icon';
import PhoneIcon from '@/utils/icons/phone-icon';
import TargetIcon from '@/utils/icons/target-icon';
import React from 'react';
import Slider from 'react-slick';

export default function TestimonialSlider() {
  
  const settings = {
    dots: false,
    slidesToShow: 4,      
    slidesToScroll: 1,    
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false, 
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280, // Large screens (lg)
        settings: {
          slidesToShow: 3, // Show 4 slides
        },
      },
      {
        breakpoint: 1024, // When the screen width is 1024px or less
        settings: {
          slidesToShow: 2, // Show 3 slides
        },
      },
      {
        breakpoint: 768, // When the screen width is 768px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 560, // When the screen width is 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <>
     <div className="image-slider-container pt-[50px] px-[20px]">
       <Slider {...settings}>
         <div className='mx-[10px] bg-white bg-opacity-20 p-4 !flex items-center gap-[20px] rounded-[12px] max-w-[332px]'>
             <div className='bg-white bg-opacity-40 p-[12px] rounded-md'>
                 <MarketingIcon/>
             </div>
             <h1 className='font-black text-[24px] text-white'>해외 마케팅</h1>
         </div>
         <div className='mx-[10px] bg-white bg-opacity-20 p-4 !flex items-center gap-[20px] rounded-[12px] max-w-[332px]'>
             <div className='bg-white bg-opacity-40 p-[12px] rounded-md'>
                 <ImageIcon/>
             </div>
             <h1 className='font-black text-[24px] text-white'>퍼블리셔</h1>
         </div>
         <div className='mx-[10px] bg-white bg-opacity-20 p-4 !flex items-center gap-[20px] rounded-[12px] max-w-[332px]'>
             <div className='bg-white bg-opacity-40 p-[12px] rounded-md'>
                 <BoxIcon/>
             </div>
             <h1 className='font-black text-[24px] text-white'>캐드원(제도사)</h1>
         </div>
         <div className='mx-[10px] bg-white bg-opacity-20 p-4 !flex items-center gap-[20px] rounded-[12px] max-w-[332px]'>
             <div className='bg-white bg-opacity-40 p-[12px] rounded-md'>
                 <TargetIcon/>
             </div>
             <h1 className='font-black text-[24px] text-white'>해외 세일즈</h1>
         </div>
         <div className='mx-[10px] bg-white bg-opacity-20 p-4 !flex items-center gap-[20px] rounded-[12px] max-w-[332px]'>
             <div className='bg-white bg-opacity-40 p-[12px] rounded-md'>
                 <PhoneIcon/>
             </div>
             <h1 className='font-black text-[24px] text-white'>해외 마케팅</h1>
         </div>
       </Slider>
     </div>
    </>
  );
}