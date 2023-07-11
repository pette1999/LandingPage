export default function Advantages() {
  return (
    <section className="py-16 lg:py-24 custom-screen">
      <div className="max-w-[40rem] mx-auto text-center duration-1000 delay-300 opacity-1">
        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
          Pluggable Smart Account Layer
        </h2>
        <p className="mt-3">
          We break down the wallet into two parts:&nbsp;
          <span className="text-[#076AE0]"><b>Account</b></span>
          &nbsp;and&nbsp;
          <span className="text-[#076AE0]"><b>Assets Management</b></span>
          <br></br>provides better UX for dApps while maintains a unified account layer across dApps.
        </p>
      </div>
      <div className="mt-12 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 duration-1000 delay-300 opacity-1">
        <div className="box-color relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 hover:border-[#076AE0]">
          <div className="p-6 space-y-3 border-b border-gray-800 text-center">
            <span className="text-[#076AE0] font-medium">Account Advantage</span>
            <div className="text-gray-50 text-3xl font-semibold">
              Easy Onboarding
            </div>
            <p className="text-gray-400">Receive First, No Signup</p>
          </div>
          <div className="p-8">
            <ul className="space-y-3">
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#076AE0]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="w-[80%]">Gives every email/phone number/ENS user a ready-to-use smart account</p>
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#076AE0]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="w-[80%]">On-chain identity to address mapping</p>
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#076AE0]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="w-[80%]">Use email or phone number as on-chain username to receive cryptos</p>
              </li>
            </ul>
            {/* <div className="pt-8">
              <button role="button" className="w-full rounded-full text-white ring-offset-2 focus:ring bg-[#076AE0] hover:bg-[#308AF5] px-4 py-2.5 font-medium text-sm text-center duration-150">
                Download Now!
              </button>
            </div> */}
          </div>
        </div>
        <div className="box-color relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 hover:border-[#076AE0]">
          <div className="p-6 space-y-3 border-b border-gray-800 text-center">
            <span className="text-[#076AE0] font-medium">Account Structure</span>
            <div className="text-gray-50 text-3xl font-semibold">
              Modularized
            </div>
            <p className="text-gray-400">Programmability for future upgrades</p>
          </div>
          <div className="p-8">
            <ul className="space-y-3">
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Automated Expense Tracking
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Family Expense Tracking(2 Users Only)
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Latest Fintechnology News
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Investment Opportunities (Only showcase)
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Advance Tax Calculator
              </li>
            </ul>
            {/* <div className="pt-8">
              <button role="button" className="w-full rounded-full text-white ring-offset-2 focus:ring bg-[#076AE0] hover:bg-[#308AF5] px-4 py-2.5 font-medium text-sm text-center duration-150">
                Download Now!
              </button>
            </div> */}
          </div>
        </div>
        <div className="box-color relative flex-1 flex items-stretch flex-col rounded-xl border border-gray-800 mt-6 sm:mt-0 hover:border-[#076AE0]">
          <div className="p-6 space-y-3 border-b border-gray-800 text-center">
            <span className="text-[#076AE0] font-medium">Account Framework</span>
            <div className="text-gray-50 text-3xl font-semibold">
              Auth Agnostic
            </div>
            <p className="text-gray-400">Prevent vendor lock-in for dApps</p>
          </div>
          <div className="p-8">
            <ul className="space-y-3">
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Automated Expense Tracking
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Family Expense Tracking(2 Users Only)
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Latest Fintechnology News
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Investment Opportunities (Only showcase)
              </li>
              <li className="flex items-center gap-5 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Advance Tax Calculator
              </li>
            </ul>
            {/* <div className="pt-8">
              <button role="button" className="w-full rounded-full text-white ring-offset-2 focus:ring bg-[#076AE0] hover:bg-[#308AF5] px-4 py-2.5 font-medium text-sm text-center duration-150">
                Download Now!
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}