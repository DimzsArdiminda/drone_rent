"use client";
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
                <Link href={'/'}>Home</Link>
            </li>
            <li>
                <Link href={'/portofolio'}>Portofolio</Link>
            </li>
            <li>
                <Link href={'https://wa.me/+6283834631310'}>Contact Me</Link>
                <a> </a>
            </li>
            </ul>
        </div>
        </div>
        <div className="navbar-center btn btn-ghost text-xl">
            <a>Rent Drone  | </a>        
            <small>ardiminda project</small>
        </div>
        <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
            <Link href={'https://ardiminda.vercel.app'}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
            </Link>
        </button>
        </div>
    </div>
    )
}
