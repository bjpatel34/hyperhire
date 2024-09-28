import React from "react";
import CardCarousel from "../CardCarousel/CardCarousel";
import { motion } from "framer-motion";

import TestimonialSlider from "../CardCarousel/Testimonial";
import SkillsSection from "../SkillSection/Skill";

type Card = {
  id: string;
  title: string;
  content: string;
  htmlFor: string;
};

async function fetchCards(): Promise<Card[]> {
  const res = await fetch('https://hyperhire-3p75.vercel.app/api/cards', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch cards');
  }
  return res.json();
}

const HeroSection = async () => {
  const [cards] = await Promise.all([
    fetchCards(),
    // you can add more API calls here in parallel
  ]);
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full pt-[40px]">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-col md:flex-row gap-[20px] justify-between items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div
              className="mb-10"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button className="arrow-button relative py-2 px-4 bg-white text-[18px] text-[#40E2E8] font-black rounded-lg">
                <span>풀타임, 파트타임</span>
                <div className="arrow"></div>
              </button>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="text-[36px] sm:text-[48px] font-black mt-2 text-white/90"
              >
                최고의 실력을 가진 <br />외국인 인재를 찾고 계신가요?
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[18px] sm:text-[24px] font-black mt-2 text-white/90 mt-4"
              >
                법률 및 인사관리 부담없이 <br className="sm:block hidden" />
                1주일 이내에 원격으로 채용해보세요.
              </motion.p>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[18px] font-black mt-2 text-white/90 mt-4 sm:block hidden underline">
                개발자가 필요하신가요?
              </motion.p>
            </motion.div>

            {/* Feature Section*/}
            <div className="sm:block hidden">
              <div className="grid grid-cols-3 gap-6">
                {["평균 월 120만원", "최대 3회 인력교체", "평균 3일, 최대 10일"].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="border-t-[1px] border-white"
                  >
                    <h3 className="text-lg font-black mb-2 text-white">{feature}</h3>
                    <p className="text-base font-black mb-2 text-white">
                      {feature === "평균 월 120만원"
                        ? "임금을 해당 국가를 기준으로 계산합니다."
                        : feature === "최대 3회 인력교체"
                          ? "막상 채용해보니 맞지 않아도 걱정하지 마세요. "
                          : "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-full">
            <div className="flex justify-center items-center space-x-6">
              <CardCarousel cards={cards}/>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <TestimonialSlider />
        </div>
        <div className="md:hidden">
          <SkillsSection />
        </div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[18px] font-black mt-2 text-[#FBFF23] mt-4 md:hidden underline">
          개발자가 필요하신가요?
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
