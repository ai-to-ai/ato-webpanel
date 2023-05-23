export default function ChatTeam(): JSX.Element {
    return (
        <>
            <div className="flex w-[90%] sm:w-full flex-col items-center pt-12">
                <div
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
                </div>
                <div
                    className="flex w-full flex-col items-center sm:mt-48"
                    style={{
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(8,8,24,0) 100%)",
                    }}
                >
                    <div className="mt-12 flex w-full max-w-[1100px] flex-col items-center justify-center">
                        <div className="shadow-landing-pink my-2 rounded-full bg-gradient-to-r from-[#6070FB] via-[#FFC289] to-[#FF0F9F] px-0.5 pt-0.5 shadow-md">
                            <div className="flex flex-row items-center justify-center rounded-full bg-[#080818] px-6 py-2 sm:w-full sm:px-5">
                                <p className="relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                    Learn More
                                </p>
                            </div>
                        </div>
                        <div className="my-8 grid w-full grid-cols-1 items-start align-center justify-center gap-8 text-center align-middle sm:grid-cols-4 sm:grid-rows-2 row-end-auto">
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/leaderboard.png" />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                    Customer Insight
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                    We provide a simple and effective solution
                                    to consumer analytics. Know your target
                                    audience to scale your overall revenue.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/flawless_icon.png"
                                />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                    Flawless Chatting Experience
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                    Compatible with Mobile &amp; PC, your team
                                    can use OnlyPanel from anywhere. With many
                                    unique features to automate your experience.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/promo.png" />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                    Monetize &amp; Mass DM
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                    Automate sales funnel and mass promote to
                                    monetize your messages. Select among your
                                    custom list of target audience.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img alt="icon" src="/images/safe.svg" />
                                <h3 className="text-md font-semibold text-white tracking-wide mt-2">
                                    Secure Vault
                                </h3>
                                <p className="text-xs text-[#C1C1C4] leading-5 w-full font-medium">
                                    Store thousands of pictures and videos, and
                                    securely monetize content with ease.
                                    OnlyPanel is integrated with OF Vault.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
