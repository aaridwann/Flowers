import React from 'react'
import Color from '../../Constant/Colors/Color';

export default function FilterItemsComponent({ className, dataFilter, select, selectedFilter }) {
    return (
        <div className={` ${className} flex w-full gap-2 items-center`}>
            <p className='text-lg'>Filter:</p>
            <div className='w-full h-16 flex gap-3 items-center overflow-x-auto px-4 snap-x'>
                {dataFilter.map((data, i) => (
                    <button onClick={() => select(data)} type='button' style={{ backgroundColor: data == selectedFilter ? Color.second : Color.cerah }} className={`shrink-0 border-none btn-sm btn `} key={i}>
                        <p className='text-center text-xs text-white'>{data}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}