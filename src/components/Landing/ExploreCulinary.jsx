import CulinaryImage from "/images/ASET_PAGE_5.png";

const ExploreCulinary = () => {
  return (
    <>
      <div className="pb-10">
        <div className="container mx-auto px-5">
          <div className="container space-y-10 xl:space-y-0">
            <div className="flex flex-col items-center lg:flex-row gap-5">
              <div className="w-full lg:w-1/2">
                <img
                  data-aos="zoom-in-left"
                  src={CulinaryImage}
                  alt="Authentic Culinary"
                  className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
                />
              </div>
              <div className="w-full lg:w-1/2" data-aos="zoom-in-right">
                <div className="space-y-5">
                  <h2 className="lg:text-4xl/tight text-2xl font-medium mb-7">
                    Kuliner Otentik
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
                    qui repellat molestias non laboriosam quisquam nisi
                    reiciendis iste nam eos corporis tenetur! Consectetur,
                    dolorem amet odit nobis dolores numquam corporis.
                  </p>
                  <a
                    href="#"
                    className="bg-sky-300 border-sky-300 hover:bg-sky-600 transition-all py-2 px-15 text-white shadow hover:shadow-black rounded-bl mr-5"
                  >
                    Jelajahi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCulinary;
