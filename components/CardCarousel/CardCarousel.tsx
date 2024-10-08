"use client"
import React, { useState } from 'react';
import RightIcon from "../../utils/icons/right-icon";
import LeftIcon from "../../utils/icons/left-icon";

interface Card {
  id: string;
  title: string;
  content: string;
  htmlFor: string;
}

interface CardCarouselProps {
  cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex w-full h-full">
        <button  onClick={handlePrev}><LeftIcon/></button>
      <div className="slider-container">
        <input type="radio" name="slider" id="item-1" checked={currentIndex===0} />
        <input type="radio" name="slider" id="item-2"  checked={currentIndex===1}/>
        <input type="radio" name="slider" id="item-3" checked={currentIndex===2}/>
        <div className="cards">
        {cards.map((card) => (
          <label key={card?.id} className="card" htmlFor={card.htmlFor} id={card.id}>
                   <div key={card.id} className="bg-white py-[20px] sm:py-[36px] sm:px-[30px] rounded-lg shadow-lg flex flex-col items-center text-black w-full max-w-xs">
                   <img
                     src="images/slider_image.png"
                     alt="Abhishek Gupta"
                     className="w-24 h-24 rounded-full mb-4"
                   />
                   <h3 className="text-[18px] sm:text-[24px] font-black text-[#24252F]">{card?.title}</h3>
                   <p className="text-[14px] sm:text-[18px] text-[#4A77FF]">{card?.content}</p>
                   <div className="flex flex-wrap gap-2 mt-4 justify-center">
                     <span className="border-[1.5px] border-[#C1C5CF] text-[#5E626F] text-[14px] sm:text-[16px] font-black px-3 py-1 rounded-[2px]">
                      마케팅 콘텐츠 제작
                     </span>
                     <span className="border-[1.5px] border-[#C1C5CF] text-[#5E626F] text-[14px] sm:text-[16px] font-black px-3 py-1 rounded-[2px]">
                     인스타그램 관리
                     </span>
                     <span className="border-[1.5px] border-[#C1C5CF] text-[#5E626F] text-[14px] sm:text-[16px] font-black px-3 py-1 rounded-[2px]">
                     트위터 관리
                     </span>
                     <span className="border-[1.5px] border-[#C1C5CF] text-[#5E626F] text-[14px] sm:text-[16px] font-black px-3 py-1 rounded-[2px]">
                     블로그 글 작성
                     </span>
                   </div>
                 </div>
                 </label>
                ))}
        </div>
      </div>
      <button onClick={handleNext}><RightIcon/></button>
    </div>
  );
};

export default CardCarousel;
