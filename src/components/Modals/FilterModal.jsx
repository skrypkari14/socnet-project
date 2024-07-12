import React from 'react';
import Cross from "../../assets/icons/Cross";
import ArrowDown from "../../assets/icons/ArrowDown";
import {ConfigProvider, Slider} from "antd";
import Search from "../../assets/icons/Search";

const FilterModal = ({setOpenFilter}) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Slider: {
                        colorBgElevated: '#252729',
                        handleSize: 20,
                        handleColor: '#252729',
                        handleActiveColor: '#2C2F32',
                        handleActiveOutlineColor: '#35383A',
                        trackBg: '#222',
                        colorPrimaryBorderHover: '#2C2F32',
                        railSize: 12,
                        borderRadiusXS: 24
                    },
                },
            }}
        >
            <div
                className='fixed z-[1000] top-0 bottom-0 left-0 right-0 bg-black/40 flex flex-col items-center justify-center'>
                <div className='max-w-[1152px] rounded-[20px] w-full p-12 bg-second flex flex-col gap-8'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-main text-[32px] font-bold'>Фильтры</h4>
                        <div onClick={() => {setOpenFilter(false)}}><Cross className='fill-main'/></div>
                    </div>
                    <div className='flex gap-10'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xl text-main font-semibold'>Категория</p>
                            <div
                                className='bg-main/5 rounded-[20px] px-6 h-[56px] flex items-center cursor-pointer gap-[120px]'>
                                <p className={'text-2xl font-medium text-main/30'}>Выбрать</p>
                                <ArrowDown className={'fill-main/30'}/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-2xl text-main font-semibold'>Подкатегория</p>
                            <div
                                className='bg-main/5 rounded-[20px] px-6 h-[56px] flex items-center cursor-pointer gap-[120px]'>
                                <p className={'text-2xl font-medium text-main/30'}>Выбрать</p>
                                <ArrowDown className={'fill-main/30'}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col w-[438px] gap-4'>
                            <p className='text-2xl text-main font-semibold'>Цена товара</p>
                            <div className='flex gap-6'>
                                <div
                                    className='bg-main/5 rounded-[20px] px-6 h-[56px] flex items-center cursor-default gap-[88px]'>
                                    <p className={'text-2xl font-medium text-main/30'}>От</p>
                                    <p className={'text-2xl font-medium text-main/30'}>$0</p>
                                </div>
                                <div
                                    className='bg-main/5 rounded-[20px] px-6 h-[56px] flex items-center cursor-default gap-[88px]'>
                                    <p className={'text-2xl font-medium text-main/30'}>До</p>
                                    <p className={'text-2xl font-medium text-main/30'}>$1000</p>
                                </div>
                            </div>
                            <Slider
                                tooltip={{open: false}}
                                defaultValue={[20, 80]}
                                range
                            />
                        </div>
                        <div className='flex flex-col w-[438px] gap-4'>
                            <p className='text-2xl text-main font-semibold'>Минимальное количество товара</p>
                            <div className='flex items-center gap-6'>
                                <p className={'font-medium text-2xl text-main'}>От</p>
                                <span
                                    className='px-6 h-[56px] font-medium text-2xl text-main/30 bg-main/5 rounded-full flex flex-col justify-center'><p>5</p></span>
                                <p className='font-medium text-2xl text-main'>шт.</p>
                            </div>
                            <Slider
                                tooltip={{open: false}}
                                defaultValue={50}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl text-main font-semibold'>Категория</p>
                        <div
                            className='bg-main/5 rounded-[20px] max-w-[444px] w-full px-6 h-[56px] flex justify-between items-center cursor-pointer '>
                            <p className={'text-2xl font-medium text-main/30'}>Введите имя поставщика</p>
                            <Search className={'fill-main/30'}/>
                        </div>
                    </div>
                    <div className='flex gap-12'>
                        <div className='flex flex-col w-[438px] gap-4'>
                            <p className='text-2xl text-main font-semibold'>Минимальный рейтинг поставщика</p>
                            <div className='flex items-center gap-6'>
                                <p className={'font-medium text-2xl text-main'}>От</p>
                                <span
                                    className='px-6 h-[56px] font-medium text-2xl text-main/30 bg-main/5 rounded-full flex flex-col justify-center'><p>0</p></span>
                            </div>
                            <Slider
                                tooltip={{open: false}}
                                defaultValue={50}
                            />
                        </div>
                        <div className='flex flex-col w-[438px] gap-4'>
                            <p className='text-2xl text-main font-semibold'>Процент брака товара</p>
                            <div className='flex items-center gap-6'>
                                <p className={'font-medium text-2xl text-main'}>До</p>
                                <span
                                    className='px-6 h-[56px] font-medium text-2xl text-main/30 bg-main/5 rounded-full flex flex-col justify-center'><p>0</p></span>
                                <p className='font-medium text-2xl text-main'>%</p>
                            </div>
                            <Slider
                                tooltip={{open: false}}
                                defaultValue={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default FilterModal;