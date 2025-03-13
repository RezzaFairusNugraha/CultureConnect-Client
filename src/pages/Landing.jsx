import Layout from "../components/Layout/CommonLayout";
import HeroImage from "../assets/images/Hero.png";
import AboutImage from "../assets/images/About.png";
import PurchasePertama from "../assets/images/ASET PAGE 3.png";
import PurchaseKedua from "../assets/images/ASET PAGE 4.png";
import PurchaseTiga from "../assets/images/ASET PAGE 5.png";

const Landing = () => {
  return (
    <>
      <Layout>
        <div className="homePage pb-10">
          <div className="container mx-auto px-5">
            {/* Hero */}
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
            {/* END HERO */}
            {/* About */}
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
            {/* END ABOUT */}
            {/* Purchase */}
            <section id="Purchase" className="relative overflow-hidden pt-50">
              {/* Purchase 1 */}
              <div className="container space-y-10 xl:space-y-0">
                <div className="flex flex-col items-center lg:flex-row gap-5">
                  <div className="w-full lg:w-1/2">
                    <img
                      src={PurchasePertama}
                      alt="PurchasePertama"
                      className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-5">
                      <h2 className="lg:text-4xl/tight text-2xl font-medium mb-7">
                        Wisata Budaya
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. A, qui repellat molestias non laboriosam quisquam
                        nisi reiciendis iste nam eos corporis tenetur!
                        Consectetur, dolorem amet odit nobis dolores numquam
                        corporis.
                      </p>
                      <a
                        href="#"
                        className="bg-sky-300  border-sky-300 hover:bg-sky-600 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl mr-5"
                      >
                        Jelajahi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Purchase 2 */}
              <div className="container space-y-10 xl:space-y-0">
                <div className="flex flex-col items-center lg:flex-row gap-5">
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-5">
                      <h2 className="lg:text-4xl/tight text-2xl font-medium mb-7">
                        Penginapan terdekat
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. A, qui repellat molestias non laboriosam quisquam
                        nisi reiciendis iste nam eos corporis tenetur!
                        Consectetur, dolorem amet odit nobis dolores numquam
                        corporis.
                      </p>
                      <a
                        href="#"
                        className="bg-sky-300  border-sky-300 hover:bg-sky-600 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl mr-5"
                      >
                        Jelajahi
                      </a>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <img
                      src={PurchaseKedua}
                      alt="PurchaseKedua"
                      className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                    />
                  </div>
                </div>
              </div>
              {/* Purchase 3 */}
              <div className="container space-y-10 xl:space-y-0">
                <div className="flex flex-col items-center lg:flex-row gap-5">
                  <div className="w-full lg:w-1/2">
                    <img
                      src={PurchaseTiga}
                      alt="PurchaseTiga"
                      className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-5">
                      <h2 className="lg:text-4xl/tight text-2xl font-medium mb-7">
                        Kuliner outentik
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. A, qui repellat molestias non laboriosam quisquam
                        nisi reiciendis iste nam eos corporis tenetur!
                        Consectetur, dolorem amet odit nobis dolores numquam
                        corporis.
                      </p>
                      <a
                        href="#"
                        className="bg-sky-300  border-sky-300 hover:bg-sky-600 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl mr-5"
                      >
                        Jelajahi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END Purchase */}
            {/* Hero */}
            <div className="hero items-center pt-10 text-center mt-40">
              <div className="box">
                <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
                  Daftarkan Usahamu sekarang
                </h1>
                <p className="text-base/8 mb-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  iure, suscipit quia labore voluptas dolore mollitia? Excepturi
                  mollitia reiciendis molestias qui magni commodi incidunt,
                  aliquam cumque, sapiente asperiores iste rem.
                </p>
                <h1 className="lg:text-5xl/tight text-3xl font-medium mb-3">
                  Bersama Menjelajah
                </h1>
                <p className="text-base/8 mb-20">CultureConnect</p>
                <p className="text-base/8 mb-7">Daftarkan Sekarang</p>
                <a
                  href="#"
                  className="bg-[#1447e6]  border-sky-300 hover:bg-sky-800 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl"
                >
                  Daftar
                </a>
              </div>
            </div>
            {/* END HERO */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Landing;
