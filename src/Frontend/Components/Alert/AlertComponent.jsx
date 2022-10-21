import React, { useEffect, useState } from 'react'

export default function AlertComponent({ message, error }) {
    console.log(message)
    return (
        <div className={`flex w-full h-32 ${message ? 'visible' : 'invisible '} fixed items-center justify-center overflow-hidden `}>
            <div className={`alert ${error ? 'alert-error' : 'alert-success'} shadow-lg duration-300 ${message ? 'ml-0 delay-100' : 'ml-[1000px] delay-[0ms] '} absolute top-10 z-50 w-80 delay-1000 duration-200 `}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}
