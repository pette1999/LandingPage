import hexlink from "../assets/hexlink.svg";

export default function Header() {
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <nav className="pb-5 md:text-sm md:static md:block hidden">
        <div className="custom-screen items-center md:flex">
          <div className="flex items-center justify-between py-5 md:block">
            <a href="/" className="flex items-center">
              <img src={hexlink} width={30} height={30} />
              <h1 className="text-[25px] text-white font-bold pl-2">Hexlink</h1>
            </a>
            <div className="md:hidden">
              <button role="button" aria-label="Open the menu" className="text-gray-400 hover:text-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex hidden ">
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:text-gray-50">
                <a className="block" href="/">Home</a>
              </li>
              <li className="hover:text-gray-50">
                <a className="block" href="https://hexlink.gitbook.io/hexlink-docs/">Docs</a>
              </li>
              <li className="hover:text-gray-50">
                <a className="block" href="https://dev.hexlink.io/">Demo</a>
              </li>
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <a className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 text-sm text-white font-medium custom-btn-bg border border-gray-500 active:bg-gray-900 md:inline-flex" href="/#pricing">
                Start now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}