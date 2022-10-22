import React, { useEffect, useState } from 'react'
import LayoutDashboard from '../../src/Frontend/Components/LayoutDashboard/LayoutDahsboard'
import { FaArrowLeft, FaShareAlt, FaHeart, FaCartPlus, FaBell, FaCog } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/router';
import CardTransactionProfileComponent from '../../src/Frontend/Components/Card Transaction Profile/CardTransactionProfile';
import Color from '../../src/Frontend/Constant/Colors/Color'
import TableOrder from '../../src/Frontend/Components/TableOrder/TableOrder';
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
const fakeOrder = [
    {
        _id: 1,
        name: 'melati',
        img: '',
        desc: 'lorem',
        price: 74000,
        status: 'pending'
    },
    {
        _id: 2,
        name: 'mawar',
        img: '',
        desc: 'lorem',
        price: 2500000,
        status: 'On Proccess'
    },
    {
        _id: 3,
        name: 'duri',
        img: '',
        desc: 'lorem',
        price: 1500000,
        status: 'On Shipping'
    },
    {
        _id: 4,
        name: 'sedap malam',
        img: '',
        desc: 'lorem',
        price: 80000,
        status: 'canceled'
    },

]




function Dashboard() {
    const [notifModal, setNotifModal] = useState(false)
    const router = useRouter()

    function openNotif() {
        setNotifModal(!notifModal)
    }

    function back() {
        router.back()
    }

    return (
        <LayoutDashboard>
            <div className='w-full z-[1000] md:w-1/2 mx-auto pb-10 flex flex-col overflow-hidden '>
                <TopNavbar openNotif={openNotif} back={back} />
                <CardProfile name={dummyDashboard.name} state={dummyDashboard.state} order={dummyDashboard.order} transaction={dummyDashboard.transaction} loved={dummyDashboard.loved} img={dummyDashboard.img} />
                <TransactionComponent transactionList={dummyDashboard.transactionList} />
                <OrderComponent data={fakeOrder} />

                <button type='button' className='border-2 hover:bg-white/25 duration-300 flex items-center justify-center text-white gap-2 mt-20 w-1/2 self-center py-1 rounded-2xl border-white'>
                    <p>Settings</p>
                    <FaCog size={25} color={'white'} />
                </button>
                
            </div>
        </LayoutDashboard>
    )
}

export default Dashboard



function OrderComponent({ data }) {
    return (
        <div className='w-full px-2 items-center flex flex-col gap-4'>
            <h1 className="text-white drop-shadow-[0_35px_35px_rgba(0,0,0,0.75)] text-lg">Order Status</h1>
            <TableOrder dataOrder={data} />
            <button className=' btn btn-sm btn-accent'>See More</button>
        </div>
    )
}

function TopNavbar({ back, title, openNotif }) {
    return (
        <div className=' w-full px-6 flex items-center mt-4 justify-between'>
            <button onClick={back}>
                <FaArrowLeft size={25} />
            </button>
            <p className=' text-xl font-semibold text-white '>{title || `Rose`}</p>
            <button onClick={openNotif}>
                <span style={{ backgroundColor: Color.cerah }} className=" border-0 absolute indicator-item badge text-white ">9</span>
                <FaBell size={25} />
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
        <div className={`w-4/5 md:w-3/5 mx-auto flex items-center justify-start flex-col relative h-52 bg-[${Color.cerah}] text-white shadow-2xl rounded-b-[20px] rounded-t-[200px] duration-500 ${start ? 'mt-16 rotate-0 ' : ' rotate-45  mt-[2000px]'}   `}>
            <div className={`w-24 h-24 rounded-full border-8 border-white bg-slate-200 absolute -top-12 shadow-lg overflow-hidden delay-200 duration-500 ease-in-out ${start ? 'ml-0' : 'ml-[1000px]'} `}>
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
    return (
        <div className='flex flex-col w-full'>
            <h1 style={{ color: Color.cerah }} className={`mt-4 px-8 text-lg font-semibold text-center`}>Transactions</h1>
            <div className=' mt-4 mx-w-11/12 snap-x space-x-4 px-2 h-80 pb-10 flex flex-row overflow-x-scroll scroll-smooth '>
                {transactionList.map(({ _id, name, img, desc }) => (
                    <div key={_id}>
                        <CardTransactionProfileComponent name={name} img={img} desc={desc} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    console.log(ctx);
    return { props: {} }


}