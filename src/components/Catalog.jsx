import React, {useState} from 'react';
import ArrowDown from "../assets/icons/ArrowDown";

//SOCIALS
import AvitoIcon from '../assets/socials/Avito';
import CinemaIcon from '../assets/socials/Cinema';
import CodeIcon from '../assets/socials/Code';
import DiscordIcon from '../assets/socials/Discord';
import EmailIcon from '../assets/socials/Email';
import GoogleIcon from '../assets/socials/Google';
import InstagramIcon from '../assets/socials/Instagram';
import LinkedInIcon from '../assets/socials/LinkedIn';
import MicrosoftIcon from '../assets/socials/Microsoft';
import MoreIcon from '../assets/socials/More';
import RedditIcon from '../assets/socials/Reddit';
import SteamIcon from '../assets/socials/Steam';
import TelegramIcon from '../assets/socials/Telegram';
import TikTokIcon from '../assets/socials/TikTok';
import UserAddIcon from '../assets/socials/UserAdd';
import VkIcon from '../assets/socials/Vk';
import VpnIcon from '../assets/socials/Vpn';
import WhatsAppIcon from '../assets/socials/WhatsApp';
import XIcon from '../assets/socials/X';
import FacebookIcon from '../assets/socials/Facebook';


const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { id: 1, label: 'Avito', icon: <AvitoIcon />, letter: 'A' },
        { id: 4, label: 'Discord', icon: <DiscordIcon />, letter: 'D' },
        { id: 6, label: 'Google', icon: <GoogleIcon />, letter: 'G' },
        { id: 7, label: 'Instagram', icon: <InstagramIcon />, letter: 'I' },
        { id: 8, label: 'LinkedIn', icon: <LinkedInIcon />, letter: 'L' },
        { id: 9, label: 'Microsoft', icon: <MicrosoftIcon />, letter: 'M' },
        { id: 11, label: 'Reddit', icon: <RedditIcon />, letter: 'R' },
        { id: 12, label: 'Steam', icon: <SteamIcon />, letter: 'S' },
        { id: 13, label: 'Telegram', icon: <TelegramIcon />, letter: 'T' },
        { id: 14, label: 'TikTok', icon: <TikTokIcon />, letter: 'T' },
        { id: 19, label: 'Twitter (X.com)', icon: <XIcon />, letter: 'T' },
        { id: 18, label: 'WhatsApp', icon: <WhatsAppIcon />, letter: 'W' },
        { id: 20, label: 'Facebook', icon: <FacebookIcon />, letter: 'F' },
        { id: 16, label: 'ВКонтакте', icon: <VkIcon />, letter: 'В' },
        { id: 17, label: 'ВПН | Прокси', icon: <VpnIcon />, letter: 'В' },
        { id: 2, label: 'Онлайн Кинотеатры', icon: <CinemaIcon className={'dark:!fill-main !fill-second'}/>, letter: 'О' },
        { id: 3, label: 'Программное обеспечение', icon: <CodeIcon className={'!dark:!fill-main !fill-second'}/>, letter: 'П' },
        { id: 15, label: 'Сервисы накрутки', icon: <UserAddIcon className={'dark:!fill-main !fill-second'}/>, letter: 'С' },
        { id: 5, label: 'Электронные почты', icon: <EmailIcon fill={'dark:!fill-main !fill-second'} stroke={'dark:!stroke-white !stroke-main'}/>, letter: 'Э' },
        { id: 10, label: 'Прочее', icon: <MoreIcon className={'dark:!fill-main !fill-second'}/>, letter: 'Прочее' },
    ];

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.letter]) acc[item.letter] = [];
        acc[item.letter].push(item);
        return acc;
    }, {});
    console.log(groupedItems)

    return (
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative z-[100] flex overflow-hidden flex-col items-start rounded-[20px] font-bold py-4 text-xl bg-main dark:text-main px-6 text-second dark:bg-second transition-all  ${isOpen ? 'max-w-[320px] max-h-[1000px]' : 'max-w-[175px] max-h-14'}`}
            >
                <div className={`flex items-center gap-2 ${isOpen ? 'pr-[137px]' : ''}`}>
                    <p>Каталог</p>
                    <ArrowDown className={`dark:fill-main fill-second transition-all ${isOpen ? 'rotate-180' : ''}`}/>
                </div>
                <div className='mt-6 pr-2 max-w-[320px] scrollbar overflow-y-scroll overflow-x-hidden w-full'>
                    {Object.keys(groupedItems).map(letter => (
                        <div key={letter} className='py-4 border-t border-second/15 dark:border-main/15 w-full'>
                            <p className='text-left dark:text-main text-second'>{letter}</p>
                            {groupedItems[letter].map(item => (
                                <div key={item.id}
                                     className='flex justify-between items-center mt-4'>
                                    <div className='flex items-center text-left gap-2'>
                                        <span className='w-6 h-6'>{item.icon}</span>
                                        <p className='max-w-32 font-normal dark:text-main text-second text-base'>{item.label}</p>
                                    </div>
                                    <ArrowRightIcon/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </button>
    );
};


const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
);

export default Catalog;