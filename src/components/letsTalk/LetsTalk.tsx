export const LetsTalk = () => {
  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 px-20 pb-20">
      <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-12 rounded-lg bg-[#f9f9f9]">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[369px] relative gap-6">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[369px] text-6xl font-semibold text-left text-black">
            Let’s Talk
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[369px] text-lg text-left text-black">
            Ready to bring your vision to life? Get in touch, and let’s build
            something great together.
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[409.35px] text-[26px] font-bold text-left text-black">
            hello@web41.agency
          </p>
          <div className="flex flex-row-reverse justify-center items-center flex-grow-0 flex-shrink-0 relative space-x-[-12px] space-x-reverse">
            <svg
              width={88}
              height={89}
              viewBox="0 0 88 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-20 h-20 relative"
              preserveAspectRatio="none"
            >
              <rect
                x={2}
                y="2.5"
                width={84}
                height={84}
                rx={42}
                fill="#DBFF04"
              />
              <rect
                x={2}
                y="2.5"
                width={84}
                height={84}
                rx={42}
                stroke="#F9F9F9"
                stroke-width={4}
              />
              <path
                d="M58.6482 30.8137L24 42.8345L39.9099 49.552M58.6482 30.8137L46.6274 65.4619L39.9099 49.552M58.6482 30.8137L39.9099 49.552"
                stroke="black"
                stroke-width="0.8"
              />
            </svg>
            <div className="flex-grow-0 flex-shrink-0 w-20 h-20 relative overflow-hidden rounded-[903.95px] bg-white border-4 border-[#f9f9f9]" />
            <div className="flex-grow-0 flex-shrink-0 w-20 h-20 relative overflow-hidden rounded-[903.95px] bg-white border-4 border-[#f9f9f9]" />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[584px] gap-4">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-16 relative overflow-hidden gap-2.5 px-6 py-[18px] rounded bg-white">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-center text-[#868686]">
              Name
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-16 relative overflow-hidden gap-2.5 px-6 py-[18px] rounded bg-white">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-center text-[#868686]">
              Contact email
            </p>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[147px] relative overflow-hidden gap-2.5 px-6 py-[18px] rounded bg-white">
            <p className="flex-grow-0 flex-shrink-0 text-lg text-center text-[#868686]">
              Type your message
            </p>
          </div>
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-1 px-6 py-4 rounded-[100px] bg-black">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-white">
              Send Message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
