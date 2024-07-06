import React, {useState} from 'react';
import ArrowDown from "../assets/icons/ArrowDown";
import SmallArrow from "../assets/icons/SmallArrow";

const Select = () => {

    const [defaultSelectedItem, setDefaultSelectedItem] = useState('Выбрать сортировку');
    const [selectedItem, setSelectedItem] = useState();
    const [open, setOpen] = useState(false)
    const items = [
        {
            key: 'item1',
            title: 'цене товара'
        },
        {
            key: 'item2',
            title: 'цене товара'
        },
        {
            key: 'item3',
            title: 'количеству товара'
        },
        {
            key: 'item4',
            title: 'количеству товара'
        },
        {
            key: 'item5',
            title: 'количеству покупок'
        },
        {
            key: 'item6',
            title: 'количеству покупок'
        },
        {
            key: 'item7',
            title: 'названию товара (A - Z)'
        },
        {
            key: 'item8',
            title: 'названию товара (Z - A)'
        },
        {
            key: 'item9',
            title: '% брака товара'
        },
        {
            key: 'item10',
            title: '% брака товара'
        },
        {
            key: 'item11',
            title: 'рейтингу продавца'
        },
        {
            key: 'item12',
            title: 'рейтингу продавца'
        },
    ]
    return (
        <button
            onClick={() => setOpen(!open)}
            className={`relative z-[100] flex overflow-hidden flex-col bg-[#f0f2f6] rounded-[20px] text-2xl dark:bg-[#2d2f32] w-[396px] px-6 py-3 transition-all  ${open ? 'max-h-[1000px]' : 'max-h-14'}`}
        >
            <div className='flex justify-between w-full items-center'>
                {selectedItem ? <p className='text-main dark:text-second'>{selectedItem.title}</p> :
                    <p className='text-main/30 text-2xl dark:text-second/30'>{defaultSelectedItem}</p>}
                <ArrowDown className={`fill-main/30 dark:fill-second transition-all ${open ? 'rotate-180' : ''}`}/>
            </div>
            <div className='mt-6 w-full overflow-hidden'>
                {items.map((item,index) => {
                    return(
                        <div key={item.key} className='py-4 border-t border-main/15 dark:border-second/15'>
                            <div className='flex justify-between'>
                                <p className='dark:text-second/30 text-main/30 text-base font-medium'>{item.title}</p>
                                <SmallArrow className={`dark:fill-second/30 fill-main/30 ${index % 2 === 1 ? '' : 'rotate-180'}`} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </button>
    );
};

export default Select;