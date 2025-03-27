import React from "react";
import LayoutGuest from "../components/Layout/CommonLayout";

function NotFound() {
  return (
    <LayoutGuest>
      <section className="relative z-10 flex h-screen items-center justify-center bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
            404
          </h2>
          <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
            Oops! That page can't be found
          </h4>
          <p className="mb-8 text-lg text-black">
            The page you are looking for may have been deleted
          </p>
          <button
            className="rounded-lg bg-amber-800 px-5 py-2.5 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            onClick={() => window.location.replace("/")}
          >
            Go To Home
          </button>
        </div>
      </section>
    </LayoutGuest>
  );
}

export default NotFound;