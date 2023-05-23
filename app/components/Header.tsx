import Image from "next/image";

export default function Header(): JSX.Element {
    return (
        <>
            <div className="m-auto flex w-full flex-col ">
                <div className="border-[#a5907f] w-full border-b py-4 ">
                    <div className="m-auto flex w-[90%] flex-row sm:grid sm:w-full sm:grid-cols-3">
                        <div className="flex w-full justify-start">
                            <a
                                className="cursor-pointer opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out"
                                href="/"
                            >
                                <Image
                                    alt="logo-image"
                                    src="/images/logo.svg"
                                    height={100}
                                    width={100}
                                    className="w-[160px]"
                                />
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
                        <ul className="hidden sm:flex sm:flex-row">
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
                        </ul>
                        <div className="hidden sm:flex sm:justify-end sm:self-center">
                            <a href="/login">
                                <button className="flex w-auto cursor-pointer flex-row items-center justify-between rounded-md border border-[#887EFF] bg-gradient-to-b from-[#7684ff] to-[#5a57f0] p-2 opacity-100 transition-all ease-in-out hover:opacity-80 hover:ease-in focus:opacity-60 focus:ease-out">
                                    <Image
                                        alt="key icon"
                                        src="/images/key.svg"
                                        height={50}
                                        width={50}
                                        className="h-[18px] w-[18px]"
                                    />
                                    <p className="text-xs font-semibold tracking-wide text-white">
                                        Sign In
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
