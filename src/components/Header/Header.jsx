import React from 'react';
import Logo from "../../assets/Logo";
import Searchbar from "./Searchbar";
import Cart from "../../assets/icons/Cart";
import Notification from "../../assets/icons/Notification";
import Avatar from "react-avatar";
import ArrowDown from "../../assets/icons/ArrowDown";

const Header = () => {
    return (
        <header className='px-[88px] flex items-start max-h-[56px] pt-[60px] pb-[100px] gap-6'>
            <Logo/>
            <Searchbar/>
            <div className='flex items-center gap-4'>
                <button className='w-[56px] h-[56px] border-2 dark:border-third border-fourth rounded-[20px]'>
                    <Cart className={'dark:fill-[#686B6D] fill-main mx-auto'}/>
                </button>
                <button className='w-[56px] h-[56px] border-2 dark:border-third border-fourth rounded-[20px]'>
                    <Notification className={'dark:fill-[#686B6D] fill-main mx-auto'}/>
                </button>
                <Avatar size='56' round={20} src={'https://api.dicebear.com/9.x/initials/svg?seed=Felix'}/>
                <ArrowDown className={'dark:fill-[#686B6D] fill-main cursor-pointer'}/>
            </div>
        </header>
    );
};

export default Header;