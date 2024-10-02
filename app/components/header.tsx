"use client";

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { counterContext } from "../counter";
// import { bucketCounter } from '../constants';

const Header = () => {
    let [navStatus, setnavStatus] = useState(true);// use state for controlling navigation open and close

    const handleNav = (event: any) => {
        setnavStatus(!navStatus);
    }

    const counter = useContext(counterContext);


    return (
        <counterContext.Provider value={counter}>
            <div>
                <header>
                    <nav className="navbar">
                        <div className="logo">LOGO</div>
                        <input type="checkbox" id="menu-toggle" />
                        <label htmlFor="menu-toggle" className="hamburger" onClick={handleNav}>
                            {navStatus ? <FaBars size={30} /> : <FaTimes size={30} />}
                        </label>
                        <ul className="nav-links">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={'/market'}>Search</Link></li>
                            <li><Link href="#">My shop</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                        <div className="l-options-cont">
                            <div className="heart"><span className='dot'>{/* count value should be appended here */}{counter as React.ReactNode}</span><FaRegHeart size={21} color='black' /></div>
                            <div className="bucket"><FaShoppingCart size={21} color='black' /></div>
                        </div>
                    </nav>
                </header>
            </div>
        </counterContext.Provider>
    )
}

export default Header;