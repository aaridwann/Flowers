import Link from "next/link";
import React from "react";
import Router from "next/router";
import Color from "../../Constant/Colors/Color";


import { FaCartPlus } from "react-icons/fa";


const exMenu = ['home', 'products', 'promo', 'signup']


function NavbarComponent({ menu }) {
    const router = Router.useRouter()
    const { productCategory } = router.query
    return (
        <div style={{ backgroundColor: Color.second }} 
        className={` flex items-center justify-between shadow-2xl navbar bg-[${Color.main}] relative `}>
            
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" text-base-200 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} style={{ backgroundColor: Color.second }} className=" text-base-200 menu pr-10 rounded-box menu-compact dropdown-content mt-3 p-2">
                        {exMenu.map((menu, i) => (
                            <div key={i}>
                                <li className={` ${productCategory === menu ? "bordered border-white" : ''}`} ><Link href={`/products/category/${menu}`}><p>{menu.slice(0, 1).toUpperCase() + menu.slice(1, menu.length)}</p></Link></li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>


            <div onClick={() => router.push('/')} className="navbar-center">
                <a className="btn btn-ghost font-light text-2xl text-white normal-case  font-letter">She Needs Flowers</a>
            </div>


            <div className="navbar-end flex">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <FaCartPlus  size={20} />
                    {/* <span className="badge badge-xs badge-primary indicator-item py-2">4</span> */}
                </button>
            </div>
        </div>
    );
}

export default NavbarComponent;
