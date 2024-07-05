import React from 'react';
import Star from "../assets/icons/Star";
import Lightning from "../assets/icons/Lightning";
import CartAdd from "../assets/icons/CartAdd";

const LongCard = ({ name, desc, avatar, lightning, promoted, star }) => {
    return (
        <div
            className={`h-32 px-8 w-full rounded-[32px] transition-all flex items-center justify-between cursor-default ${
                promoted ? 'bg-ocean' : 'dark:bg-second/[0.04] bg-main/[0.02]'
            }`}
        >
            <div className="flex items-center gap-6 text-second">
                {avatar}
                {star && <Star/>}
                <div className="max-w-[362px]">
                    <h5 className={`font-bold text-lg flex items-center gap-2.5 ${promoted ? 'text-second' : 'dark:text-second text-main'}`}>
                        {name}
                        {lightning && <Lightning/>}
                    </h5>
                    <p className={`text-sm font-medium pt-2 ${promoted ? 'text-second' : 'dark:text-second text-main'}`}>{desc}</p>
                </div>
            </div>
            <div className="flex items-center gap-8">
        <span
            className={`text-lg font-bold px-4 h-[52px] flex items-center border-2 transition-all rounded-[20px] ${promoted ? 'text-second border-second/30 hover:bg-second/30' : 'dark:text-second text-main dark:border-second/[0.04] border-main/[0.04] hover:bg-main/[0.04] dark:hover:bg-main/30'}`}>
          $2.3
        </span>
                <span
                    className={`text-lg font-bold px-4 h-[52px] flex items-center border-2 transition-all rounded-[20px] ${promoted ? 'text-second border-second/30 hover:bg-second/30' : 'dark:text-second text-main dark:border-second/[0.04] border-main/[0.04] hover:bg-main/[0.04] dark:hover:bg-main/30'}`}>
          228 шт.
        </span>
                <div className="flex items-center gap-4">
          <span
              className={`text-lg font-bold px-4 h-[52px] flex items-center border-2 transition-all rounded-[20px] ${promoted ? 'text-second border-second/30 hover:bg-second/30' : 'dark:text-second text-main dark:border-second/[0.04] border-main/[0.04] hover:bg-main/[0.04] dark:hover:bg-main/30'}`}>
            52
          </span>
                    <button
                        className={`text-lg font-bold px-6 h-[52px] flex items-center transition-all rounded-[20px] cursor-pointer ${promoted ? 'text-main bg-white hover:bg-white/60' : 'text-second bg-main hover:bg-main/90'}`}>
                        Купить
                    </button>
                    <span
                        className={`text-lg font-bold px-4 h-[52px] flex items-center border-2 transition-all rounded-[20px] ${promoted ? 'text-second border-second/30 hover:bg-second/30' : 'dark:text-second text-main dark:border-second/[0.04] border-main/[0.04] hover:bg-main/[0.04] dark:hover:bg-main/30'}`}>
            <CartAdd className={`${promoted ? 'fill-white' : 'dark:fill-white fill-main'}`}/>
          </span>
                </div>
            </div>
        </div>
    );
};

export default LongCard;