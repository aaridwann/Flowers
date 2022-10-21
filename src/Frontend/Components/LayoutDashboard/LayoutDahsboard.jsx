import Image from 'next/image'
import React from 'react'

function LayoutDahsboard({ children }) {
    return (
        <div
        className='absolute w-full min-h-screen  '
        style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(/wavedashboard.png)` }} >
            <main className=' z-10'>
                {children}
            </main>
        </div>
    )
}

export default LayoutDahsboard