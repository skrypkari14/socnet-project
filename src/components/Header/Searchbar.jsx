import React, { useEffect, useRef, useState } from 'react';
import Search from "../../assets/icons/Search";
import Filter from "../../assets/icons/Filter";
import { useData } from "../../context/DataProvider";
import ArrowDown from "../../assets/icons/ArrowDown";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const Searchbar = () => {
    const { categoriesData, cardsData, usersData } = useData(); // Добавим данные пользователей из контекста

    const userTimezone = dayjs.tz.guess();

    const [filteredCategories, setFilteredCategories] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [groupedCards, setGroupedCards] = useState({});
    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const searchbarRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchbarRef.current && !searchbarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const formatLastOnlineTime = (lastOnlineTime) => {
        const userLocalTime = dayjs.utc(lastOnlineTime).tz(userTimezone);
        return userLocalTime.format('DD.MM.YYYY в HH:mm');
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        filterCategoriesAndCards(value);
        filterUsers(value);

        if (value.trim()) {
            setLoading(true);
            setOpen(true);
        } else {
            setOpen(false);
        }

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const filterCategoriesAndCards = (searchTerm) => {
        if(searchTerm){
            const filtered = categoriesData.filter(category =>
                category.label.toLowerCase().includes(searchTerm.toLowerCase())
            );

            const groupedCards = {};

            filtered.forEach(category => {
                groupedCards[category.label] = {
                    logoLink: category.logoLink,
                    subcategories: {}
                };

                category.subcategories.forEach(subcategory => {
                    const filteredCards = cardsData.filter(card =>
                        card.category.toLowerCase() === category.label.toLowerCase() &&
                        card.subcategory.toLowerCase() === subcategory.label.toLowerCase()
                    );
                    if (filteredCards.length > 0) {
                        groupedCards[category.label].subcategories[subcategory.label] = filteredCards;
                    }
                });

                if (Object.keys(groupedCards[category.label].subcategories).length === 0) {
                    delete groupedCards[category.label];
                }
            });

            setGroupedCards(groupedCards);
            setFilteredCategories(Object.keys(groupedCards).length > 0 ? filtered : []);
        }
    };

    const filterUsers = (searchTerm) => {
        if(searchTerm){
            const filtered = usersData.filter(user =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    return (
        <div ref={searchbarRef} className={`relative z-[101] w-full rounded-[20px] transition-catalog duration-500 overflow-hidden dark:bg-third bg-fourth outline-0 ${isOpen ? 'max-h-[1000px] drop-shadow' : 'max-h-[56px]'}`}>
            <div className='flex items-center justify-between px-6 gap-2'>
                <Search className='dark:fill-grayDark fill-gray'/>
                <input className='bg-transparent h-[56px] outline-none font-medium dark:text-white text-main w-full'
                       placeholder='Поиск...' onChange={handleSearch} value={searchTerm}/>
                <Filter className='dark:fill-grayDark fill-gray'/>
            </div>
            <div className='pt-10'>
                {loading ? (
                    <div className="pb-10 flex justify-center items-center h-full">
                        <div className="flex flex-row gap-2">
                            <div className="w-4 h-4 rounded-full dark:bg-second bg-main animate-bounce"></div>
                            <div className="w-4 h-4 rounded-full dark:bg-second bg-main animate-bounce [animation-delay:-.3s]"></div>
                            <div className="w-4 h-4 rounded-full dark:bg-second bg-main animate-bounce [animation-delay:-.5s]"></div>
                        </div>
                    </div>
                ) : filteredCategories.length === 0 && filteredUsers.length === 0 ?
                    (
                        <div className='pb-10 flex items-center justify-center'>
                            <p className='text-xl text-main/30 dark:text-second/30 font-medium'>Результатов по запросу “<span className='text-main dark:text-second'>{searchTerm}</span>” не найдено</p>
                        </div>
                    )
                    :
                    (
                        <div>
                            {Object.keys(groupedCards).map(category => (
                                <div key={category}>
                                    {Object.keys(groupedCards[category].subcategories).map(subcategory => (
                                        <div key={subcategory} className='pb-6 px-6'>
                                            <p className='text-main dark:text-second font-semibold text-xl'>{category} - {subcategory}</p>
                                            {groupedCards[category].subcategories[subcategory].map(card => (
                                                <div key={card.id} className='ml-10 px-6 py-4 justify-between items-center mt-6 rounded-[20px] flex bg-main/5 dark:bg-second/5'>
                                                    <div className='flex items-center gap-4'>
                                                        <img className='w-10 h-10' alt='LOGO' src={groupedCards[category].logoLink} />
                                                        <div className='max-w-96'>
                                                            <h4 className='text-main dark:text-second font-semibold text-xl cursor-pointer'>{card.name}</h4>
                                                            <p className='text-main dark:text-second font-medium text-sm cursor-default'>{card.desc}</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center gap-10'>
                                                        <span className='leading-none p-4 rounded-[20px] text-main dark:text-second font-bold text-[20px] border-2 border-main/5 dark:border-second/5'>${card.price}</span>
                                                        <ArrowDown className='fill-main dark:fill-second -rotate-90'/>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {filteredUsers.length > 0 && (
                                <div className='pb-6 px-6'>
                                    <p className='text-main dark:text-second font-semibold text-xl'>Пользователи</p>
                                    {filteredUsers.map(user => (
                                        <div key={user.id} className='ml-10 px-6 py-4 flex items-center mt-6 rounded-[20px] bg-main/5 dark:bg-second/5'>
                                            <div className='flex items-center gap-4'>
                                                <img className='w-10 h-10 rounded-full' alt='User Avatar' src={`/assets/avatars/${user.name}.png`} />
                                                <div className='max-w-96 flex items-center gap-4'>
                                                    <h4 className='text-main dark:text-second font-semibold text-xl cursor-pointer'>{user.name}</h4>
                                                    <div className='flex gap-1.5 items-center'>
                                                        <div className={`h-1.5 w-1.5 rounded-full ${user.online ? 'bg-[#04BD6C]' : 'bg-[#F14141]'}`}/>
                                                        {!user.online && (
                                                            <div className='dark:text-white/30 text-black/30 font-medium text-base'>
                                                                Был в сети {formatLastOnlineTime(user.lastOnlineTime)}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Searchbar;
