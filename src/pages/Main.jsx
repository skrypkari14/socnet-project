import React, {useContext, useState} from 'react';
import Header from "../components/Header/Header";
import ArrowDown from "../assets/icons/ArrowDown";
import White from "../assets/icons/White";
import Dark from "../assets/icons/Dark";
import ru from '../assets/lang/RU.png'
import en from '../assets/lang/EN.png'
import cn from '../assets/lang/CN.png'
import FacebookBig from '../assets/socials/FacebookBig';
import Box from "../assets/icons/Box";
import Support from "../assets/Support";
import QRCODE_dark from '../assets/QRCODE_dark.png'
import QRCODE_light from '../assets/QRCODE_light.png'
import Select from "../components/Select";
import LongCard from "../components/LongCard";
import Button from "../components/Button";

//SOCIALS
import Avito from '../assets/socials/Avito';
import Cinema from '../assets/socials/Cinema';
import Code from '../assets/socials/Code';
import Discord from '../assets/socials/Discord';
import Email from '../assets/socials/Email';
import Google from '../assets/socials/Google';
import Instagram from '../assets/socials/Instagram';
import LinkedIn from '../assets/socials/LinkedIn';
import Microsoft from '../assets/socials/Microsoft';
import More from '../assets/socials/More';
import Reddit from '../assets/socials/Reddit';
import Steam from '../assets/socials/Steam';
import Telegram from '../assets/socials/Telegram';
import TikTok from '../assets/socials/TikTok';
import UserAdd from '../assets/socials/UserAdd';
import Vk from '../assets/socials/Vk';
import Vpn from '../assets/socials/Vpn';
import WhatsApp from '../assets/socials/WhatsApp';
import X from '../assets/socials/X';
import Facebook from "../assets/socials/Facebook";
import {Link} from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import {ThemeContext} from "../context/ThemeProvider";
import Dropdown from "../components/Dropdown/DropdownCatalog";
import Cross from "../assets/icons/Cross";
import FilterModal from "../components/Modals/FilterModal";



const Main = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const [selectedLang, setSelectedLang] = useState(ru);
    const [isOpenLang, setOpenLang] = useState(false);
    const [isOpenHelp, setOpenHelp] = useState(false);
    const [isOpenFilter, setOpenFilter] = useState(false);

    const socials = [
        { name: 'Avito', component: Avito },
        { name: 'Discord', component: Discord },
        { name: 'Facebook', component: Facebook },
        { name: 'Google', component: Google },
        { name: 'Instagram', component: Instagram },
        { name: 'LinkedIn', component: LinkedIn },
        { name: 'Microsoft', component: Microsoft },
        { name: 'Reddit', component: Reddit },
        { name: 'Steam', component: Steam },
        { name: 'Telegram', component: Telegram },
        { name: 'TikTok', component: TikTok },
        { name: 'X', component: X },
        { name: 'WhatsApp', component: WhatsApp },
        { name: 'Vk', component: Vk },
        { name: 'Vpn', component: Vpn },
        { name: 'Cinema', component: Cinema },
        { name: 'Code', component: Code },
        { name: 'UserAdd', component: UserAdd },
        { name: 'Email', component: Email },
        { name: 'More', component: More },
    ];

    return (
        <div className='bg-second dark:bg-main min-h-screen w-full'>
            {isOpenFilter && <FilterModal setOpenFilter={setOpenFilter}/>}
            <Header/>
            <main className='px-10 xl:px-[88px]'>
                <section className='flex max-h-14 overflow-x-clip items-start justify-between'>
                    <div className='flex items-start gap-4'>
                        <Dropdown/>
                        <Button onClick={toggleTheme}
                                className='bg-main w-[56px] h-[56px] dark:text-main text-second dark:bg-second'>
                            {!isDarkMode ? <White/> : <Dark/>}
                        </Button>
                        <div className={`relative z-[100] overflow-hidden rounded-[20px] bg-main transition-catalog duration-500 dark:text-main text-second dark:bg-second ${isOpenLang ? 'w-[175px] max-h-[200px] drop-shadow' : 'w-[88px] max-h-[56px]'}`}>
                            <button onClick={() => setOpenLang(!isOpenLang)} className='outline-none w-full pl-4 flex items-center gap-2 h-[56px] '>
                                <img src={selectedLang}  className={'w-6 h-6'} alt='ru'/>
                                <ArrowDown className={`dark:fill-main fill-second transition-[rotate] ${isOpenLang ? 'rotate-180' : ''}`}/>
                            </button>
                            <div className='py-2'>
                                <div
                                    onClick={() => {
                                        setSelectedLang(ru);
                                        setOpenLang(false);
                                    }}
                                    className={`flex justify-center cursor-pointer ${selectedLang === ru ? 'dark:bg-main bg-second' : ''}`}>
                                    <div className='max-w-[109px] w-full flex items-center justify-between'>
                                        <p className={`text-xl ${selectedLang === ru ? 'text-main dark:text-second font-semibold' : 'font-medium text-second dark:text-main'}`}>Русский</p>
                                        <img src={ru} className={'w-6 h-6'} alt={'ru'}/>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setSelectedLang(en);
                                        setOpenLang(false);
                                    }}
                                    className={`flex justify-center cursor-pointer ${selectedLang === en ? 'dark:bg-main bg-second' : ''}`}>
                                    <div className='max-w-[109px] w-full flex items-center justify-between'>
                                        <p className={`text-xl ${selectedLang === en ? 'text-main dark:text-second font-semibold' : 'font-medium text-second dark:text-main'}`}>English</p>
                                        <img src={en} className={'w-6 h-6'} alt={'ru'}/>
                                    </div>
                                </div>
                                <div
                                    onClick={() => {
                                        setSelectedLang(cn);
                                        setOpenLang(false);
                                    }}
                                    className={`flex justify-center cursor-pointer ${selectedLang === cn ? 'dark:bg-main bg-second' : ''}`}>
                                    <div className='max-w-[109px] w-full flex items-center justify-between'>
                                        <p className={`text-xl ${selectedLang === cn ? 'text-main dark:text-second font-semibold' : 'font-medium text-second dark:text-main'}`}>中國人</p>
                                        <img src={cn} className={'w-6 h-6'} alt={'ru'}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-start justify-between gap-6'>
                        <a className='cursor-pointer hover:bg-main/10 dark:hover:bg-second/10 transition-[background] duration-500 flex items-center justify-center w-[120px] h-[56px] rounded-[20px] border-2 dark:border-second/10 border-main/10 underline dark:text-second text-main font-bold gap-2 text-xl'>
                            Новости
                        </a>
                        <a className='cursor-pointer hover:bg-main/10 dark:hover:bg-second/10 transition-[background] duration-500 flex items-center justify-center w-[120px] h-[56px] rounded-[20px] border-2 dark:border-second/10 border-main/10 dark:text-second text-main font-bold gap-2 text-xl'>
                            Правила
                        </a>
                        <div className={`relative z-[100] transition-max-height-background overflow-hidden duration-500 w-[172px] rounded-[20px] border-2 dark:border-second/10 border-main/10 ${isOpenHelp ? 'max-h-[200px]' : 'max-h-[56px] hover:bg-main/10 dark:hover:bg-second/10'}`}>
                            <div onClick={() => setOpenHelp(!isOpenHelp)} className='cursor-pointer flex items-center gap-2 justify-center h-[56px]'>
                                <p className={'font-bold text-xl text-main dark:text-second'}>Помощь</p>
                                <ArrowDown className={`dark:fill-second fill-main transition-[rotate] ${isOpenHelp ? 'rotate-180' : ''}`}/>
                            </div>
                            <div className='px-4 py-2 dark:bg-main bg-second'>
                                <div className={'cursor-pointer py-4 border-y dark:border-second/10 border-main/10 text-main/10 dark:text-second/10 hover:text-main/30 dark:hover:text-second/30 transition-all text-center font-medium text-xl'}>
                                    <p>База знаний</p>
                                </div>
                                <div
                                    className='cursor-pointer py-4 text-main/10 dark:text-second/10 hover:text-main/30 dark:hover:text-second/30 transition-all text-center font-medium text-xl'>
                                    <p>Инструкции</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <a className='cursor-pointer flex items-center justify-center w-[260px] h-[56px] rounded-[20px] dark:text-main text-second dark:bg-second bg-main font-bold gap-4 text-xl'>
                            <p>Для продавцов</p>
                            <Box className={'dark:fill-main fill-second'}/>
                        </a>
                    </div>
                </section>
                <section className={'py-14 grid grid-cols-2 gap-8'}>
                    <div
                        className='h-48 px-10 dark:bg-third bg-white col-span-1 rounded-[32px] flex items-center justify-between relative'>
                        <div className='max-w-[260px]'>
                            <h4 className='dark:text-second text-main font-bold text-2xl'>Контакты поддержки</h4>
                            <p className='dark:text-second/30 text-black/30 pt-2'>На связи каждый день! Поможем и
                                ответим на любые вопросы!</p>
                        </div>
                        <Support className={'dark:fill-second fill-main absolute bottom-0 right-6'}/>
                    </div>
                    <div
                        className='h-48 px-10 dark:bg-third bg-white col-span-1 rounded-[32px] flex items-center justify-between'>
                        <div>
                            <h4 className='dark:text-second text-main font-bold text-2xl'>Промокоды и акции</h4>
                            <p className='dark:text-second/30 text-black/30 pt-2'>Также актуальные новости о нашем
                                проекте прямо из Telegram! Подписывайтесь!</p>
                        </div>
                        <img src={isDarkMode ? QRCODE_dark : QRCODE_light} alt={'QRCODE'}/>
                    </div>
                    <div
                        className='h-48 dark:bg-third bg-fourth col-span-2 rounded-[32px] flex items-center justify-center'>
                        <h4 className='text-6xl font-bold dark:text-second text-main italic'>РЕКЛАМНЫЙ БЛОК</h4>
                    </div>
                </section>
                <section className='pb-16 relative z-50'>
                    <h4 className='text-main dark:text-second font-bold text-[40px]'>Каталог товаров</h4>
                    <div className='flex items-start  max-h-14 justify-between pt-24'>
                        <div className='flex items-center gap-4'>
                            <Button onClick={() => setOpenFilter(true)} className='bg-main py-3 px-6 text-second dark:bg-second/[0.04]'>
                                <p>Фильтры</p>
                                <ArrowDown className={'fill-second'}/>
                            </Button>
                            <Button className='bg-main py-3 px-6 text-second dark:bg-second/[0.04]'>
                                <p>Сбросить</p>
                            </Button>
                            <Button className='bg-main py-3 px-6 text-second dark:bg-second/[0.04]'>
                                <p>Найти</p>
                            </Button>
                        </div>
                        <div className='relative z-[1000]'>
                            <p className='absolute left-0 -top-[16px] -translate-y-1/2 font-normal text-main dark:text-second text-xl'>Сортировка
                                по</p>
                            <Select/>
                        </div>
                    </div>
                </section>
                <div className='w-full h-[1px] relative z-0 bg-main/[0.08] dark:bg-second/[0.08]'></div>
                <section className='pt-[100px]'>
                    <div className='pr-52 relative w-full'>
                        <h4 className='text-main dark:text-second text-[40px] font-bold'>Facebook - Аккаунты</h4>
                        <div className='flex gap-[22px] absolute -top-10 right-[208px]'>
                            <span
                                className='py-3 px-4 text-second text-lg dark:bg-second/[0.04] bg-main rounded-2xl font-bold'>Цена</span>
                            <span
                                className='py-3 px-4 text-second text-lg dark:bg-second/[0.04] bg-main rounded-2xl font-bold'>Кол-во</span>
                            <span
                                className='py-3 px-4 text-second text-lg dark:bg-second/[0.04] bg-main rounded-2xl font-bold'>Продажи</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[22px] py-10'>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={true} name={'Facebook Autoreg'} star={true} promoted={true}/>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={true} name={'Facebook Autoreg'} star={true} promoted={false}/>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={false} name={'Facebook Autoreg'} star={false} promoted={false}/>
                    </div>
                    <Button
                        className='bg-main dark:bg-second/[0.04] transition-all dark:hover:bg-second/[0.1] hover:bg-main/[0.9] h-[52px] px-6 text-second mx-auto'>
                        <p>Показать ещё</p>
                    </Button>
                </section>
                <section className='py-10'>
                    <h4 className='text-main dark:text-second text-[40px] font-bold'>Facebook - Сообщества</h4>
                    <div className='flex flex-col gap-[22px] py-10'>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={false} name={'Facebook Autoreg'} star={true} promoted={false}/>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={false} name={'Facebook Autoreg'} star={false} promoted={false}/>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={false} name={'Facebook Autoreg'} star={false} promoted={false}/>
                        <LongCard avatar={<FacebookBig/>}
                                  desc={'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format:'}
                                  lightning={false} name={'Facebook Autoreg'} star={false} promoted={false}/>
                    </div>
                    <Button
                        className='bg-main dark:bg-second/[0.04] transition-all dark:hover:bg-second/[0.1] hover:bg-main/[0.9] h-[52px] px-6 text-second mx-auto'>
                        <p>Показать ещё</p>
                    </Button>
                </section>
                <section>
                    <h4 className='text-main dark:text-second text-[40px] font-bold text-center'>Все наши категории</h4>
                    <div className='grid grid-cols-10 gap-4 content-center max-w-[625px] mx-auto pt-[52px] pb-10'>
                        {socials.map((social, index) => {
                            const SocialIcon = social.component;
                            return (
                                <Link to={'#'} key={index}
                                      className='h-12 w-12 dark:bg-second/[0.04] bg-main/[0.04] flex items-center justify-center rounded-2xl col-span-1'>
                                    <SocialIcon/>
                                </Link>
                            );
                        })}
                    </div>
                </section>
                <section>
                    <div
                        className='h-48 dark:bg-third bg-fourth col-span-2 rounded-[32px] flex items-center justify-center'>
                        <h4 className='text-6xl font-bold dark:text-second text-main italic'>РЕКЛАМНЫЙ БЛОК</h4>
                    </div>
                </section>
                <section className='py-10'>
                    <h4 className='text-main dark:text-second text-[40px] font-bold text-center'>Все наши категории</h4>
                    <div className='max-w-[870px] mx-auto pt-[84px]'>
                        <Carousel/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;