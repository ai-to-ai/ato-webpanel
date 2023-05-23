export default function ImproveWork(): JSX.Element {
    return (
        <>
            <div
                className="flex w-[90%] sm:w-full flex-col items-center bg-white pt-24 sm:pt-32"
                id="security"
            >
                <div className="align-center flex w-full max-w-[1100px] flex-col items-start justify-start rounded-md py-8 px-4 sm:p-8 bg-[url('/images/bg_security.png')] bg-center sm:bg-[left_calc(0%)_top_calc(50%)] bg-contain bg-no-repeat">
                    <div className="flex flex-col justify-start align-start text-start mb-12 sm:mb-18">
                        <div className="mb-2">
                            <img
                                alt="Security"
                                src="/images/icon_security.svg"
                            />
                        </div>
                        <h2 className="text-2xl font-semibold text-white sm:text-4xl">
                            Improve Work Environment
                        </h2>
                        <p className="text-sm sm:text-md mt-1 font-light text-white text-opacity-50 w-full sm:w-1/2 text-start">
                            Get ready to elevate your agency and allow our
                            software to automate your organization.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start align-center w-full mb-8 sm:mt-8 gap-8 sm:gap-4">
                        <div className="flex flex-col justify-start align-start w-full rounded-md py-4 bg-[#18181E]/[.9] border border-[#36363D]">
                            <img
                                src="/images/security_creator_group.png"
                                alt="Security"
                                className="w-full mb-4"
                            />
                            <div className="w-full flex flex-col px-4">
                                <p className="text-white text-2xl tracking-wide font-medium">
                                    Take back every hour you lost with the
                                    nuances of managing an agency.
                                </p>
                                <p className="text-white/[.75] text-sm tracking-wide font-body mt-2 leading-6">
                                    As a means to provide our clients with
                                    growth and scalability, we provide numerous
                                    softwares and features. Our first build
                                    being an OnlyFans Creator Management
                                    Dashboard, where you can manage hundreds of
                                    creators in one place.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start align-start w-full rounded-md py-4 bg-[#18181E]/[.9] border border-[#36363D]">
                            <img
                                src="/images/security_information_group.png"
                                alt="Security"
                                className="w-full mb-4"
                            />
                            <div className="w-full flex flex-col px-4">
                                <p className="text-white text-2xl tracking-wide font-medium">
                                    Increase security protocols. No more
                                    mismanaging login information between teams.
                                </p>
                                <p className="text-white/[.75] text-sm tracking-wide font-body mt-2 leading-6">
                                    Our dashboard safely connects to your
                                    creator account by syncing to our google
                                    chrome extension. Once you've finished
                                    setting up, your chat team can access and
                                    message on the account from anywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
