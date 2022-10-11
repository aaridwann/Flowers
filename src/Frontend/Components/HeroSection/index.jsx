import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Color from '../../Constant/Colors/Color'

function HeroComponent() {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bilbo+Swash+Caps&display=swap" rel="stylesheet" />

            </Head>
            <div className={` mb-[100px] hero h-96 relative `} style={{ backgroundImage: `url("https://i.pinimg.com/564x/26/27/bc/2627bc3e8b2b33315c871e8daf15030c.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-letter ">Hello there</h1>
                        <p className="mb-5">Made with love to bring happiness to the universe.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>

                <div style={{backgroundColor:Color.second}} className=' w-4/5 h-32 shadow-2xl absolute -bottom-16 flex items-center justify-center'>
                        {/* <Image src={'https://i.pinimg.com/564x/b9/0d/53/b90d537643d632721666e96267987598.jpg'} objectFit='cover' layout='fill' loading='lazy' /> */}
                        <h1 className=' font-letter text-6xl text-center text-white'>Bonjour</h1>
                </div>


            </div>
        </>
    )
}

export default HeroComponent