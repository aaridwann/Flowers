import Image from 'next/image'
import React from 'react'

export default function TableOrder({ dataOrder }) {
    return (

        <main className='flex flex-col h-56 overflow-y-auto items-start justify-start py-4 gap-4'>
            <ItemsOrderComponent />
            <ItemsOrderComponent />
            <ItemsOrderComponent />
            <ItemsOrderComponent />
        </main>
    )
}

function ItemsOrderComponent({ }) {
    return (<div className='flex gap-4 items-center bg-white/25 py-1 px-4 rounded-[100px]'>
        <div className='flex items-center gap-2'>
            {
                /* === image === */
            }
            <div className="avatar">
                <div className="w-12 rounded-full relative overflow-hidden">
                    <Image alt='img' layout='fill' objectFit='cover' src="https://i.pinimg.com/236x/77/3a/71/773a7159e9bca3ce7a682e22798539f1.jpg" />
                </div>
            </div>
            {
                /* === Description === */
            }
            <div className='text-white'>
                <p>Melati</p>
                <p className=' text-xs'>Rp.17.000</p>
            </div>
        </div>


        <div className=" text-xs tooltip tooltip-open tooltip-accent" data-tip="On Process">
            <progress className="progress progress-accent w-56" value="50" max="100"></progress>
        </div>
    </div>);
}