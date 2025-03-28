import React from "react";
import LayoutGuest from "../components/Layout/CommonLayout";

function NotFound() {
  return (
    <LayoutGuest>
      <section className="relative z-10 py-[120px] bg-gradient-to-b from-background to-[#EAE0C8]">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                  Oops! That page cant be found
                </h4>
                <p className="mb-8 text-lg text-black">
                  The page you are looking for it maybe deleted
                </p>
                <a
                  href="/"
                  className="inline-block rounded-lg border border-black hover:border-amber-900 px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-amber-900 hover:text-white shadow hover:shadow-black"
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div>
      </section>
    </LayoutGuest>
  );
}

export default NotFound;
