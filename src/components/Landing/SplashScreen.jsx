import { useState, useEffect } from "react";
import Banner from "./Banner";

function Landing() {
  const [hideIntro, setHideIntro] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Setelah 0.4 detik, mulai animasi "turun" (translate-y-0)
    const animateTimer = setTimeout(() => setAnimate(true), 400);

    // Setelah 2 detik, mulai fade out (opacity-0)
    const fadeTimer = setTimeout(() => setFade(true), 2000);

    // Setelah 2.5 detik, sembunyikan splash screen
    const hideTimer = setTimeout(() => setHideIntro(true), 2500);

    // Bersihkan timer jika komponen di-unmount
    return () => {
      clearTimeout(animateTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <Banner />
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
                Connect
              </span>
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Landing;
