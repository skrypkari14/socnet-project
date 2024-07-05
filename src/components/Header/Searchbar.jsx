import React from 'react';
import Search from "../../assets/icons/Search";
import Filter from "../../assets/icons/Filter";

const Searchbar = () => {
    return (
        <div className='w-full h-[56px] rounded-[20px] dark:bg-third bg-fourth relative'>
            <Search className='absolute top-1/2 left-6 -translate-y-1/2 dark:fill-grayDark fill-gray'/>
            <input className='bg-transparent h-[56px] px-16 outline-0 font-medium dark:text-white text-main w-full' placeholder='Поиск...'/>
            <Filter className='absolute top-1/2 right-6 -translate-y-1/2 dark:fill-grayDark fill-gray'/>
        </div>
    );
};

export default Searchbar;