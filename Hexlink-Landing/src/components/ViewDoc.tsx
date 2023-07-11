export default function ViewDoc() {
  return (
    <section>
      <div className="relative ">
        <div className="picture-background absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0"></div>
        <div className="relative">
          <div className="custom-screen py-28 relative">
            <div className="relative z-10 duration-1000 delay-300 opacity-1">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                  Build a head start to your finances
                </h2>
                <p className="mt-5 text-gray-300">
                  Eclipse is the perfect answer! Our platform enables you to create wealth, manage your expenses, stay up to date with the latest financial news, and get ready for upcoming tax season.
                </p>
              </div>
              <div className="mt-5 flex justify-center font-medium text-sm">
                <a className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center text-white bg-[#076AE0] hover:bg-[#308AF5] active:bg-[#308AF5] " href="https://hexlink.gitbook.io/hexlink-docs/">
                  <span className="pl-2">View Docs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <img alt="Background pattern" src="https://eclipsefin.netlify.app/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Fbg-pattern.5aa07776.webp?url=%2F_next%2Fstatic%2Fmedia%2Fbg-pattern.5aa07776.webp&w=3840&q=75" width="2880" height="1358" decoding="async" data-nimg="1" className="image-transparent w-full h-full object-cover m-auto absolute inset-0 pointer-events-none" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}