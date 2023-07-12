import { useState } from "react";
import hexlink from "../assets/hexlink.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="custom-screen w-full flex py-6 justify-between items-center sticky top-0 z-20 bg-[#111827]">
      <img src={hexlink} alt="hexlink" className="h-[35px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${!toggle ? "hidden" : "flex flex-col"
            } p-6 bg-black-gradient absolute top-[4rem] right-0 my-3 min-w-[140px] w-full z-10 bg-[#111827] border-b-[1px] border-[#5EA7FF] border-solid`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer flex flex-col flex-nowrap gap-[0px] h-min w-min items-start relative justify-start border-0 border-transparent border-solid font-poppins font-medium text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`} target="_blank">
                  <h4 className="text-2xl font-sans not-italic font-bold tracking-tight leading-8 text-start">{nav.title}</h4>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-x-6 text-gray-500 my-6 sm:mt-0">
            <a href="https://twitter.com/HexlinkOfficial" aria-label="social media">
              <svg className="w-6 h-6 hover:text-gray-200 duration-150" fill="none" viewBox="0 0 48 48">
                <g clipPath="url(#clip0_17_80)">
                  <path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_17_80">
                    <path fill="currentColor" d="M0 0h48v48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/hexlinkofficial/" aria-label="social media">
              <svg className="w-6 h-6 hover:text-gray-200 duration-150" fill="none" viewBox="0 0 48 48">
                <g clipPath="url(#clip0_17_68)">
                  <path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_17_68">
                    <path fill="currentColor" d="M0 0h48v48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/hexlinkofficial/" aria-label="social media">
              <svg className="w-6 h-6 hover:text-gray-200 duration-150" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="currentColor" />
                <path d="M32 23C35.3137 23 38 18.0751 38 12C38 5.92487 35.3137 1 32 1C28.6863 1 26 5.92487 26 12C26 18.0751 28.6863 23 32 23Z" fill="currentColor" />
                <path d="M42 22C43.1046 22 44 17.5228 44 12C44 6.47715 43.1046 2 42 2C40.8954 2 40 6.47715 40 12C40 17.5228 40.8954 22 42 22Z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://discord.com/invite/ZJssGbBTUt" aria-label="social media">
              <svg className="w-6 h-6 hover:text-gray-200 duration-150" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.9599 10.339C36.1387 7.26396 30.0937 6.74271 29.8349 6.72396C29.4337 6.69021 29.0512 6.91521 28.8862 7.28646C28.8712 7.30896 28.7399 7.61271 28.5937 8.08521C31.1212 8.51271 34.2262 9.37146 37.0349 11.1152C37.4849 11.3927 37.6237 11.9852 37.3462 12.4352C37.1624 12.7315 36.8512 12.8927 36.5287 12.8927C36.3562 12.8927 36.1799 12.844 36.0224 12.7465C31.1924 9.75021 25.1624 9.60021 23.9999 9.60021C22.8374 9.60021 16.8037 9.75021 11.9774 12.7465C11.5274 13.0277 10.9349 12.889 10.6574 12.439C10.3762 11.9852 10.5149 11.3965 10.9649 11.1152C13.7737 9.37521 16.8787 8.51271 19.4062 8.08896C19.2599 7.61271 19.1287 7.31271 19.1174 7.28646C18.9487 6.91521 18.5699 6.68271 18.1649 6.72396C17.9062 6.74271 11.8612 7.26396 7.98742 10.3802C5.96617 12.2515 1.91992 23.1865 1.91992 32.6402C1.91992 32.809 1.96492 32.9702 2.04742 33.1165C4.83742 38.0215 12.4537 39.304 14.1899 39.3602C14.1974 39.3602 14.2087 39.3602 14.2199 39.3602C14.5274 39.3602 14.8162 39.214 14.9962 38.9665L16.7512 36.5515C12.0149 35.329 9.59617 33.2515 9.45742 33.1277C9.05992 32.779 9.02242 32.1715 9.37492 31.774C9.72367 31.3765 10.3312 31.339 10.7287 31.6877C10.7849 31.7402 15.2399 35.5202 23.9999 35.5202C32.7749 35.5202 37.2299 31.7252 37.2749 31.6877C37.6724 31.3427 38.2762 31.3765 38.6287 31.7777C38.9774 32.1752 38.9399 32.779 38.5424 33.1277C38.4037 33.2515 35.9849 35.329 31.2487 36.5515L33.0037 38.9665C33.1837 39.214 33.4724 39.3602 33.7799 39.3602C33.7912 39.3602 33.8024 39.3602 33.8099 39.3602C35.5462 39.304 43.1624 38.0215 45.9524 33.1165C46.0349 32.9702 46.0799 32.809 46.0799 32.6402C46.0799 23.1865 42.0337 12.2515 39.9599 10.339ZM17.7599 28.8002C15.9037 28.8002 14.3999 27.0827 14.3999 24.9602C14.3999 22.8377 15.9037 21.1202 17.7599 21.1202C19.6162 21.1202 21.1199 22.8377 21.1199 24.9602C21.1199 27.0827 19.6162 28.8002 17.7599 28.8002ZM30.2399 28.8002C28.3837 28.8002 26.8799 27.0827 26.8799 24.9602C26.8799 22.8377 28.3837 21.1202 30.2399 21.1202C32.0962 21.1202 33.5999 22.8377 33.5999 24.9602C33.5999 27.0827 32.0962 28.8002 30.2399 28.8002Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}