import { useState, useEffect } from "react";

function Landing() {
  const [hideIntro, setHideIntro] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const animateTimer = setTimeout(() => setAnimate(true), 400);
    const fadeTimer = setTimeout(() => setFade(true), 2000);
    const hideTimer = setTimeout(() => setHideIntro(true), 2500);
    return () => {
      clearTimeout(animateTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <div className="relative">
        {!hideIntro && (
          <div
            className={`
              fixed inset-0 flex items-center justify-center
              bg-[#973c00] transition-all duration-1000 z-50
              ${fade ? "opacity-0" : "opacity-100"}
              ${animate ? "translate-y-0" : "-translate-y-full"}
            `}
          >
            <h1 className="text-white text-4xl font-bold">
              <span
                className={`inline-block transition-all duration-700 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Culture
              </span>
              <span
                className={`inline-block transition-all duration-700 delay-500 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                Connect.
              </span>
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Landing;
