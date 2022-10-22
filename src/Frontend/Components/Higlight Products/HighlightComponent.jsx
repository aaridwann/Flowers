import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Color from '../../Constant/Colors/Color';
import { useRouter } from 'next/router';
import FilterItemsComponent from '../FilterItems/FilterItems';
const dummyFilter = ['engagement', 'wedding', 'graduation', 'prewedding', 'gift']
const fakeHighlight = [
    {
        _id: 1,
        name: 'engagement flowers',
        price: '74500',
        img: 'https://i.pinimg.com/564x/fb/b4/45/fbb445889ad772761d6d22e1b930b9dd.jpg',
        desc: 'beautiful flowers',
        category: 'engagement'
    },
    {
        _id: 2,
        name: 'wedding flowers',
        price: '550000',
        img: 'https://i.pinimg.com/736x/d9/17/1b/d9171b1e9ca80e7fa05580843650684d.jpg',
        desc: 'only for wedding flowers',
        category: 'wedding'
    },
    {
        _id: 3,
        name: 'gift flowers',
        price: '157000',
        img: 'https://i.pinimg.com/736x/24/91/65/249165ad542ff8ad9f515e60c8a3f461.jpg',
        desc: 'only for gift flowers',
        category: 'gift'
    },
    {
        _id: 4,
        name: 'graduation flowers',
        price: '99000',
        img: 'https://i.pinimg.com/564x/a3/a3/15/a3a315bfeca107f199dc3ec04b605ce2.jpg',
        desc: 'graduation flowers',
        category: 'graduation'
    },
    {
        _id: 5,
        name: 'prewedding flowers',
        price: '45000',
        img: 'https://i.pinimg.com/564x/e2/c0/8e/e2c08e570490ab6ec81303e78ec05209.jpg',
        desc: 'prewedding flowers',
        category: 'prewedding'
    },
]

function HighlightComponent() {

    const [filter, setFilter] = useState('')

    function Filter() {
        const res = fakeHighlight.filter((item) => item.category == filter)
        return (
            <Highlight highlightData={res.length !== 0 ? res : fakeHighlight} />
        )
    }

    return (
        <div className=' flex flex-col gap-4 w-full items-center'>

            {/* === Title === */}
            <div className="divider lg:divider-horizontal">
                <p className=' font-letter text-3xl  '>Highlight Products</p>
            </div>

            {/* === filter === */}
            <FilterItemsComponent
                select={(data) => setFilter(prev => prev == data ? '' : data)}
                dataFilter={dummyFilter}
                selectedFilter={filter}
            />
            <Filter />
        </div>
    )
}



export default HighlightComponent

function Highlight({ highlightData }) {
    const router = useRouter()
    return (
        <div className=' flex flex-col items-center gap-4 w-full'>

            {/* === Card Highlight === */}
            <div className=' grid grid-cols-2 w-full h-auto gap-3'>
                {highlightData.map((data, i) => {
                    const { img, name, price, desc, _id } = data
                    i += 1
                    return (
                        <div key={i}>
                            <div className={`w-30 h-80 relative ${i % 2 == 0 && 'mt-20 -mb-8'} border-b pb-4 rounded-b-2xl `}>
                                <div className='w-20 h-20 bg-slate-50 rounded-full absolute ' />
                                <div className='w-full h-3/4 bg-white relative rounded-2xl overflow-hidden'>
                                    <Image src={img || 'https://i.pinimg.com/564x/45/37/b8/4537b8e96664f51b4200d376fc1db277.jpg'} alt='img' layout='fill' objectFit='cover' />
                                </div>
                                <div className=' flex w-full justify-between items-center px-1 gap-2'>
                                    <h1 className=' w-24 text-lg break-words'>{name || 'Flowers Bouquet'}</h1>
                                    <h1 style={{
                                        color: Color.cerah
                                    }} className='text-sm font-bold'>Rp.{price || '99.000'}</h1>
                                </div>

                                <div className=' flex w-full justify-between items-center px-1 gap-2'>
                                    <h1 className='px-1 text-xs truncate '>{desc || 'Flowers with rose'}</h1>
                                    <button onClick={() => router.push(`/products/${_id}`)} type='button' style={{ backgroundColor: Color.cerah }} className=' border-none btn-xs btn '>
                                        <h1 className='text-center text-xs text-white'>{'detail'}</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* === button see more === */}
            <button onClick={() => router.push(`/products`)} type='button' style={{ backgroundColor: Color.cerah }} className=' w-1/2 border-none btn-sm btn mt-8'>
                <p className='text-center text-xs text-white'>See more</p>
            </button>
        </div>
    );
}


