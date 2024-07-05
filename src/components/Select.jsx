import React, {useState} from 'react';
import ArrowDown from "../assets/icons/ArrowDown";

const Select = ({items}) => {

    const [defaultSelectedItem, setDefaultSelectedItem] = useState('Выбрать сортировку');
    const [selectedItem, setSelectedItem] = useState();
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <div className='h-14 px-6 flex bg-main/[.04] text-2xl dark:bg-second/[0.04] gap-[88px] items-center cursor-pointer rounded-[20px]'>
                {selectedItem ? <p className='text-main dark:text-second'>{selectedItem.title}</p> : <p className='text-main/30 dark:text-second/30'>{defaultSelectedItem}</p>}
                <ArrowDown className={`fill-main/30 dark:fill-second transition-all ${open ? 'rotate-180' : ''}`}/>
            </div>
            {open && (
                <div
                    className='absolute top-14 left-0 w-full max-h-32 overflow-y-auto bg-white rounded-md border border-[#e2e2e5]'>
                    {items.map(item => {
                        return (
                            <div className='px-2 py-4 border-b cursor-pointer transition-all hover:bg-[#e2e2e5]'
                                 onClick={() => {
                                     setSelectedItem(item);
                                     setOpen(false);
                                 }}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default Select;