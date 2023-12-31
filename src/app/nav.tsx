import Image from "next/image"
import logo from '../../public/iconlogo.jpg'

const nav = () => {
    return (
        <div>
            <header className="bg-white">
                <div
                    className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
                >
                    <a className="block text-gray-600" href="">
                        <span className="sr-only">Home</span>
                        <Image
                            src={logo}
                            alt="logo"
                            height={50}
                            width={50}
                            className="rounded-md"
                        />
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            {/* <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Services
                                    </a>
                                </li>

                                <li>
                                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                                        Works
                                    </a>
                                </li>
                            </ul> */}
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-gray-50 transition hover:bg-blue-500"
                                    href="https://ixqu3aocu0m.typeform.com/to/xbbAeMQY"
                                >
                                    Schedule Meet
                                </a>
                            </div>

                            {/* <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button> */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default nav
