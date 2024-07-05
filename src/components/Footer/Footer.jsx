import React from 'react';
import Cabinet from "../../assets/icons/Cabinet";
import Knowledge from "../../assets/icons/Knowledge";
import Menu from "../../assets/icons/Menu";
import logo from '../../assets/footerLogo.png'

const Footer = () => {
    return (
        <footer>
            <div className='bg-main py-20 rounded-t-[64px] px-[88px]'>
                <div className='flex justify-between'>
                    <div>
                        <h5 className='font-bold text-second text-2xl'>Продавцам</h5>
                        <div className='flex flex-col gap-6 mt-8'>
                            <a href={'#'} className='flex items-center gap-4 text-ocean font-medium text-xl'>
                                <Cabinet/>
                                <a>Стать поставщиком</a>
                            </a>
                            <a href={'#'} className='text-second/60 text-xl'>API</a>
                            <a href={'#'} className='text-second/60 text-xl'>Купить рекламу</a>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold text-second text-2xl'>Покупателям</h5>
                        <div className='flex flex-col gap-6 mt-8'>
                            <a href={'#'} className='flex items-center gap-4 text-ocean font-medium text-xl'>
                                <Knowledge/>
                                <a>FAQ | База знаний</a>
                            </a>
                            <a href={'#'} className='text-second/60 text-xl'>Инструкции по использованию товаров</a>
                            <a href={'#'} className='text-second/60 text-xl underline underline-offset-4'>Промокоды и акции</a>
                            <a href={'#'} className='text-second/60 text-xl'>Партнерская программа</a>
                        </div>
                    </div>
                    <div>
                        <h5 className='font-bold text-second text-2xl'>О проекте</h5>
                        <div className='flex flex-col gap-6 mt-8'>
                            <a href={'#'} className='flex items-center gap-4 text-ocean font-medium text-xl'>
                                <Menu/>
                                <a className='underline underline-offset-4'>Новости</a>
                            </a>
                            <a href={'#'} className='text-second/60 text-xl'>Контакты поддержки</a>
                            <a href={'#'} className='text-second/60 text-xl'>Правила</a>
                        </div>
                    </div>
                </div>
                <img className='mx-auto mt-16' src={logo} alt={'FOOTERLOGO'}/>
                <p className='text-center text-second/30 text-base mt-6'>All Social Networks Shop - Магазин аккаунтов социальных сетей</p>
                <p className='text-center text-second/30 text-base mt-4'>accsoforyou.shop © 2024.  Все права защищены</p>
            </div>
        </footer>
    );
};

export default Footer;