import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import CardCustomComponent from '../src/Frontend/Components/CardCustom/CardCustomComponent'
import Carousel from '../src/Frontend/Components/Carousel'
import HeroComponent from '../src/Frontend/Components/HeroSection'
import HighlightComponent from '../src/Frontend/Components/Higlight Products/HighlightComponent'
import LayoutComponent from '../src/Frontend/Components/Layout'
import StatComponent from '../src/Frontend/Components/Stat'
import Color from '../src/Frontend/Constant/Colors/Color'
import HomeDummyMenu from '../src/Frontend/Utils/Dummy/HomeMenu'

export default function Home() {
  const menu = HomeDummyMenu

  return (
    <LayoutComponent>
      <HeroComponent />
      <main className='w-full flex items-center flex-col p-2 pb-10'>
        <Carousel />
        {menu.promo && <PromoComponent data={menu.promo} />}
        <HighlightComponent />
      </main>
    </LayoutComponent>
  )
}

function PromoComponent({ data }) {
  const router = useRouter()

  function clickHandler(_id) {
    router.push(`/products/${_id}`)
  }

  return (
    <div className='w-full flex flex-col items-center py-4 gap-8 '>
      <p style={{ backgroundColor: Color.main }} className={`px-4 text-slate-900 py-2 before:absolute before:-bottom-1 before:w-1/2 before:bg-red-800 before:h-1 font-sans relative text-3xl self-start`}>Special Promo</p>
      <section className=' flex shrink-0 pb-8 gap-4 w-full overflow-x-auto md:justify-center '>
        {data.map(({ name, img, price, _id }, i) => (
          <button onClick={() => clickHandler(_id)} key={i}>
            <CardCustomComponent name={name} price={price} img={img} />
          </button>
        ))}
      </section>

    </div>
  );
}

function CategoryComponent({ category }) {
  const router = useRouter()

  function clickHandler(e) {
    router.push(`/products/category/${e}`)
  }

  return (
    <div className='w-full flex mt-8 flex-col items-center gap-4'>
      <h1 style={{ backgroundColor: Color.main }} className={`px-4 self-end text-slate-900 py-2 before:absolute before:-bottom-1 before:right-0 before:w-1/2 before:bg-red-800 before:h-1 font-sans relative text-3xl`}>Category</h1>

      <section className='grid grid-cols-3 md:flex items-center justify-center w-full p-8 gap-5 justify-items-center '>
        {category.map(({ categoryName }, i) => (
          <button onClick={() => clickHandler(categoryName)} key={i} style={{ backgroundColor: Color.second }} className=' hover:scale-105 border-gray-400 duration-500 p-2 w-24 h-24 shadow-xl flex rounded-lg items-center justify-center flex-col ' >
            <Image alt='logo' src={`/${categoryName}.png`} width={65} height={70} />
            <p>{categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1, categoryName.length)}</p>
          </button>
        ))}
      </section>

    </div>
  );
}
