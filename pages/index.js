import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardComponent from '../src/Frontend/Components/Card'
import CardCustomComponent from '../src/Frontend/Components/CardCustom/CardCustomComponent'
import HeroComponent from '../src/Frontend/Components/HeroSection'
import LayoutComponent from '../src/Frontend/Components/Layout'
import Color from '../src/Frontend/Constant/Colors/Color'
import { removeUser, updateUser } from '../src/Frontend/Redux/Slice/userSlice'
import HomeDummyMenu from '../src/Frontend/Utils/Dummy/HomeMenu'

export default function Home() {
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  const menu = HomeDummyMenu

  function click() {
    let data = {
      user: {
        name: 'ridwan',
        age: 20
      },
    }
    // if (user.user) return dispatch(removeUser())
    dispatch(updateUser(data))
  }
  useEffect(() => {
    click()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LayoutComponent>
      <HeroComponent />
      <main className='w-full flex items-center flex-col p-2 pb-10'>
        {menu.promo && <PromoComponent data={menu.promo} />}
        <CategoryComponent category={menu.category} />
      </main>

    </LayoutComponent>
  )
}

function PromoComponent({ data }) {
  return (
    <div className='w-full flex flex-col items-center py-4 gap-8 '>
      <h1 style={{
        backgroundColor: Color.main
      }} className={`px-4 text-slate-900 py-2 before:absolute before:-bottom-1 before:w-1/2 before:bg-red-800 before:h-1 font-sans relative text-3xl self-start  `}>Special Promo</h1>
      <section className=' flex shrink-0 py-8 gap-4 w-full overflow-scroll '>
        {data.map(({ name, img, price }, i) => (
          <div key={i}>
            <CardCustomComponent name={name} price={price} img={img} />
          </div>
        ))}

      </section>
    </div>);
}

function CategoryComponent({ category }) {
  return (<div className='w-full flex mt-8 flex-col items-center gap-4'>
    <h1 style={{ backgroundColor: Color.main }}
      className={`px-4 self-end text-slate-900 py-2 before:absolute before:-bottom-1 before:right-0 before:w-1/2 before:bg-red-800 before:h-1 font-sans relative text-3xl`}>Category</h1>

    <section className='grid grid-cols-3 w-full p-8 gap-5 justify-items-center '>

      {category.map(({ categoryName }, i) => (
        <div key={i} style={{ backgroundColor: Color.second }} className=' hover:scale-105 border-gray-400 duration-500 p-2 w-24 h-24 shadow-xl flex rounded-lg items-center justify-center flex-col ' >
          <Image alt='logo' src={`/${categoryName}.png`} width={65} height={70} />
          <p>{categoryName.slice(0, 1).toUpperCase()+ categoryName.slice(1, categoryName.length)}</p>
        </div>
      ))}


    </section>


  </div>);
}
