import Image from 'next/image'
export default function Hero(): JSX.Element {
    return (
        <>
        {/* Hero section */}
            <div className="relative z-[1]">
                <div className="m-auto mt-8 flex w-full flex-col items-center justify-center gap-6 sm:w-full">
                    <div className="from-landing-pink via-landing-cream to-landing-blue shadow-landing-pink cursor-pointer rounded-full bg-gradient-to-r px-0.5 pt-0.5 opacity-100 shadow-md transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                        <a href="https://t.me/atopanell">
                            <button
                                className="flex flex-row items-center justify-center rounded-full bg-[#82774A] px-6 py-2 hover:cursor-pointer hover:opacity-60 sm:w-full sm:px-5"
                                type="button"
                            >
                                {/* <img src="/images/telegram-logo.svg" className="mr-2 h-4 w-4 text-white"/> */}
                                <svg className="h-6 w-6" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        {/* <circle id="Oval" fill="currentColor" cx="500" cy="500" r="500"></circle> */}
                                        <path d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z" id="Path-3" fill="#FFFFFF"></path>
                                    </g>
                                </svg>
                                <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                ready to skyrocket your agency?🚀 
                                </p>
                            </button>
                        </a>
                    </div>
                    <h1 className="w-full text-center text-4xl font-semibold text-black sm:w-3/4 sm:text-6xl">
                        The market leading panel to bring us to {" "}
                        <span className="bg-gradient-to-r from-[#82774A] via-[#82774A] to-[#D9D9D9] text-transparent bg-clip-text">
                            a much higher level
                        </span>
                    </h1>
                    <p className="text-md w-full text-center text-black opacity-75 sm:w-1/2 sm:text-lg">
                        ATO-WEBPANEL is an industry-level dashboard that provides
                        multiple automations for your OFM business.
                    </p>
                    <div className="align-center flex w-full flex-row justify-center gap-4">
                        <a href="https://t.me/atopanell">
                            <button
                                className="flex cursor-pointer flex-row items-center justify-center rounded-md border border-[#82774A] bg-[#82774A] p-4 py-2 opacity-100 transition-all ease-in-out hover:cursor-pointer text-white hover:ease-in focus:ease-out group"
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
                                <p className="relative bottom-[1px] text-sm font-semibold tracking-wide text-white group-hover:text-white">
                                    Give me more info!
                                </p>
                            </button>
                        </a>
                        <a href="https://t.me/atopanell">
                            <button
                                className="flex w-auto cursor-pointer flex-row items-center bg-[#82774A] justify-between rounded-md border border-[#82774A] px-4 py-2 opacity-100 transition-all ease-in-out hover:cursor-pointer hover:opacity-60 hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
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
                                <p className="relative border-[#82774A] bottom-[1px] text-sm font-semibold tracking-wide text-white">
                                    Login to the panel
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
                            Panel currently:{" "}
                            <span className="ml-1 rounded-md  p-1 px-2 font-semibold text-black">
                                Online
                            </span>
                        </p>
                    </div>
                    {/* <div className="w-full">
                        <img src="/images/bg_hero.png" alt="" />
                    </div> */}
                </div>
            </div>
        {/* About */}
            <div className="flex w-full flex-col mt-5">
                <div className="flex w-full flex-col items-center justify-center gap-3 px-6 sm:px-0">
                {/* <div className="flex w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[transparent] to-black px-6 sm:px-0"> */}
                    <div className="flex max-w-[1100px] flex-col items-center justify-center">
                        <Image
                            alt="Logo-with-stats"
                            src="/images/landing_state.jpeg"
                            width={700}
                            height={700}
                        />

                        <div className="flex flex-col items-center gap-2 rounded-md py-4">
                        {/* <div className="flex flex-col items-center gap-2 rounded-md bg-gradient-to-t from-[#0C0B18] to-[transparent] py-4"> */}
                            <h3 className="text-lg font-bold text-black sm:text-xl">
                                Efficient way to structure
                            </h3>
                            <p className="w-full text-center text-sm font-medium text-black sm:w-3/4 sm:text-lg">
                            {/* <p className="w-full text-center text-sm font-medium text-[#767C8A] sm:w-3/4 sm:text-lg"> */}
                            Where all the other companies are doing manual work, we have everything automated in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        {/* Access panel */}
            <div className="flex w-full sm:w-full flex-col items-center pt-12">
                <div
                    className="flex w-full flex-col items-center"
                >
                    <div className="flex w-full max-w-[1100px] flex-col items-center justify-center">
                        <div className="shadow-landing-pink my-2 rounded-full  px-0.5 pt-0.5 shadow-md">
                            <div className="flex flex-row items-center justify-center rounded-full bg-[#82774A] px-6 py-2 sm:w-full sm:px-5">
                                <a href="https://t.me/atopanell">
                                    <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                        I want to access this panel
                                    </p>

                                </a>
                            </div>
                        </div>
                        <div className="my-8 grid w-full grid-cols-1 items-start align-center justify-center gap-8 text-center align-middle sm:grid-cols-4">
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image 
                                    alt="icon"  
                                    src="/images/leaderboard.png" 
                                    className="filter grayscale"
                                    height={30}
                                    width={30}/>
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Dating apps
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                A well structured panel with multiple dating apps. From here you can start gaining mass traffic for your models.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image
                                    alt="icon"
                                    src="/images/flawless_icon.png"
                                    className="grayscale filter"
                                    height={30}
                                    width={30}/>
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                Social Media
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                A well structured panel with multiple social media platforms. From here you can start gaining mass traffic for your models with 24/7 livestreams and mother slave systems.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image 
                                    alt="icon" 
                                    src="/images/promo.png" 
                                    className="filter grayscale"
                                    height={30}
                                    width={30}/>
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                AI-Chatting
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                Forget working with chatters from 3th world countries and start with implementing AI chatting for your models.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image 
                                    alt="icon" 
                                    src="/images/safe.svg" 
                                    className="filter grayscale"
                                    height={30}
                                    width={30}/>
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                Chatting boosters
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                A chat ratio of 1:5 is not htere anymore. boost your chatting ratio with systems. Clone voices for sending memos and send live pictures without being there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Edit layer */}        
            <div
                className="flex w-full sm:w-full flex-col items-center bg-white"
                id="analytics"
            >
                <div className="align-center flex w-full max-w-[1100px] flex-col items-center justify-center">
                    <div className="mt-8 hidden items-center justify-center sm:flex">
                        <Image 
                            alt="photos" 
                            src="/images/lines.png"
                            width={1100}
                            height={100} />
                    </div>
                    <div className="relative mt-8 items-center justify-center sm:hidden">
                        <Image
                            alt="photos"
                            src="/images/mobile_landing_lines.png"
                            width={300}
                            height={100}
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center">
                        <div className="shadow-landing-pink my-2 rounded-full bg-[#82774A] px-0.5 pt-0.5 shadow-md">
                            <div className="flex flex-row items-center justify-center rounded-full bg-[#82774A] px-6 py-2 sm:w-full sm:px-5">
                                <a href="https://t.me/atopanell">
                                    <p className="uppercase relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                    Login to my panel
                                    </p>

                                </a>
                            </div>
                        </div>
                        <div className="my-8 grid w-full grid-cols-1 items-start align-center justify-center gap-8 text-center align-middle sm:grid-cols-4 sm:grid-rows-2 row-end-auto">
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image
                                    alt="icon"
                                    src="/images/crosshair.svg"
                                    className="h-[32px] w-[32px] filter grayscale"
                                    width="50"
                                    height="50"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                Account Activity
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                Keep track of all the data with the data system whats integrated in the panel.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image
                                    alt="icon"
                                    src="/images/dots.svg"
                                    className="h-[32px] w-[32px]  filter grayscale"
                                    width="50"
                                    height="50"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                All-In-One
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                The only all-in-one panel in the world witch you can use to run traffic, convert the traffic and make money from the traffic.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image
                                    alt="icon"
                                    src="/images/pie-chart.svg"
                                    className="h-[32px] w-[32px]  filter grayscale"
                                    width="50"
                                    height="50"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                Improve
                                </h3>
                                <p className="text-xs text-black leading-5 w-full font-medium">
                                Elevate your agency and scale with automating and make it more easy for you and your team.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <Image
                                    alt="icon"
                                    src="/images/presentation.svg"
                                    className="h-[32px] w-[32px]  filter grayscale"
                                    width="50"
                                    height="50"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                Upcoming growth 
                                </h3>
                                <p className="text-xs text-black  leading-5 w-full font-medium">
                                We are currently working on more automations and systems to add, to make it more easy for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* Join the WaitList */}
            <div className="flex w-full sm:w-full flex-col items-center bg-gradient-to-b bg-white to-[#080818] sm:px-6 rounded-t-md">
                <div className="align-center flex w-full sm:max-w-[1100px] flex-col items-center justify-center text-center">
                    <div className="relative align-center flex h-full w-full flex-col items-center justify-center rounded-t-md bg-gradient-to-br from-[#12121A] to-[#09090C] border border-[#19191F]">
                        <div className="absolute top-5 right-5 sm:invisible">
                            <Image 
                                src="/images/logo.png"
                                className="z-[2] " 
                                alt="logo" 
                                width="100" 
                                height="100"/>
                        </div>
                        <div className="flex h-full w-full flex-col bg-white bg-right-top bg-no-repeat sm:bg-[length:256px]">
                            <div className="align-center flex h-full w-full flex-col items-center justify-center px-20 py-12 sm:py-36">
                                {/* <div className="my-4 flex h-18 w-48">
                                    <img
                                        alt="waitlist"
                                        src="/images/waitlist.png"
                                    />
                                </div> */}
                                <h2 className="text-2xl font-semibold text-black sm:text-4xl ">
                                    Join The Waitlist
                                </h2>
                                <h3 className="text-md mt-1 w-full text-center font-light text-black sm:mt-5 sm:w-2/3">
                                    Due to high demand for our software, we are
                                    only accepting clients through our
                                    applications and waitlist process at this
                                    time.
                                </h3>
                                <div className="mt-4 flex w-full flex-col items-center justify-center ">
                                    <a href="https://t.me/atopanell">
                                        <button
                                            className="flex flex-row items-center justify-center rounded-md border-[#82774A] bg-gradient-to-b from-[#82774A] to-[#D9D9D9] px-10 py-2 sm:w-full sm:px-28 opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                            type="button"
                                        >
                                            <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                                Join Waitlist
                                            </p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </>
    );
}
