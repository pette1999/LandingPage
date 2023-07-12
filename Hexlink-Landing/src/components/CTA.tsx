import MianButton from "./MainButton";

export default function CTA() {
  return (
    <section>
      <div className="relative ">
        <div className="picture-background absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0"></div>
        <div className="relative">
          <div className="custom-screen py-28 relative">
            <div className="relative z-10 duration-1000 delay-300 opacity-1">
              <div className="max-w-xl mx-auto text-center">
                <h2 className="text-gray-50 sm:text-[3.5rem] text-[2rem] font-bold leading-[1.15] tracking-[-.0625rem] text-center">
                  <span>Onboard Billion users</span>
                  <br></br>
                  <span className="text-[#076AE0]">Integrate our SDK</span>
                </h2>
              </div>
              <div className="mt-[40px]">
                <MianButton buttonText="Coming Soon" />
              </div>
            </div>
            <img alt="Background pattern" src="https://eclipsefin.netlify.app/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Fbg-pattern.5aa07776.webp?url=%2F_next%2Fstatic%2Fmedia%2Fbg-pattern.5aa07776.webp&w=3840&q=75" width="2880" height="1358" decoding="async" data-nimg="1" className="image-transparent w-full h-full object-cover m-auto absolute inset-0 pointer-events-none" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}