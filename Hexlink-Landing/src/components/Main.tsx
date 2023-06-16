import { useState, useEffect } from "react";

export default function Main() {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate: string[] = ["Phone Number", "Email Address", "Social Account"];
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
      <div className="custom-screen py-28">
        <div className=" duration-1000 delay-300 opacity-1">
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <h1 className="main-bg-image text-4xl bg-clip-text text-transparent font-extrabold mx-auto sm:text-[60px] leading-tight">
              Smart Account Layer
              <h1 className="text-4xl bg-clip-text text-transparent font-extrabold mx-auto sm:text-[40px] leading-tight"><span className="text-[#308AF5]">{text}</span> is your web3 account</h1>
            </h1>
            <p className="max-w-xl mx-auto text-gray-300">
              Enable flexibilities in choosing auth solution providers and permits the use of upper-layer applications with a seamless Web2 user experience without compromising security measures
            </p>
            <div className="flex justify-center font-medium text-sm">
              <a className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center text-white bg-[#076AE0] hover:bg-[#308AF5] active:bg-[#308AF5] " href="https://dev.hexlink.io/">
                <span className="pl-2">Our demo</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="relative mt-16 sm:mt-28">
            <div className="picture-background absolute m-auto blur-[160px] max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"></div>
            <div className="relative">
              <img className="shadow-lg rounded-2xl image-transparent" src="https://eclipsefin.netlify.app/_ipx/w_3840,q_75/%2F_next%2Fstatic%2Fmedia%2Freadme1.f23860ab.png?url=%2F_next%2Fstatic%2Fmedia%2Freadme1.f23860ab.png&w=3840&q=75" width="1920" height="1080" decoding="async" data-nimg="1" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}