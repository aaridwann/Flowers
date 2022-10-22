import Image from 'next/image'
import React from 'react'
import FilterItemsComponent from '../../src/Frontend/Components/FilterItems/FilterItems'
import NavbarComponent from '../../src/Frontend/Components/Navbar'
import Color from '../../src/Frontend/Constant/Colors/Color'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import ProductsFake from '../../src/Frontend/Utils/Dummy/ProductsDummy'
import Head from 'next/head'

const dummyFilter = ['engagement', 'wedding', 'graduation', 'prewedding', 'gift']

function Products() {
    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            <div className=' pb-20 bg-[url(/waveproducts.svg)] bg-fixed bg-center bg-cover relative w-full min-h-screen bg-white flex flex-col items-center px-2'>
                <NavbarComponent className={'sticky top-0 z-10 '} titleLink={'/products'} title={'Products'} txtColor={Color.cerah} search={true} cart={true} bgColor={'white'} />
                <FilterItemsComponent select={(data) => console.log(data)} className={'mt-10 sticky top-14 z-[5] bg-white '} dataFilter={dummyFilter} />

                <main className='grid grid-cols-2 gap-4 justify-items-center '>
                    {ProductsFake.map(({ name, img, price, rating, _id }) => (
                        <CardProductsComponent name={name} img={img} price={price} rating={rating} key={_id} />
                    ))}
                </main>

                <div className="btn-group mt-10">
                    <button className="btn bg-white hover:bg-teal-100 border-0 ">1</button>
                    <button className="btn bg-white hover:bg-teal-100 border-0 ">2</button>
                    <button className="btn bg-white hover:bg-teal-100 border-0 btn-disabled ">3</button>
                </div>


            </div>
        </>
    )
}

export default Products

function CardProductsComponent({ name, price, img, ready, rating }) {
    return (
        <div className='w-44 drop-shadow-xl h-72 rounded-2xl overflow-hidden bg-white/75 flex flex-col items-start gap-1 pb-2'>

            <section className=' w-full h-3/4 relative'>
                <div className=' absolute z-10 right-3 w-10 h-10 bg-white/50 flex items-center justify-center '>
                    <FaRegHeart size={25} width={1} color='#FFCECE' />
                </div>
                <Image alt='img' src={img || '/error icon.png'} layout='fill' objectFit='cover' />
            </section>



            <section className='px-2 w-full flex items-center justify-between'>
                <h1 className=' font-semibold'>{name || 'Hijab do'}</h1>
                <h1 className='text-xs font-semibold'>{price || 'Rp.175.000'}</h1>
            </section>




            <section className='px-2 w-full flex items-center justify-between'>
                <div className="rating rating-xs">
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h1 className=' text-right text-[10px] '>ready on <br />{ready || '3'} Days</h1>
            </section>

            <button className=' btn btn-accent btn-xs self-center mt-2'>Add Cart</button>

        </div>
    );
}
