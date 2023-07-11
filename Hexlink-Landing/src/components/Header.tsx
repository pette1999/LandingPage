import { useState } from "react";
import hexlink from "../assets/hexlink.svg";

export default function Header() {
  const [openMenu, setOpenmenu] = useState(false);

  const menuToggle = () => {
    setOpenmenu(!openMenu);
    console.log("status: ", openMenu);
  }

  return (
    <>
      <div className="custom-screen md:hidden">
        <div className="flex items-center justify-between py-5 md:block">
          <a href="/" className="flex items-center">
            <img src={hexlink} width={30} height={30} />
            <h1 className="text-[25px] text-white font-bold pl-2">Hexlink</h1>
          </a>
          <div className="md:hidden">
            <button role="button" aria-label="Open the menu" className="text-gray-400 hover:text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <nav className={`pb-5 md:text-sm md:static md:block ${openMenu ? 'bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900' : 'md:text-sm md:static md:block hidden'}`}>
        <div className="custom-screen items-center md:flex">
          <div className="flex items-center justify-between py-5 md:block">
            <a href="/" className="flex items-center">
              <img src={hexlink} width={30} height={30} />
              <h1 className="text-[25px] text-white font-bold pl-2">Hexlink</h1>
            </a>
            <div className="md:hidden">
              <button role="button" aria-label="Open the menu" className="text-gray-400 hover:text-gray-50" onClick={menuToggle}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex hidden ">
            <ul className="flex-1 justify-end space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:text-gray-50">
                <a className="block text-[18px]" href="/">Home</a>
              </li>
              <li className="hover:text-gray-50">
                <a className="block text-[18px]" href="https://hexlink.gitbook.io/hexlink-docs/">Docs</a>
              </li>
              <li className="hover:text-gray-50">
                <a className="block text-[18px]" href="https://dev.hexlink.io/">Demo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}