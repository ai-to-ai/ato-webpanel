export default function Join(): JSX.Element {
    return (
        <>
            <div className="flex w-[90%] sm:w-full flex-col items-center bg-gradient-to-b bg-white to-[#080818] sm:px-6 rounded-t-md">
                <div className="align-center flex w-full sm:max-w-[1100px] flex-col items-center justify-center text-center">
                    <div className="relative align-center flex h-full w-full flex-col items-center justify-center rounded-t-md bg-gradient-to-br from-[#12121A] to-[#09090C] border border-[#19191F] border-b-0">
                        <div className="absolute top-5 right-5">
                            <img src="/images/logo.png" className="rotate-45 z-[2]" alt="logo" width="100" height="100"/>
                        </div>
                        <div className="flex h-full w-full flex-col bg-white bg-right-top bg-no-repeat sm:bg-[length:256px]">
                            <div className="align-center flex h-full w-full flex-col items-center justify-center px-20 py-12 sm:py-36">
                                <div className="my-4 flex h-18 w-48">
                                    <img
                                        alt="waitlist"
                                        src="/images/waitlist.png"
                                    />
                                </div>
                                <h2 className="text-2xl font-semibold text-black sm:text-4xl">
                                    Join The Waitlist
                                </h2>
                                <h3 className="text-md mt-1 w-full text-center font-light text-black sm:mt-5 sm:w-2/3">
                                    Due to high demand for our software, we are
                                    only accepting clients through our
                                    applications and waitlist process at this
                                    time.
                                </h3>
                                <div className="mt-4 flex w-full flex-col items-center justify-center ">
                                    <a href="#">
                                        <button
                                            className="flex flex-row items-center justify-center rounded-md border-[#887EFF] bg-gradient-to-b from-[#7684ff] to-[#5a57f0] px-10 py-2 sm:w-full sm:px-28 opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
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
