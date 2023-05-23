export default function ManageCreator(): JSX.Element {
    return (
        <>
            <div
                className="flex w-[90%] sm:w-full flex-col items-center bg-white pt-24"
                id="creators"
            >
                <div className="align-center flex w-full max-w-[1100px] flex-col items-center justify-center">
                    <div className="sm:w-58 sm:h-58 flex h-10 w-10 flex-col">
                        <img alt="creators-icon" src="/images/creators.svg" />
                    </div>
                    <h2 className="text-2xl font-semibold text-black sm:text-4xl">
                        Manage Your Creators
                    </h2>
                    <h3 className="text-md mt-5 font-medium text-black text-opacity-50 mb-4">
                        Creator Overview
                    </h3>
                    <div className="mt-4 flex flex-col items-center justify-center">
                        <img
                            alt="image-of-dashboard"
                            src="/images/bg_creators.png"
                        />
                    </div>
                    <div className="right-4 mt-20 hidden items-center justify-center sm:relative sm:flex">
                        <img alt="photos" src="/images/preview.png" />
                    </div>
                    <div className="relative mt-20 items-center justify-center sm:hidden">
                        <img
                            alt="photos"
                            src="/images/mobile_landing_lines.png"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center ">
                        <div className="shadow-landing-pink my-2 rounded-full bg-gradient-to-r from-[#6070FB] via-[#FFC289] to-[#FF0F9F] px-0.5 pt-0.5 shadow-md">
                            <div className="flex flex-row items-center justify-center rounded-full bg-[#080818] px-6 py-2 sm:w-full sm:px-5">
                                <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                    Learn More
                                </p>
                            </div>
                        </div>
                        <div className="my-8 grid w-full grid-cols-1 items-start align-center justify-center gap-8 text-center align-middle sm:grid-cols-4 sm:grid-rows-2 row-end-auto">
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/aio.svg" />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    All-In-One Solution
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                    Creator profiles are setup in a way where
                                    Chatters can access it with ease. Customize
                                    permission roles, and manage hundreds of
                                    Creators all on our dashboard!
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/person.svg" />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Earnings &amp; Analytics
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                    Filter and View all your statements in one
                                    place. Tax season is going to be much
                                    easier!
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/crosshair.svg" />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Activity History
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                    OnlyPanel provides an activity history for
                                    every Creator profile Managers of an agency
                                    may access this log to make sure your team
                                    is on task.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/presentation.svg"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Upcoming Growth Tools
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                    We are currently working on automated bots
                                    that will help scale your marketing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
