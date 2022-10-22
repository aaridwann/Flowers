import Image from 'next/image'
import React from 'react'

function LayoutDashboard({ children }) {
    return (
        <div className='absolute w-full min-h-screen bg-no-repeat bg-cover bg-fixed bg-center bg-[url(/wavedashboard.png)]'>
            <main className='z-10'>
                {children}
            </main>
        </div>
    )
}

export default LayoutDashboard