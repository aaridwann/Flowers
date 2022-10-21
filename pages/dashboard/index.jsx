import React, { useEffect, useState } from 'react'
import LayoutDahsboard from '../../src/Frontend/Components/LayoutDashboard/LayoutDahsboard'
import { FaArrowLeft, FaShareAlt, FaHeart, FaCartPlus } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/router';
import CardTransactionProfileComponent from '../../src/Frontend/Components/Card Transaction Profile/CardTransactionProfile';
import Color from '../../src/Frontend/Constant/Colors/Color'

const dummyDashboard = {
    name: 'Lola',
    order: 10,
    state: 'Surabaya',
    transaction: 20,
    loved: 5,
    img: 'https://i.pinimg.com/736x/ff/da/a1/ffdaa166bd56a3c37f3bf8d335f4533c.jpg',
    transactionList: [
        {
            _id: '1',
            name: 'graduation bouquet',
            img: 'https://i.pinimg.com/564x/93/b7/3e/93b73e7f3b3624a1cb28f79fa58b7efd.jpg',
            desc: 'Flower Source: Roses, Eustoma, Gerbera, ',
        },
        {
            _id: '2',
            name: 'engagement bouquet',
            img: 'https://i.pinimg.com/564x/79/7b/43/797b43a3e4179874d37b7ba21ef520e5.jpg',
            desc: 'Flower Source: Roses, Eustoma, Gerbera, ',
        },
        {
            _id: '3',
            name: 'wedding bouquet',
            img: 'https://i.pinimg.com/564x/16/c9/d4/16c9d4589bf6bfa4d5ae03a78e6fcdae.jpg',
            desc: 'Flower Source: Roses, Eustoma, Gerbera, ',
        },
        {
            _id: '4',
            name: 'standing flower',
            img: 'https://i.pinimg.com/564x/e9/11/97/e911978cc7361c2d4c5068a746dfe0b6.jpg',
            desc: 'Flower Source: Roses, Eustoma, Gerbera, ',
        },
        {
            _id: '5',
            name: 'anniversary flower',
            img: 'https://i.pinimg.com/564x/ba/99/83/ba998367074a65e606b2bb71e1eb5a5c.jpg',
            desc: '',
        },
        {
            _id: '6',
            name: 'birthday bouquet',
            img: 'https://i.pinimg.com/564x/2b/5b/4f/2b5b4fc6d29f40a80b67a20a1466b7e3.jpg',
            desc: 'Flower Source: Roses, Eustoma, Gerbera, ',
        },
    ]
}

function Dashboard() {
    const router = useRouter()
    function back() {
        router.back()
    }
    return (
        <LayoutDahsboard>
            <div className='w-full z-[1000] md:w-1/2 mx-auto flex flex-col overflow-hidden '>
                <TopNavbar back={back} />
                <CardProfile name={dummyDashboard.name} state={dummyDashboard.state} order={dummyDashboard.order} transaction={dummyDashboard.transaction} loved={dummyDashboard.loved} img={dummyDashboard.img} />
                <TransactionComponent transactionList={dummyDashboard.transactionList} />
                <h1>Status</h1>
            </div>
        </LayoutDahsboard>
    )
}

export default Dashboard




function TopNavbar({ back, title }) {
    return (
        <div className=' w-full px-8 flex items-center mt-4 justify-between'>
            <button onClick={back}>
                <FaArrowLeft size={25} />
            </button>
            <p className=' text-xl font-semibold text-white '>{title || `Rose`}</p>
            <button>
                <FaCartPlus size={25} />
            </button>
        </div>
    );
}

function CardProfile({ name, state, order, transaction, loved, img }) {
    const [start, setStart] = useState(false)

    useEffect(() => {
        setStart(prev => prev = true)
    }, [])

    return (
        <div className={` w-4/5 md:w-3/5 mx-auto flex items-center justify-start flex-col relative h-52 bg-slate-200/75 shadow-2xl rounded-2xl duration-500 ${start ? 'mt-16 rotate-0 ' : ' rotate-45  mt-[2000px]'}   `}>
            <div className={`w-24 h-24 rounded-full bg-slate-200 absolute -top-12 shadow-lg overflow-hidden delay-200 duration-500 ease-in-out ${start ? 'ml-0' : 'ml-[1000px]'} `}>
                <Image src={img || 'https://i.pinimg.com/564x/ac/63/ea/ac63eac1090287a5971a8bdbdc96f1d9.jpg'} alt='avatar' layout='fill' objectFit='cover' />
            </div>
            <p className=' text-3xl mt-14 font-bold '>{name || 'Adriana'}</p>
            <p className='text-md'>{state || 'Jakarta'}</p>
            <div className=' w-full h-full flex py-4 '>
                <div className=' w-full h-full text-center '>
                    <h2 className=' font-bold text-2xl'>{transaction || 25}</h2>
                    <h3>Transaction</h3>
                </div>
                <div className=' w-full h-full border-slate-300 border-x-2 text-center '>
                    <h2 className='font-bold text-2xl'>{loved || 25}</h2>
                    <h3>Wished</h3>
                </div>
                <div className=' w-full h-full text-center'>
                    <h2 className='font-bold text-2xl'>{order || 5}</h2>
                    <h3>Order</h3>
                </div>
            </div>
        </div>
    );
}

function TransactionComponent({ transactionList }) {
    console.log(transactionList);
    return (
        <>
            <h1 className={`mt-4 px-8 text-lg text-gray-100 font-semibold`}>Transactions</h1>
            <div className=' mt-4 mx-w-11/12 snap-x space-x-4 px-2 h-80 pb-10 flex flex-row overflow-x-scroll scroll-smooth '>
                {transactionList.map(({ _id, name, img, desc }) => (
                    <div key={_id}>
                        <CardTransactionProfileComponent name={name} img={img} desc={desc} />
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getServerSideProps(ctx) {
    console.log(ctx);
    return { props: {} }


}