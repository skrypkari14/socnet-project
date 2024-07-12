import React, {useState} from 'react';
import ArrowDown from "../../assets/icons/ArrowDown";
import AvitoIcon from "../../assets/socials/Avito";
import DiscordIcon from "../../assets/socials/Discord";
import GoogleIcon from "../../assets/socials/Google";
import InstagramIcon from "../../assets/socials/Instagram";
import LinkedInIcon from "../../assets/socials/LinkedIn";
import MicrosoftIcon from "../../assets/socials/Microsoft";
import RedditIcon from "../../assets/socials/Reddit";
import SteamIcon from "../../assets/socials/Steam";
import TelegramIcon from "../../assets/socials/Telegram";
import TikTokIcon from "../../assets/socials/TikTok";
import XIcon from "../../assets/socials/X";
import WhatsAppIcon from "../../assets/socials/WhatsApp";
import FacebookIcon from "../../assets/socials/Facebook";
import VkIcon from "../../assets/socials/Vk";
import VpnIcon from "../../assets/socials/Vpn";
import CinemaIcon from "../../assets/socials/Cinema";
import CodeIcon from "../../assets/socials/Code";
import UserAddIcon from "../../assets/socials/UserAdd";
import EmailIcon from "../../assets/socials/Email";
import MoreIcon from "../../assets/socials/More";

const DropdownCatalog = () => {
    const [isOpen, setOpen] = useState(false)
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
        { id: 3, label: 'Программное обеспечение', icon: <CodeIcon className={'dark:!fill-main !fill-second'}/>, letter: 'П' },
        { id: 15, label: 'Сервисы накрутки', icon: <UserAddIcon className={'dark:!fill-main !fill-second'}/>, letter: 'С' },
        { id: 5, label: 'Электронные почты', icon: <EmailIcon fill={'dark:!fill-main !fill-second'} stroke={'dark:!stroke-white !stroke-main'}/>, letter: 'Э' },
        { id: 10, label: 'Прочее', icon: <MoreIcon className={'dark:!fill-main !fill-second'}/>, letter: 'Прочее' },
    ];

    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.letter]) acc[item.letter] = [];
        acc[item.letter].push(item);
        return acc;
    }, {});
    return (
        <div
            className={`relative z-[100] dark:bg-second transition-catalog duration-500 overflow-hidden bg-main  text-second dark:text-main font-semibold py-4 px-6 rounded-[20px] text-[24px] leading-6 ${isOpen ? 'max-w-[320px] max-h-[500px]' : 'max-w-[175px] max-h-14'}`}>
            <button onClick={() => {
                setOpen(!isOpen)
            }} className={`flex items-center gap-2 transition-[padding] ${isOpen ? 'pr-[137px]' : ''}`}>
                <p>Каталог</p>
                <ArrowDown className={`dark:fill-main fill-second transition-[rotate] ${isOpen ? 'rotate-180' : ''}`}/>
            </button>
            <div className='mt-6 pr-2 w-full transition-all scrollbar max-h-[400px] overflow-scroll'>
                {Object.keys(groupedItems).map(letter => (
                    <div key={letter} className='py-4 border-t border-second/15 dark:border-main/15 w-full'>
                        <p className='text-left dark:text-main text-second'>{letter}</p>
                        {groupedItems[letter].map(item => (
                            <div key={item.id}
                                 className='flex justify-between items-center mt-4'>
                                <div className='flex items-center text-left gap-2'>
                                    <span className='w-6 h-6'>{item.icon}</span>
                                    <p className='max-w-32 font-medium dark:text-main text-second text-base'>{item.label}</p>
                                </div>
                                <ArrowRightIcon/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
);

export default DropdownCatalog;