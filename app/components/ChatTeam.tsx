export default function ChatTeam(): JSX.Element {
    return (
        <>
            <div className="flex w-[90%] sm:w-full flex-col items-center pt-12">
                {/* <div
                    className="relative flex w-full flex-col items-center justify-center gap-3 px-6 sm:top-36 sm:px-0"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(188,107,217,1) -25%, rgba(8,8,24,0) 35%)",
                    }}
                >
                    <div
                        className="align-center flex w-full max-w-[1100px] flex-col items-center justify-center"
                        id="messages"
                    >
                        <div className="flex w-full max-w-[1100px] flex-col items-center">
                            <div className="sm:w-58 sm:h-58 flex h-10 w-10 flex-col">
                                <img
                                    alt="icon-chat-bubble"
                                    src="/images/double-chat-bubble.svg"
                                />
                            </div>
                            <h2 className="text-2xl font-semibold text-black sm:text-4xl">
                                Scale Your Chat Team
                            </h2>
                            <h3 className="text-md mt-5 font-medium text-black">
                                Message Center
                            </h3>
                        </div>
                        <div className="mt-4 flex flex-col items-center justify-center">
                            <img
                                alt="OnlyPanel Message Overview"
                                src="/images/bg_messages.png"
                            />
                        </div>
                    </div>
                </div> */}
                <div
                    className="flex w-full flex-col items-center"
                    // style={{
                    //     background:
                    //         "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(8,8,24,0) 100%)",
                    // }}
                >
                    <div className="flex w-full max-w-[1100px] flex-col items-center justify-center">
                        <div className="shadow-landing-pink my-2 rounded-full bg-gradient-to-r from-[#6070FB] via-[#FFC289] to-[#FF0F9F] px-0.5 pt-0.5 shadow-md">
                            <div className="flex flex-row items-center justify-center rounded-full bg-[#080818] px-6 py-2 sm:w-full sm:px-5">
                                <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                    I want to access this panel
                                </p>
                            </div>
                        </div>
                        <div className="my-8 grid w-full grid-cols-1 items-start align-center justify-center gap-8 text-center align-middle sm:grid-cols-4">
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/leaderboard.png" />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                    Dating apps
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                A well structured panel with multiple dating apps. From here you can start gaining mass trafic for your models.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/flawless_icon.png"
                                />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                Social Media
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                A well structured panel with multiple social media platforms. From here you can starr gaining mass trafic for your models with 24/7 livestreawms and mother slave systems.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/promo.png" />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                AI-Chatting
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                Forgot working with chatters from 3th world countries and start with implementing AI chatting for your models.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/safe.svg" />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                Chatting boosters
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                A chat ratio of 1:5 is not htere anymore. boost your chatting ratio with systems. Clone voices for sending memos and send live pictures without being there.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
