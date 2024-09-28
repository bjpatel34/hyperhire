import RightArrowIcon from '@/utils/icons/right-arrow';
import React from 'react';

const SkillsSection = () => {
    return (
        <section className="pt-[50px]">
            <div className="container mx-auto px-[15px]">
                <div className="grid grid-cols-2 gap-4">
                    {[
                        "한국어 능력",
                        "업무 수행 능력",
                        "겸업 여부",
                        "평판 조회"
                    ].map((skill, index) => (
                        <div key={index} className="flex items-center text-white">
                            <div className="flex items-center justify-center h-5 w-5 rounded-[6px] bg-white"><RightArrowIcon /></div>
                            <p className="ml-2 text-[16px] font-black text-white">
                                {skill}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
