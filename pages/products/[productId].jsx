import { FaArrowLeft, FaShareAlt, FaHeart, FaCartPlus } from "react-icons/fa";
import Image from 'next/image'
import React from 'react'
import Color from "../../src/Frontend/Constant/Colors/Color";
import { useRouter } from "next/router";


function ProductDetail() {
    function Ratings() {
        let res = []
        for (let i = 0; i < 5; i++) {
            res.push(
                <input key={i} type="radio" name="rating-2"
                    className={`mask mask-star-2 bg-orange-400 ${i == 1 ? 'checked' : ''} `} />
            )
        }
        return (
            <div className="rating">
                {res}
            </div>
        )

    }

    return (
        <>
            <div className='w-full min-h-screen bg-white flex flex-col items-center justify-start pb-8'>
                <TopHeaderComponent />
                <div className=" w-full h-72 z-10 mt-10 relative">
                    <Image
                        layout="fill"
                        objectFit='contain'
                        priority alt="img" src={'/flower.png'} />
                </div>

                {/* === title === */}
                <h1 className=" text-[#a9cab6] z-10   text-3xl">Anniversary</h1>

                {/* === description === */}
                <p className=" text-justify px-8 mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industries standard dummy text ever since the 1500s,</p>

                {/* === Ratings ===  */}
                <div className=" w-full flex justify-between mt-8 px-8">
                    {Ratings()}
                    <div className=" flex items-center justify-center gap-4">
                        <FaShareAlt size={20} />
                        <FaHeart color="red" size={20} />

                    </div>

                </div>

                {/* === button add cart === */}
                <button className={`btn mt-8 bg-[#a9cab6] text-white border-0`}>
                    Add To Cart
                    <FaCartPlus className=" ml-2" size={20} />
                </button>



                <WaveBg />
            </div>
        </>
    )
}

export default ProductDetail

const WaveBg = () => (
    <div style={{ backgroundColor: '#a9cab6' }} className=' -z-0 absolute w-full h-1/2 '>
        <Image alt='bg' className=' h-96 absolute' src={'/wave.png'} layout='fill' objectFit='cover' />
    </div>

)

function TopHeaderComponent({ title }) {
    const route = useRouter()
    function back() {
        route.back()
    }

    return (
        <div className='z-10 self flex items-center px-4 mt-2  w-full justify-between'>
            <button onClick={back}>
                <FaArrowLeft  color="white" size={20} />
            </button>

            <p className=' text-xl font-semibold text-white '>{title || `Rose`}</p>

            <button>
                <FaShareAlt color="white" size={20} />
            </button>
        </div>);
}