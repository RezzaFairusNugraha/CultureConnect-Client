import AboutImage from "/images/About.png";

const About = () => {
    return (
        <>
            <div className="homePage pb-10">
                <div className="container mx-auto px-5">
                    <div className="about grid md:grid-cols-2 grid-cols-1 items-center pt-10">
                        <div className="box">
                        <img
                            src={AboutImage}
                            alt="Hero Image"
                            className="md:w-full w-[400px] mx-auto md:m-0"
                        />
                        </div>
                        <div className="box">
                        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
                            Mari temukan pengalaman hebat bersama kami
                        </h1>
                        <p className="text-base/8 mb-7">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eligendi alias est necessitatibus soluta facere quisquam
                            dolore rerum hic aliquam nostrum?
                        </p>
                        <div className="p-4 ">
                            <div className="flex gap-4 flex-wrap justify-start">
                            {/* CARD 1 */}
                            <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400">
                                <svg
                                className="w-6 h-6 text-gray-500 dark:text-gray-400 mb-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                >
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                                </svg>
                                <a href="#">
                                <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white ">
                                    Need help in Claim?
                                </h5>
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                See the step-by-step guide on how to certify for weekly
                                benefits.
                                </p>
                            </div>
        
                            {/* CARD 2 */}
                            <div className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-400">
                                <svg
                                className="w-6 h-6 text-gray-500 dark:text-gray-400 mb-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                >
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                                </svg>
                                <a href="#">
                                <h5 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Need help in Claim?
                                </h5>
                                </a>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                See the step-by-step guide on how to certify for weekly
                                benefits.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;