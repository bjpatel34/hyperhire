import Link from 'next/link';
import CodeIcon from '@/utils/icons/code-icon';
import ArrowIcon from '@/utils/icons/arrow-icon';
import AvtarIcon from '@/utils/icons/avtar-icon';
import KorIcon from '@/utils/icons/kor-icon';
import GearIcon from '@/utils/icons/gear-icon';

const Footer = () => {
    return (
        <footer className="bg-[#FBFBFB] w-full py-[40px]">
            <div className="container mx-auto px-[15px]">
                    <div className="grid grid-cols-2 gap-3 sm:gap-[20px] lg:grid-cols-6 md:grid-cols-4">
                        <div className="sm:col-span-2 col-span-2">
                            <Link href="/" className="flex items-center">
                                <img
                                    src="/images/footer_logo.png"
                                    alt="Hyperhire Logo"
                                    className="h-full w-auto"
                                />
                            </Link>
                            <p className='text-[#343741] font-black text-[14px] pt-[15px]'>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
                            <h5 className='text-[#5E626F] font-black text-[13px] pt-[15px]'>010-0000-0000</h5>
                            <h5 className='text-[#5E626F] font-black text-[13px] pt-[10px]'>aaaaa@naver.com</h5>
                        </div>
                        <div className='bg-white rounded-[12px] p-[16px]'>
                            <div className='bg-[#EFF1F6] h-[40px] w-[40px] rounded-md flex items-center justify-center'>
                                <CodeIcon />
                            </div>
                            <ul className="pt-[15px]">
                                <li className="mb-4 text-[#343741] text-[14px] font-black">해외 개발자 원격 채용</li>
                                <li className="mb-4 text-[#5E626F] text-[14px] font-black flex gap-[10px]">바로가기 <span><ArrowIcon /></span> </li>
                            </ul>
                        </div>
                        <div className='bg-white rounded-[12px] p-[16px]'>
                            <div className='bg-[#EFF1F6] h-[40px] w-[40px] rounded-md flex items-center justify-center'>
                                <AvtarIcon />
                            </div>
                            <ul className="pt-[15px]">
                                <li className="mb-4 text-[#343741] text-[14px] font-black">외국인 원격 채용 (비개발)</li>
                                <li className="mb-4 text-[#5E626F] text-[14px] font-black flex gap-[10px]">바로가기 <span><ArrowIcon /></span> </li>
                            </ul>
                        </div>
                        <div className='bg-white rounded-[12px] p-[16px]'>
                            <div className='bg-[#EFF1F6] h-[40px] w-[40px] rounded-md flex items-center justify-center'>
                                <KorIcon />
                            </div>
                            <ul className="pt-[15px]">
                                <li className="mb-4 text-[#343741] text-[14px] font-black">한국어 가능 외국인 채용</li>
                                <li className="mb-4 text-[#5E626F] text-[14px] font-black flex gap-[10px]">바로가기 <span><ArrowIcon /></span> </li>
                            </ul>
                        </div>
                        <div className='bg-white rounded-[12px] p-[16px]'>
                            <div className='bg-[#EFF1F6] h-[40px] w-[40px] rounded-md flex items-center justify-center'>
                                <GearIcon />
                            </div>
                            <ul className="pt-[15px]">
                                <li className="mb-4 text-[#343741] text-[14px] font-black">해외 개발자 활용 서비스</li>
                                <li className="mb-4 text-[#5E626F] text-[14px] font-black flex gap-[10px]">바로가기 <span><ArrowIcon /></span> </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pt-[25px]">
                                <li className="mb-3 text-[#343741] text-[12px] font-black">상호명</li>
                                <li className="mb-3 text-[#5E626F] text-[13px] font-black">하이퍼하이어</li>
                                <li className="mb-3 text-[#343741] text-[13px] font-black">Hyperhire India Private Limited</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pt-[25px]">
                                <li className="mb-3 text-[#343741] text-[12px] font-black">대표 CEO</li>
                                <li className="mb-3 text-[#5E626F] text-[13px] font-black">김주현</li>
                                <li className="mb-3 text-[#343741] text-[13px] font-black">Juhyun Kim</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pt-[25px]">
                                <li className="mb-3 text-[#343741] text-[12px] font-black">사업자등록번호 CIN</li>
                                <li className="mb-3 text-[#5E626F] text-[13px] font-black">427-86-01187</li>
                                <li className="mb-3 text-[#343741] text-[13px] font-black">U74110DL2016PTC290812 </li>
                            </ul>
                        </div>
                        <div className='sm:col-span-2 col-span-2'>
                            <ul className="pt-[25px]">
                                <li className="mb-3 text-[#343741] text-[12px] font-black">주소 ADDRESS</li>
                                <li className="mb-3 text-[#5E626F] text-[13px] font-black">서울특별시 강남대로 479, 지하 1층 238호 </li>
                                <li className="mb-3 text-[#343741] text-[13px] font-black">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                                    110053 India</li>
                            </ul>
                        </div>
                    </div>
                <div className="pt-[30px]">
                    <h1 className='text-[#5E626F] text-[13px] font-black'>ⓒ 2023 Hyperhire</h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
