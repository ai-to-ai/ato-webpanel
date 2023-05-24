import Image from "next/image";

export default function Header(): JSX.Element {
    return (
        <>
            <div className="m-auto flex w-full flex-col border-b-2 border-black">
                <div className="w-full">
                    <div className="m-auto flex w-full flex-row md:flex md:flex-grow sm:grid sm:w-full sm:grid-cols-3">
                        <div className="flex w-full justify-start">
                            <a
                                className="flex items-center uppercase font-black text-3xl cursor-pointer opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                href="/"
                            >
                                    <Image
                                    alt="logo-image"
                                    src="/images/logo.png"
                                    height={60}
                                    width={60}
                                    className="w-[60px]"
                                />
                                ato

                            </a>
                        </div>
                        <div className="align-center flex justify-end sm:hidden">
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className=" h-8 w-8 text-black"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* <ul className="hidden sm:flex sm:flex-row">
                            <li className="flex w-full items-center justify-center">
                                <a
                                    className="text-black cursor-pointer text-sm font-semibold opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                    href="/#messages"
                                >
                                    Messages
                                </a>
                            </li>
                            <li className="flex w-full items-center justify-center">
                                <a
                                    className="text-black cursor-pointer text-sm font-semibold opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                    href="/#creators"
                                >
                                    Creators
                                </a>
                            </li>
                            <li className="flex w-full items-center justify-center">
                                <a
                                    className="text-black cursor-pointer text-sm font-semibold opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                    href="/#analytics"
                                >
                                    Analytics
                                </a>
                            </li>
                            <li className="flex w-full items-center justify-center">
                                <a
                                    className="text-black cursor-pointer text-sm font-semibold opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                    href="/#security"
                                >
                                    Security
                                </a>
                            </li>
                        </ul> */}
                        <div className="hidden sm:flex sm:justify-end sm:self-center">
                            <a href="/login">
                                <button className="flex w-[150px] cursor-pointer flex-row items-center justify-evenly rounded-md border border-[#82774A] bg-[#82774A] p-2 opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                    <Image
                                        alt="key icon"
                                        src="/images/key.svg"
                                        height={50}
                                        width={50}
                                        className="h-[18px] w-[18px]"
                                    />
                                    <p className="text-xs font-semibold tracking-wide text-white">
                                        Log in to the panel
                                    </p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
