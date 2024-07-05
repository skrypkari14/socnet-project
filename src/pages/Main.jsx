import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import ArrowDown from "../assets/icons/ArrowDown";
import White from "../assets/icons/White";
import Dark from "../assets/icons/Dark";
import ru from '../assets/RU.png'
import FacebookBig from '../assets/socials/FacebookBig';
import Box from "../assets/icons/Box";
import Support from "../assets/Support";
import QRCODE from '../assets/QRCODE.png'
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


const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        setIsDarkMode(theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, []);
    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
        localStorage.setItem('theme', newTheme);
    };

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
            <Header/>
            <main className='px-[88px]'>
                <section className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Button className='bg-main w-[172px] h-[56px] dark:text-main text-second dark:bg-second'>
                            <p>Каталог</p>
                            <ArrowDown className={'dark:fill-main fill-second'}/>
                        </Button>
                        <Button onClick={toggleTheme}
                                className='bg-main w-[56px] h-[56px] dark:text-main text-second dark:bg-second'>
                            {!isDarkMode ? <White/> : <Dark/>}
                        </Button>
                        <Button className='bg-main w-[88px] h-[56px] dark:text-main text-second dark:bg-second'>
                            <img src={ru} alt='ru'/>
                            <ArrowDown className={'dark:fill-main fill-second'}/>
                        </Button>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <a className='flex items-center justify-center w-[120px] h-[56px] rounded-[20px] border-2 dark:border-[#36383A] border-[#D7DADE] underline dark:text-second text-main font-bold gap-2 text-xl'>
                            Новости
                        </a>
                        <a className='flex items-center justify-center w-[120px] h-[56px] rounded-[20px] border-2 dark:border-[#36383A] border-[#D7DADE] dark:text-second text-main font-bold gap-2 text-xl'>
                            Правила
                        </a>
                        <a className='flex items-center justify-center w-[150px] h-[56px] rounded-[20px] border-2 dark:border-[#36383A] border-[#D7DADE] underline dark:text-second text-main font-bold gap-2 text-xl'>
                            <p>Помощь</p>
                            <ArrowDown className={'dark:fill-second fill-main'}/>
                        </a>
                    </div>
                    <div>
                        <a className='flex items-center justify-center w-[260px] h-[56px] rounded-[20px] dark:text-main text-second dark:bg-second bg-main font-bold gap-4 text-xl'>
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
                        <img src={QRCODE} alt={'QRCODE'}/>
                    </div>
                    <div
                        className='h-48 dark:bg-third bg-fourth col-span-2 rounded-[32px] flex items-center justify-center'>
                        <h4 className='text-6xl font-bold dark:text-second text-main italic'>РЕКЛАМНЫЙ БЛОК</h4>
                    </div>
                </section>
                <section className='pb-16 border-b border-main/[0.08] dark:border-second/[0.08]'>
                    <h4 className='text-main dark:text-second font-bold text-[40px]'>Каталог товаров</h4>
                    <div className='flex items-center justify-between pt-24'>
                        <div className='flex items-center gap-4'>
                            <Button className='bg-main py-3 px-6 text-second dark:bg-second/[0.04]'>
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
                        <div className='relative'>
                            <p className='absolute left-0 -top-[16px] -translate-y-1/2 font-normal text-main dark:text-second text-xl'>Сортировка
                                по</p>
                            <Select/>
                        </div>
                    </div>
                </section>
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