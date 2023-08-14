import Image from "next/image";
import ripple from "../../public/jason-rosewell-ASKeuOZqhYU-unsplash.jpg";
import city from "../../public/eric-nopanen-8e0EHPUx3Mo-unsplash.jpg";

const sectionCTA = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="bg-blue-300 p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center">
                                <h2 className="text-2xl font-bold text-white md:text-3xl">
                                    Amplify Your Voice with Echo Web, LLC
                                </h2>

                                <p className="hidden text-white/90 sm:mt-4 sm:block">
                                    Turn frustration into digital delight! Just like a determined kid's resounding yell, Echo Web LLC transforms your business energy into echoing rewards. Let us help your brand resound across the world with expert strategies that deliver. Elevate your voice with Echo Web LLC and watch your message reach new horizons.
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <a
                                        href="https://ixqu3aocu0m.typeform.com/to/xbbAeMQY"
                                        className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-400"
                                    >
                                        Make My Echo <span className="text-xs text-gray-400">(Free Consultation)</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <Image
                                alt="water ripple"
                                height={450}
                                width={450}
                                src={ripple}
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />

                            <Image
                                alt="city"
                                height={450}
                                width={450}
                                src={city}
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default sectionCTA
