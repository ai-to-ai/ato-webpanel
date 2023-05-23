export default function ConsumerAnalytics(): JSX.Element {
    return (
        <>
            <div
                className="flex w-[90%] sm:w-full flex-col items-center bg-white"
                id="analytics"
            >
                <div className="align-center flex w-full max-w-[1100px] flex-col items-center justify-center">
                    {/* <div className="sm:w-58 sm:h-58 flex h-10 w-10 flex-col">
                        <img
                            alt="creators-icon"
                            src="/images/reports-chart.svg"
                        />
                    </div>
                    <h2 className="text-2xl font-semibold text-black sm:text-4xl">
                        Consumer Analytics
                    </h2>
                    <h3 className="text-md mt-5 font-medium text-black text-opacity-50 mb-4">
                        Elevate your promotional content by following data
                        trends
                    </h3>
                    <div className="mt-4 flex flex-col items-center justify-center">
                        <img
                            alt="image-of-dashboard"
                            src="/images/bg_analytics.png"
                        />
                    </div> */}
                    <div className="mt-8 hidden items-center justify-center sm:flex">
                        <img alt="photos" src="/images/lines.png" />
                    </div>
                    <div className="relative mt-8 items-center justify-center sm:hidden">
                        <img
                            alt="photos"
                            src="/images/mobile_landing_lines.png"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center justify-center">
                        <div className="shadow-landing-pink my-2 rounded-full bg-gradient-to-r from-[#6070FB] via-[#FFC289] to-[#FF0F9F] px-0.5 pt-0.5 shadow-md">
                            <div className="flex flex-row items-center justify-center rounded-full bg-[#080818] px-6 py-2 sm:w-full sm:px-5">
                                <p className="uppercase relative bottom-[1px] text-xs font-light tracking-wide text-white sm:text-sm">
                                    Editable
                                </p>
                            </div>
                        </div>
                        <div className="my-8 grid w-full grid-cols-1 items-start align-center justify-center gap-8 text-center align-middle sm:grid-cols-4 sm:grid-rows-2 row-end-auto">
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/crosshair.svg"
                                    className="h-[32px] w-[32px]"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Edit Layer
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                    I want to edit this later.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/dots.svg"
                                    className="h-[32px] w-[32px]"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                Edit Layer
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                I want to edit this later.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/pie-chart.svg"
                                    className="h-[32px] w-[32px]"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Edit Layer
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                I want to edit this later.
                                </p>
                            </div>
                            <div className="flex flex-col items-center align-center justify-center align-center w-full">
                                <img
                                    alt="icon"
                                    src="/images/presentation.svg"
                                    className="h-[32px] w-[32px]"
                                />
                                <h3 className="text-md font-semibold text-black tracking-wide mt-2">
                                    Edit Layer
                                </h3>
                                <p className="text-xs text-black text-opacity-50 leading-5 w-full font-medium">
                                I want to edit this later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
