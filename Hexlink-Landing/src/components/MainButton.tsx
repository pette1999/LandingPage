interface ButtonProps {
  buttonText: string;
  buttonLink: string;
}

export default function MainButton(props: ButtonProps) {
  const { buttonText, buttonLink } = props;

  return (
    <div className="flex items-center flex-none flex-row flex-nowrap gap-[16px] h-min justify-center overflow-visible p-0 relative w-full opacity-100" style={{ transform: "perspective(1200px)" }}>
      <div className="flex-none h-auto relative sm:w-auto w-full block">
        <div className="contents">
          <a className="button-bg text-white font-sans font-semibold text-base flex justify-center h-[48px] bg-[#076AE0] border border-solid border-[#1D4ED8] items-center px-[20px] rounded-md cursor-pointer hover:bg-[#1D4ED8]" style={{ borderColor: "rgba(0,0,0,0.1)" }} href={buttonLink} target="_black">
            <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col justify-start shrink-0 opacity-100">
              <p className="font-sans text-base not-italic font-semibold leading-8 tracking-normal text-start text-white">{buttonText}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}