import Image from 'next/image'
export default function Footer(): JSX.Element {
    return (
        <>
            <div className="align-center flex w-full flex-col items-center border-t border-[#a5907f] bg-white py-16 px-12 sm:flex-row sm:justify-between mt-5">
                <div className="align-start m-auto grid w-full max-w-[1100px] grid-cols-1 justify-start gap-4 sm:grid-cols-2">
                    <div className="align-center flex w-full flex-col items-center gap-4 text-center sm:items-start sm:text-start">
                        <a href="/">
                            <Image
                                alt="OnlyPanel Logo"
                                src="/images/logo.png"
                                width={60}
                                height={60}
                                className="h-20 w-20 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                            />
                        </a>
                        <p className="text-xs leading-5 tracking-wide text-[#84848B]">
                            © 2023. All rights reserved. ATO is not is not responsible for possible damages..
                        </p>
                    </div>
                    {/* <div className="align-center flex w-full flex-col items-center gap-2">
                        <p className="text-sm font-medium tracking-wide text-white">
                            Resources
                        </p>
                        <a href="#">
                            <p className="text-xs font-medium tracking-wide text-[#84848B] transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                Documentation
                            </p>
                        </a>
                        <a href="#">
                            <p className="text-xs font-medium tracking-wide text-[#84848B] transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                Chrome Extension
                            </p>
                        </a>
                        <a href="#">
                            <p className="text-xs font-medium tracking-wide text-[#84848B] transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                Need Help? Contact Us
                            </p>
                        </a>
                    </div>
                    <div className="align-center flex w-full flex-col items-center gap-2">
                        <p className="text-sm font-medium tracking-wide text-white">
                            Legal
                        </p>
                        <a href="#">
                            <p className="text-xs font-medium tracking-wide text-[#84848B] transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                Terms of Service
                            </p>
                        </a>
                        <a href="#">
                            <p className="text-xs font-medium tracking-wide text-[#84848B] transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                Privacy Policy
                            </p>
                        </a>
                    </div> */}
                    <div className="align-center flex w-full flex-row items-center justify-center gap-4 sm:items-start sm:justify-end">
                        <a href="https://t.me/atosolutions">
                        <svg className="h-16 w-16" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        {/* <circle id="Oval" fill="currentColor" cx="500" cy="500" r="500"></circle> */}
                                        <path d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z" id="Path-3" fill="#82774A"></path>
                                    </g>
                                </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
