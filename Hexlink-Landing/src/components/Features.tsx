import { useState } from "react";
import MainButton from './MainButton';
import userFriendly from "../assets/user-friendly.svg";
import secure from "../assets/secure.svg";
import permission_less from "../assets/permissionless.svg";
import userFriendly_mobile from "../assets/user-friendly-mobile.svg";
import secure_mobile from "../assets/secure-mobile.svg";
import permission_less_mobile from "../assets/permissionless-mobile.svg";

export default function Features() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-16 lg:py-36 custom-screen">
      <div className="flex flex-col items-center flex-nowrap gap-[80px] h-min justify-center relative w-full opacity-100">
        <div className="flex flex-none flex-col flex-nowrap items-center gap-[40px] h-min justify-center overflow-visible p-0 relative">
          <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 opacity-100">
            <h2 className="font-sans text-[40px] sm:text-[48px] not-italic font-bold leading-[56px] text-white text-center">
              Bring together both
              <br></br>
              User friendly & permission-less
            </h2>
          </div>
          <div className="flex-none h-auto relative whitespace-pre-wrap w-auto break-words flex flex-col justify-start shrink-0 text-[#B4BCD0]">
            <p className="text-[20px] not-italic font-normal leading-8 text-center">Permits the use of upper-layer applications with a seamless Web2 user experience <br></br>without compromising security measures</p>
          </div>
          <MainButton buttonText="View Doc" buttonLink="https://hexlink.gitbook.io/hexlink-docs/" />
        </div>
        <div className="hidden sm:flex flex-none flex-row flex-nowrap gap-[16px] h-min justify-center max-w-[1128px] overflow-visible p-0 relative w-full items-center opacity-100">
          <div className="flex-1 relative h-auto w-[1px] z-1 block opacity-100 transform" onClick={() => setActive(1)}>
            <div className="contents">
              <div className={`flex flex-col flex-nowrap cursor-pointer items-center gap-[40px] h-min justify-center p-[24px] relative ${active == 1 ? 'bg-[#076AE0]' : 'bg-[#111827]'} rounded-2xl w-full opacity-100 transform`}>
                <div className="flex flex-col flex-none flex-nowrap gap-[8px] h-min justify-start overflow-visible p-0 elative w-full items-start opacity-100 transform">
                  <div className="items-center flex flex-none flex-row flex-nowrap gap-[4px] h-min justify-center overflow-visible p-0 relative w-full opacity-100 transform">
                    <div className="flex-none h-auto relative w-[16px] aspect-square opacity-100 transform">
                      <div className="w-full h-full flex justify-center items-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.1034 36.3016C29.1034 38.9526 26.9542 41.1016 24.3031 41.1016C21.652 41.1016 19.5028 38.9526 19.5028 36.3016C19.5028 33.6506 21.652 31.5016 24.3031 31.5016C26.9542 31.5016 29.1034 33.6506 29.1034 36.3016Z" fill="white" style={{ fill: "rgb(209, 213, 219))" }}></path>
                          <path d="M24.0031 26.4016L13.2031 9.60156L34.8031 9.60156L24.0031 26.4016Z" fill="white" style={{ fill: "rgb(209, 213, 219))" }}></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 h-auto relative whitespace-pre-wrap w-[1px] break-words flex flex-col justify-start shrink-0 text-white opacity-100 transform">
                      <p className={`font-sans text-base not-italic font-semibold text-start ${active == 1 ? 'text-white' : 'text-[#B4BCD0]'}`}>User-friendly</p>
                    </div>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 text-white opacity-100 transform">
                    <p className={`font-sans text-base not-italic font-semibold text-start ${active == 1 ? 'text-white' : 'text-[#B4BCD0]'}`}>Use email/phone number as your wallet address to receive crypto right now just like using Zelle, no sign up required!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-auto w-[1px] z-1 block opacity-100 transform" onClick={() => setActive(2)}>
            <div className="contents">
              <div className={`flex flex-col flex-nowrap cursor-pointer items-center gap-[40px] h-min justify-center p-[24px] relative ${active == 2 ? 'bg-[#076AE0]' : 'bg-[#111827]'} rounded-2xl w-full opacity-100 transform`}>
                <div className="flex flex-col flex-none flex-nowrap gap-[8px] h-min justify-start overflow-visible p-0 elative w-full items-start opacity-100 transform">
                  <div className="items-center flex flex-none flex-row flex-nowrap gap-[4px] h-min justify-center overflow-visible p-0 relative w-full opacity-100 transform">
                    <div className="flex-none h-auto relative w-[16px] aspect-square opacity-100 transform">
                      <div className="w-full h-full flex justify-center items-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M39.9984 8V41.6H6.39844V8H39.9984ZM27.9984 24.8C27.9984 22.149 25.8494 20 23.1984 20C20.5475 20 18.3984 22.149 18.3984 24.8C18.3984 27.451 20.5475 29.6 23.1984 29.6C25.8494 29.6 27.9984 27.451 27.9984 24.8Z" fill="white" style={{ fill: "rgb(209, 213, 219))" }}></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 h-auto relative whitespace-pre-wrap w-[1px] break-words flex flex-col justify-start shrink-0 text-white opacity-100 transform">
                      <p className={`font-sans text-base not-italic font-semibold text-start ${active == 2 ? 'text-white' : 'text-[#B4BCD0]'}`}>Secure</p>
                    </div>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 text-white opacity-100 transform">
                    <p className={`font-sans text-base not-italic font-semibold text-start ${active == 2 ? 'text-white' : 'text-[#B4BCD0]'}`}>Protect your account with various security options including On-Chain 2FA, risk management and social recovery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-auto w-[1px] z-1 block opacity-100 transform" onClick={() => setActive(3)}>
            <div className="contents">
              <div className={`flex flex-col flex-nowrap cursor-pointer items-center gap-[40px] h-min justify-center p-[24px] relative ${active == 3 ? 'bg-[#076AE0]' : 'bg-[#111827]'} rounded-2xl w-full opacity-100 transform`}>
                <div className="flex flex-col flex-none flex-nowrap gap-[8px] h-min justify-start overflow-visible p-0 elative w-full items-start opacity-100 transform">
                  <div className="items-center flex flex-none flex-row flex-nowrap gap-[4px] h-min justify-center overflow-visible p-0 relative w-full opacity-100 transform">
                    <div className="flex-none h-auto relative w-[16px] aspect-square opacity-100 transform">
                      <div className="w-full h-full flex justify-center items-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M28.8031 13.9992C28.8031 16.6502 26.6541 18.7992 24.0031 18.7992C21.3522 18.7992 19.2031 16.6502 19.2031 13.9992C19.2031 11.3483 21.3522 9.19922 24.0031 9.19922C26.6541 9.19922 28.8031 11.3483 28.8031 13.9992Z" fill="white" style={{ fill: "rgb(209, 213, 219))" }}></path>
                          <path d="M24.0031 42.7992L13.2031 25.9992L34.8031 25.9992L24.0031 42.7992Z" fill="white" style={{ fill: "rgb(209, 213, 219))" }}></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 h-auto relative whitespace-pre-wrap w-[1px] break-words flex flex-col justify-start shrink-0 text-white opacity-100 transform">
                      <p className={`font-sans text-base not-italic font-semibold text-start ${active == 3 ? 'text-white' : 'text-[#B4BCD0]'}`}>Permission-less</p>
                    </div>
                  </div>
                  <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 text-white opacity-100 transform">
                    <p className={`font-sans text-base not-italic font-semibold text-start ${active == 3 ? 'text-white' : 'text-[#B4BCD0]'}`}>Minimize the provider lockout and DoS attacks with our permission-less service provider network.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block aspect-video flex-none max-w-[1120px] relative w-full opacity-100">
          <div className="absolute m-auto blur-[160px] max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"></div>
          <div className="contents">
            <div className="items-center flex flex-col flex-nowrap gap-[10px] justify-center p-0 relative h-full max-w-[100%] w-full opacity-100">
              <img className={`shadow-lg rounded-2xl image-transparent ${active == 1 ? 'block' : 'hidden'}`} src={userFriendly} decoding="async" data-nimg="1" loading="lazy" />
              <img className={`shadow-lg rounded-2xl image-transparent ${active == 2 ? 'block' : 'hidden'}`} src={secure} decoding="async" data-nimg="1" loading="lazy" />
              <img className={`shadow-lg rounded-2xl image-transparent ${active == 3 ? 'block' : 'hidden'}`} src={permission_less} decoding="async" data-nimg="1" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="items-center flex flex-none flex-nowrap h-min justify-center overflow-visible p-0 relative w-full flex-col gap-[40px] max-w-[640px] opacity-100">
            <div className="flex-none w-full h-auto relative z-1 opacity-100">
              <div className="contents">
                <div className="items-center cursor-pointer flex flex-col flex-nowrap h-min justify-center relative gap-[24px] overflow-visible p-0 w-full opacity-100 rounded-3xl bg-[#111827]">
                  <div className="flex flex-none flex-col flex-nowrap h-min overflow-visible relative w-full items-center gap-[16px] justify-center pt-[16px] px-[16px] opacity-100">
                    <div className="items-center flex flex-none flex-nowrap h-min justify-center overflow-visible p-0 relative w-full flex-col gap-[8px] opacity-100">
                      <div className="block flex-none relative h-[32px] w-[32px] opacity-100">
                        <div className="w-full h-full flex justify-center items-center">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.1034 36.3016C29.1034 38.9526 26.9542 41.1016 24.3031 41.1016C21.652 41.1016 19.5028 38.9526 19.5028 36.3016C19.5028 33.6506 21.652 31.5016 24.3031 31.5016C26.9542 31.5016 29.1034 33.6506 29.1034 36.3016Z" fill="white" className="fill-[#076AE0]"></path>
                            <path d="M24.0031 26.4016L13.2031 9.60156L34.8031 9.60156L24.0031 26.4016Z" fill="white" className="fill-[#076AE0]"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative h-auto whitespace-pre-wrap break-words flex-none w-full flex flex-col justify-start shrink-0 opacity-100">
                        <h3 className="font-sans text-[32px] not-italic font-semibold leading-10 text-center">User-friendly</h3>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 opacity-100">
                      <p className="font-sans text-[20px] not-italic font-normal leading-8 text-center">
                        Use email/phone number as your wallet address to receive crypto right now just like using Zelle, no sign up required!
                      </p>
                    </div>
                  </div>
                  <div className="items-center flex flex-none flex-col flex-nowrap gap-[10px] justify-center overflow-hidden p-0 relative w-full will-change-transform h-min rounded-2xl opacity-100">
                    <div className="flex-none relative aspect-video h-auto w-full opacity-100">
                      <div className="contents">
                        <div className="items-center flex flex-col flex-nowrap gap-[10px] justify-center p-0 relative h-full max-w-[100%] w-full opacity-100">
                          <img className={`shadow-lg rounded-2xl image-transparent`} src={userFriendly_mobile} decoding="async" data-nimg="1" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-full h-auto relative z-1 opacity-100">
              <div className="contents">
                <div className="items-center cursor-pointer flex flex-col flex-nowrap h-min justify-center relative gap-[24px] overflow-visible p-0 w-full opacity-100 rounded-3xl bg-[#111827]">
                  <div className="flex flex-none flex-col flex-nowrap h-min overflow-visible relative w-full items-center gap-[16px] justify-center pt-[16px] px-[16px] opacity-100">
                    <div className="items-center flex flex-none flex-nowrap h-min justify-center overflow-visible p-0 relative w-full flex-col gap-[8px] opacity-100">
                      <div className="block flex-none relative h-[32px] w-[32px] opacity-100">
                        <div className="w-full h-full flex justify-center items-center">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.1034 36.3016C29.1034 38.9526 26.9542 41.1016 24.3031 41.1016C21.652 41.1016 19.5028 38.9526 19.5028 36.3016C19.5028 33.6506 21.652 31.5016 24.3031 31.5016C26.9542 31.5016 29.1034 33.6506 29.1034 36.3016Z" fill="white" className="fill-[#076AE0]"></path>
                            <path d="M24.0031 26.4016L13.2031 9.60156L34.8031 9.60156L24.0031 26.4016Z" fill="white" className="fill-[#076AE0]"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative h-auto whitespace-pre-wrap break-words flex-none w-full flex flex-col justify-start shrink-0 opacity-100">
                        <h3 className="font-sans text-[32px] not-italic font-semibold leading-10 text-center">Secure</h3>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 opacity-100">
                      <p className="font-sans text-[20px] not-italic font-normal leading-8 text-center">
                        Protect your account with various security options including On-Chain 2FA, risk management and social recovery
                      </p>
                    </div>
                  </div>
                  <div className="items-center flex flex-none flex-col flex-nowrap gap-[10px] justify-center overflow-hidden p-0 relative w-full will-change-transform h-min rounded-2xl opacity-100">
                    <div className="flex-none relative aspect-video h-auto w-full opacity-100">
                      <div className="contents">
                        <div className="items-center flex flex-col flex-nowrap gap-[10px] justify-center p-0 relative h-full max-w-[100%] w-full opacity-100">
                          <img className={`shadow-lg rounded-2xl image-transparent`} src={secure_mobile} decoding="async" data-nimg="1" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-none w-full h-auto relative z-1 opacity-100">
              <div className="contents">
                <div className="items-center cursor-pointer flex flex-col flex-nowrap h-min justify-center relative gap-[24px] overflow-visible p-0 w-full opacity-100 rounded-3xl bg-[#111827]">
                  <div className="flex flex-none flex-col flex-nowrap h-min overflow-visible relative w-full items-center gap-[16px] justify-center pt-[16px] px-[16px] opacity-100">
                    <div className="items-center flex flex-none flex-nowrap h-min justify-center overflow-visible p-0 relative w-full flex-col gap-[8px] opacity-100">
                      <div className="block flex-none relative h-[32px] w-[32px] opacity-100">
                        <div className="w-full h-full flex justify-center items-center">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.1034 36.3016C29.1034 38.9526 26.9542 41.1016 24.3031 41.1016C21.652 41.1016 19.5028 38.9526 19.5028 36.3016C19.5028 33.6506 21.652 31.5016 24.3031 31.5016C26.9542 31.5016 29.1034 33.6506 29.1034 36.3016Z" fill="white" className="fill-[#076AE0]"></path>
                            <path d="M24.0031 26.4016L13.2031 9.60156L34.8031 9.60156L24.0031 26.4016Z" fill="white" className="fill-[#076AE0]"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative h-auto whitespace-pre-wrap break-words flex-none w-full flex flex-col justify-start shrink-0 opacity-100">
                        <h3 className="font-sans text-[32px] not-italic font-semibold leading-10 text-center">Permission-less</h3>
                      </div>
                    </div>
                    <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words flex flex-col justify-start shrink-0 opacity-100">
                      <p className="font-sans text-[20px] not-italic font-normal leading-8 text-center">
                        Minimize the provider lockout and DoS attacks with our permission-less service provider network.
                      </p>
                    </div>
                  </div>
                  <div className="items-center flex flex-none flex-col flex-nowrap gap-[10px] justify-center overflow-hidden p-0 relative w-full will-change-transform h-min rounded-2xl opacity-100">
                    <div className="flex-none relative aspect-video h-auto w-full opacity-100">
                      <div className="contents">
                        <div className="items-center flex flex-col flex-nowrap gap-[10px] justify-center p-0 relative h-full max-w-[100%] w-full opacity-100">
                          <img className={`shadow-lg rounded-2xl image-transparent`} src={permission_less_mobile} decoding="async" data-nimg="1" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}