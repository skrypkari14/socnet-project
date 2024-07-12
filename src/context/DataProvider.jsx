import React, { createContext, useContext, useState, useEffect } from 'react';
import Discord from "../assets/socials/Discord";
import Google from "../assets/socials/Google";
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// Создаем DataContext
const DataContext = createContext();

// Провайдер для DataContext
export const DataProvider = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState([]);
    const [cardsData, setCardsData] = useState([]);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {

        // Пример данных
        setCategoriesData([
            {
                label: 'Avito',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Самореги', link: '/samoregi'},
                    {label: 'Прокси', link: '/proxy'}
                ],
                logoLink: './assets/socials/Avito.svg',
                categoryLink: '/exampleCategory1'
            },
            {
                label: 'Discord',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Боты', link: '/bots'},
                    {label: 'Серверы', link: '/servers'}
                ],
                logoLink: <Discord/>,
                categoryLink: '/exampleCategory2'
            },
            {
                label: 'Google',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Gmail', link: '/gmail'},
                    {label: 'Google Drive', link: '/google-drive'}
                ],
                logoLink: <Google/>,
                categoryLink: '/exampleCategory3'
            },
            {
                label: 'Instagram',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Реклама', link: '/ads'},
                    {label: 'Публикации', link: '/posts'}
                ],
                logoLink: './assets/',
                categoryLink: '/exampleCategory4'
            },
            {
                label: 'LinkedIn',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Профили', link: '/profiles'},
                    {label: 'Рекрутинг', link: '/recruiting'}
                ],
                logoLink: './assets/logo/linkedin.svg',
                categoryLink: '/exampleCategory5'
            },
            {
                label: 'Microsoft',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Office 365', link: '/office-365'},
                    {label: 'Azure', link: '/azure'}
                ],
                logoLink: './assets/logo/microsoft.svg',
                categoryLink: '/exampleCategory6'
            },
            {
                label: 'Reddit',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Сабреддиты', link: '/subreddits'},
                    {label: 'Посты', link: '/posts'}
                ],
                logoLink: './assets/logo/reddit.svg',
                categoryLink: '/exampleCategory7'
            },
            {
                label: 'Steam',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Игры', link: '/games'},
                    {label: 'Торговая площадка', link: '/marketplace'}
                ],
                logoLink: './assets/logo/steam.svg',
                categoryLink: '/exampleCategory8'
            },
            {
                label: 'Telegram',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Каналы', link: '/channels'},
                    {label: 'Боты', link: '/bots'}
                ],
                logoLink: './assets/logo/telegram.svg',
                categoryLink: '/exampleCategory9'
            },
            {
                label: 'TikTok',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Видео', link: '/videos'},
                    {label: 'Реклама', link: '/ads'}
                ],
                logoLink: './assets/logo/tiktok.svg',
                categoryLink: '/exampleCategory10'
            },
            {
                label: 'Twitter (X.com)',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Твиты', link: '/tweets'},
                    {label: 'Реклама', link: '/ads'}
                ],
                logoLink: './assets/logo/twitter.svg',
                categoryLink: '/exampleCategory11'
            },
            {
                label: 'WhatsApp',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Группы', link: '/groups'},
                    {label: 'Сообщения', link: '/messages'}
                ],
                logoLink: './assets/logo/whatsapp.svg',
                categoryLink: '/exampleCategory12'
            },
            {
                label: 'Facebook',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Страницы', link: '/pages'},
                    {label: 'Реклама', link: '/ads'}
                ],
                logoLink: './assets/logo/facebook.svg',
                categoryLink: '/exampleCategory13'
            },
            {
                label: 'ВКонтакте',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Группы', link: '/groups'},
                    {label: 'Публикации', link: '/posts'}
                ],
                logoLink: './assets/logo/vk.svg',
                categoryLink: '/exampleCategory14'
            },
            {
                label: 'ВПН | Прокси',
                subcategories: [
                    {label: 'VPN', link: '/vpn'},
                    {label: 'Прокси', link: '/proxy'},
                    {label: 'Сервера', link: '/servers'}
                ],
                logoLink: './assets/logo/vpn-proxy.svg',
                categoryLink: '/exampleCategory15'
            },
            {
                label: 'Онлайн Кинотеатры',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Подписки', link: '/subscriptions'},
                    {label: 'Контент', link: '/content'}
                ],
                logoLink: './assets/logo/online-cinema.svg',
                categoryLink: '/exampleCategory16'
            },
            {
                label: 'Программное обеспечение',
                subcategories: [
                    {label: 'Софт', link: '/software'},
                    {label: 'Лицензии', link: '/licenses'},
                    {label: 'Поддержка', link: '/support'}
                ],
                logoLink: './assets/logo/software.svg',
                categoryLink: '/exampleCategory17'
            },
            {
                label: 'Сервисы накрутки',
                subcategories: [
                    {label: 'Лайки', link: '/likes'},
                    {label: 'Подписчики', link: '/followers'},
                    {label: 'Комментарии', link: '/comments'}
                ],
                logoLink: './assets/logo/smm-services.svg',
                categoryLink: '/exampleCategory18'
            },
            {
                label: 'Электронные почты',
                subcategories: [
                    {label: 'Аккаунты', link: '/accounts'},
                    {label: 'Gmail', link: '/gmail'},
                    {label: 'Yahoo', link: '/yahoo'}
                ],
                logoLink: './assets/logo/email.svg',
                categoryLink: '/exampleCategory19'
            },
            {
                label: 'Прочее',
                subcategories: [
                    {label: 'Разное', link: '/miscellaneous'},
                    {label: 'Услуги', link: '/services'},
                    {label: 'Товары', link: '/goods'}
                ],
                logoLink: './assets/logo/misc.svg',
                categoryLink: '/exampleCategory20'
            }
        ]);

        setCardsData([
            { id: 1, name: 'Avito Offers', desc: 'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format', price: 2.3, category: 'Avito', subcategory: 'Аккаунты' },
            { id: 2, name: 'Avito Offers', desc: 'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format', price: 2.3, category: 'Avito', subcategory: 'Аккаунты' },
            { id: 3, name: 'Avito Offers', desc: 'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format', price: 2.3, category: 'Avito', subcategory: 'Самореги' },
            { id: 4, name: 'Avito Offers', desc: 'Excellent quality. Login:Pass:Email:EmailPass:Auth_token Confirmation by email + mail included I Format', price: 2.3, category: 'Avito', subcategory: 'Самореги' },

        ]);

        setUsersData([
            { id: 1, name: 'STONE', status: 'seller', balance: 120, online: true },
            { id: 2, name: 'MORGEN', status: 'buyer', balance: 80, online: false, lastOnlineTime: dayjs.utc('2024-07-12T22:00:00Z')}
        ]);
    }, []);

    return (
        <DataContext.Provider value={{ categoriesData, cardsData, usersData }}>
            {children}
        </DataContext.Provider>
    );
};

// Хук для использования DataContext
export const useData = () => useContext(DataContext);
