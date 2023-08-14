const Stats = () => {
    return (
        <div className="bg-blue-50">
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className=" drop-shadow-lg text-3xl font-bold text-gray-800 sm:text-4xl">
                            Trusted by Locals
                        </h2>

                        <p className="mt-4 text-gray-500 sm:text-xl">
                            "Embraced by our community: Echo Web LLC, the choice of churches, cafes, fitness clubs, restaurants, musicians, and artists. We offer tailored, budget-friendly solutions, earning your trust."
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    mobile responsiveness
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                                    100%
                                </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Average Searchabiity Score <span className="text-xs">(out of 100)</span>
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                                    90+
                                </dd>
                            </div>

                            <div
                                className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
                            >
                                <dt className="order-last text-lg font-medium text-gray-500">
                                    Fastest Delivery Date <span className="hover:opacity-75 text-xs"> <a href="termsandconditions">(See Terms and Conditions)</a></span>
                                </dt>

                                <dd className="text-4xl font-extrabold text-blue-500 md:text-5xl">
                                    &lt; 1 Day
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stats
