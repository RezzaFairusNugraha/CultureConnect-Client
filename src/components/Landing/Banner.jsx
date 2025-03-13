import HeroImage from "/images/Hero.png";

const Banner = () => {
    return (
        <>
            <div className="homePage pb-10">
                <div className="container mx-auto px-5">
                            <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10">
                              <div className="box">
                                <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
                                  Mari menjelajah bersama kami
                                </h1>
                                <p className="text-base/8 mb-7">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                  Eligendi alias est necessitatibus soluta facere quisquam
                                  dolore rerum hic aliquam nostrum?
                                </p>
                                <a
                                  href="#"
                                  className="bg-sky-300  border-sky-300 hover:bg-sky-600 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl mr-5"
                                >
                                  Jelajahi
                                </a>
                                <a
                                  href="#"
                                  className="bg-transparent text-black border border-black hover:border-sky-600 hover:bg-sky-600 transition-all py-2 px-15 hover:text-white shadow hover:shadow-black rounded-bl"
                                >
                                  Learn More
                                </a>
                              </div>
                              <div className="box">
                                <img
                                  src={HeroImage}
                                  alt="Hero Image"
                                  className="md:w-full w-[400px] mx-auto md:m-0"
                                />
                              </div>
                            </div>
                </div>
            </div>
        </>
    )
}

export default Banner;