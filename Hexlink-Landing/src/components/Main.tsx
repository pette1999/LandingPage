import { useState, useEffect } from "react";
import landing from "../assets/landing.svg";
import landing_mobile from "../assets/landing-mobile.svg";
import MainButton from "./MainButton";

export default function Main() {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate: string[] = ["Phone", "Email"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section>
      <div id="home" className="custom-screen pt-[60px] pb-28 flex flex-none items-center flex-col flex-nowrap gap-[80px] h-min justify-center overflow-visible relative w-full">
        <div className=" duration-1000 delay-300 opacity-1">
          <div className="max-w-[800px] mx-auto text-center flex flex-col flex-nowrap gap-[40px] justify-center items-center overflow-visible min-h-min">
            <div className="relative w-auto opacity-100" style={{transform: "perspective(1200px)"}}>
              <div className="contents">
                <a 
                  className="flex flex-row items-center flex-nowrap gap-[8px] min-h-min justify-center overflow-visible py-[8px] pl-[16px] pr-[8px] relative min-w-min border-solid border-x-0 border-y-0 border-transparent bg-white rounded-[40px] opacity-100" 
                  href="https://hackmd.io/@YN3HXyLVQCqP7Q9KVoCCwQ/r1kxJGiwn/edit" 
                  target="_blank"
                >
                  <div className="relative flex-none h-auto select-none whitespace-pre w-auto flex flex-col justify-start shrink-0 color-black tracking-[16px] opacity-100">
                    <p className="text-base font-sans not-italic font-semibold tracking-normal leading-6 text-start decoration-0 normal-case text-[#1A1D1E]">
                      Introducing our On-Chain 2FA
                    </p>
                  </div>
                  <div className="flex items-center flex-none flex-row flex-nowrap gao-0 h-[20px] justify-end overflow-hidden p-0 relative w-[20px] will-change-transform bg-[#1A1D1E] rounded-2xl opacity-100">
                    <div className="block flex-none h-auto w-auto relative opacity-100">
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4091 14.6449L9.38494 13.6307L12.4524 10.5632H5V9.08168H12.4524L9.38494 6.01918L10.4091 5L15.2315 9.82244L10.4091 14.6449Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="block flex-none h-auto w-auto relative opacity-100">
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="w-full h-full flex justify-center items-center">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4091 14.6449L9.38494 13.6307L12.4524 10.5632H5V9.08168H12.4524L9.38494 6.01918L10.4091 5L15.2315 9.82244L10.4091 14.6449Z" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-none flex-col items-center gao-0 h-min justify-start overflow-visible p-0relative w-full opacity-100 " style={{ transform: "perspective(1200px)" }}>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-0 flex flex-col justify-start shrink-0">
                <h1 className="font-sans sm:text-[64px] text-[48px] not-italic font-bold tracking-tight sm:leading-[72px] leading-[56px] text-white text-center">Reconnect the Web</h1>
                <h1 className="font-sans sm:text-[64px] text-[48px] not-italic font-bold tracking-tight sm:leading-[72px] leading-[56px] text-white text-center">
                  with an open, permissions
                  <span className="identity-style inline-block bg-clip-text text-transparent">
                    &nbsp;identity layer
                  </span>
                </h1>
              </div>
              {/* <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words z-1 outline-0 flex flex-col justify-start shrink-0">
                <div className="font-sans text-[2.5rem] sm:text-[3rem] not-italic font-medium tracking-tight sm:leading-[72px] leading-[56px] text-white text-center">
                  <span style={{ backgroundImage: "linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))" }} className="inline-block bg-clip-text text-transparent">
                    <span className="text-[#308AF5]">{text}</span>
                    &nbsp;is your web3 account
                  </span>
                </div>
              </div> */}
            </div>
            <div className="tracking-[16px] flex-none h-auto relative whitespace-pre-wrap w-full break-word flex flex-col justify-start opacity-100 shrink-0" style={{ transform: "perspective(1200px)" }}>
              <p className="font-sans text-[20px] not-italic font-normal leading-8 tracking-normal text-center text-[#B4BCD0]">
                Enhance the sprit of internet by bringing back the interoperability with a permission-less identity layer secured by blockchain technology.
              </p>
            </div>
            <MainButton buttonText="View Demo"/>
          </div>
          <div className="relative mt-16 sm:mt-28 max-w-[1120px]">
            <div className="picture-background absolute m-auto blur-[160px] max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"></div>
            <div className="relative">
              <img className="shadow-lg rounded-2xl image-transparent hidden sm:block" src={landing} width="1920" height="800" decoding="async" data-nimg="1" loading="lazy" />
              <img className="shadow-lg rounded-2xl image-transparent block sm:hidden" src={landing_mobile} width="1920" height="800" decoding="async" data-nimg="1" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}