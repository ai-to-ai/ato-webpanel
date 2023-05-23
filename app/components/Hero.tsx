export default function Hero(): JSX.Element {
    return (
        <>
            <div className="relative z-[1]">
                <div className="m-auto mt-8 flex w-[90%] flex-col items-center justify-center gap-6 sm:w-full">
                    <div className="from-landing-pink via-landing-cream to-landing-blue shadow-landing-pink cursor-pointer rounded-full bg-gradient-to-r px-0.5 pt-0.5 opacity-100 shadow-md transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                        <a href="#">
                            <button
                                className="flex flex-row items-center justify-center rounded-full bg-[#080818] px-6 py-2 hover:cursor-pointer hover:opacity-60 sm:w-full sm:px-5"
                                type="button"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 640 512"
                                    className="mr-2 h-4 w-4 text-[#fff]"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                                </svg>
                                <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                    Our Software is Full.{" "}
                                    <span className="font-semibold">
                                        Join the Waitlist
                                    </span>
                                </p>
                            </button>
                        </a>
                    </div>
                    <h1 className="w-full text-center text-4xl font-semibold text-black sm:w-3/4 sm:text-6xl">
                        The only management panel you'll
                        <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-transparent bg-clip-text">
                            need to elevate
                        </span>
                    </h1>
                    <p className="text-md w-full text-center text-white opacity-75 sm:w-1/2 sm:text-lg">
                        Only Panel is an industry-level dashboard that provides
                        an automated experience for Management Agencies
                    </p>
                    <div className="align-center flex w-full flex-row justify-center gap-4">
                        <a href="#">
                            <button
                                className="flex cursor-pointer flex-row items-center justify-center rounded-md border border-[#20202D] bg-transparent p-4 py-2 opacity-100 transition-all ease-in-out hover:cursor-pointer hover:bg-black hover:ease-in focus:bg-[#20202D] focus:ease-out text-black group"
                                type="button"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 16 16"
                                    className="mr-2 h-4 w-4 group-hover:fill-white"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 2l1-1h9l1 1v12l-1 1H3l-1-1V2zm1 0v12h9V2H3zm1 2l1-1h5l1 1v1l-1 1H5L4 5V4zm1 0v1h5V4H5zm10 1h-1v2h1V5zm-1 3h1v2h-1V8zm1 3h-1v2h1v-2z"
                                    />
                                </svg>
                                <p className="relative bottom-[1px] text-sm font-semibold tracking-wide text-black group-hover:text-white">
                                    Learn More
                                </p>
                            </button>
                        </a>
                        <a href="#">
                            <button
                                className="flex w-auto cursor-pointer flex-row items-center justify-between rounded-md border border-[#887EFF] bg-gradient-to-b from-[#7684ff] to-[#5a57f0] px-4 py-2 opacity-100 transition-all ease-in-out hover:cursor-pointer hover:opacity-60 hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                type="button"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 512 512"
                                    className="mr-2 h-4 w-4 text-[#fff]"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z" />
                                </svg>
                                <p className="relative bottom-[1px] text-sm font-semibold tracking-wide text-white">
                                    Apply Today
                                </p>
                            </button>
                        </a>
                    </div>
                    <div className="align-center flex w-full flex-row justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="mr-1 h-4 w-4 text-[#848488]"
                        >
                            <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                            <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                        </svg>
                        <p className="text-xs font-medium tracking-wide text-[#848488]">
                            Chatting Service:{" "}
                            <span className="ml-1 rounded-md bg-[#8976FF]/[.2] p-1 px-2 font-semibold text-[#8976FF]">
                                Full
                            </span>
                        </p>
                    </div>
                    <div className="w-full">
                        <img src="/images/bg_hero.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
