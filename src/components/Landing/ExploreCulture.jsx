import CultureImage from "/images/ASET_PAGE_3.png";

const ExploreCulture = () => {
  return (
    <>
      <div className="pb-10">
        <div className="container mx-auto px-5">
          <div className="container space-y-10 xl:space-y-0">
        <div className="flex flex-col items-center lg:flex-row gap-5">
          <div className="w-full lg:w-1/2">
            <img
              src={CultureImage}
              alt="Cultural Tourism"
              className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="space-y-5">
              <h2 className="lg:text-4xl/tight text-2xl font-medium mb-7">
                Wisata Budaya
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, qui
                repellat molestias non laboriosam quisquam nisi reiciendis iste
                nam eos corporis tenetur! Consectetur, dolorem amet odit nobis
                dolores numquam corporis.
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

export default ExploreCulture;
