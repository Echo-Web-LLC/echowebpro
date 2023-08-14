const banner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-200">
            <section>
                <div
                    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center"
                >
                    <div className="fade-in-bottom mx-auto max-w-xl text-center shadow-lg p-10 rounded-xl bg-opacity-5 bg-gray-50">
                        <h1 className="text-2xl font-extrabold sm:text-5xl text-gray-800 drop-shadow-xl">
                            Amplify Your Voice.
                            <br />
                            <strong className="font-extrabold text-black-500 sm:block">
                                Amplify Reach.
                                <br />
                                <span className="text-blue-500">
                                    Resonate.
                                </span>
                            </strong>
                        </h1>

                        <p className="mt-4 sm:text-lg/relaxed text-gray-800">
                            Swiftly deploy brochure sites to lay the foundation for endless possibilities. Our sites have the capability to seamlessly add features and designs as your vision expands. Subtle Steps, Resonating Impact.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-black-400 px-12 py-3 text-sm font-medium text-gray-50 bg-blue-400 shadow hover:bg-black-500 focus:outline-none focus:ring active:bg-black-500 sm:w-auto"
                                href="https://ixqu3aocu0m.typeform.com/to/xbbAeMQY"
                            >
                                Get Started
                            </a>

                            {/* <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-400 shadow hover:text-blue-500 focus:outline-none focus:ring active:text-black-500 sm:w-auto bg-gray-50"
                                href="/about"
                            >
                                Schedule Chat
                            </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default banner
