'use client';
import { useEffect, useState } from 'react';
import NavbarList from './navbar/Navbarlist';

export default function Navbar() {
  const [navCollapse, setNavcollapse] = useState(false);
  const [windowsWidh, setWidth] = useState(0);
  const minWidh  = 768;

  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      setWidth(window.innerWidth);
      if(windowsWidh < minWidh){
        setNavcollapse(true)
      }else{
        setNavcollapse(false)
      }
    })
    console.log(windowsWidh);
  },[windowsWidh]);
  
  return (
    <div className='sticky top-0 z-30 '>
      <div className='bg-white absolute top-0 w-full h-full -z-10'>
      </div>
      <nav className="bg-neutral-primary w-full z-20 top-0">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#home"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={"/logo.png"}
              className="h-7"
              alt="Kapuas Silicia"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-amber-700">
              Kapuas Silica
            </span>
          </a>
          <button
            onClick={() => {
              setNavcollapse(!navCollapse);
            }}
            data-collapse-toggle="navbar-default"
            type="button"
            className={"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:text-heading"}
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
          <div className= {navCollapse?"hidden":"" + " w-full md:block md:w-auto"} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primar">
              <NavbarList name="Home" href={'../'}/>
              <NavbarList name="About Us" href={''}/>
              <NavbarList name="Gallery" href={'/gallery'}/>
              <NavbarList name="Contact Me" href={''}/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
