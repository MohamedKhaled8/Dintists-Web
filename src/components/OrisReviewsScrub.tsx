import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ReviewPatient {
  name: string;
  image: string;
}

const PATIENTS: ReviewPatient[] = [
  { name: "Sarah Jenkins", image: "/oris/patient1.webp" },
  { name: "Michael Chang", image: "/oris/patient2.webp" },
  { name: "Emma Watson", image: "/oris/patient3.webp" },
  { name: "Rachel Patel", image: "/oris/patient4.webp" },
  { name: "Aria Lin", image: "/oris/patient5.webp" },
  { name: "Thomas Brooks", image: "/oris/patient6.webp" },
  { name: "Marcus Wright", image: "/oris/patient7.webp" },
  { name: "Arthur Chen", image: "/oris/patient8.webp" },
  { name: "Ananya Gupta", image: "/oris/patient9.webp" },
];

export function OrisReviewsScrub() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "-8% top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.to(".reviews-bg-heading", { scale: 1.15, ease: "none", duration: 3.5 }, 0)
        .to(".left-strip", { yPercent: -65, ease: "none" }, 0)
        .to(".mid-strip", { yPercent: -45, ease: "none" }, 0)
        .to(".right-strip", { yPercent: -70, ease: "none" }, 0);
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      {/* Desktop 500vh Scrub Section */}
      <div
        id="oris-reviews"
        ref={containerRef}
        className="w-full h-[450vh] bg-white text-oris-secondary max-[1025px]:hidden relative z-10 overflow-clip"
      >
        {/* Sticky Background Watermark */}
        <div className="w-full h-screen sticky top-0 flex justify-center items-center pointer-events-none z-1 overflow-hidden">
          <h2 className="reviews-bg-heading text-[13vw] font-medium tracking-tight text-oris-secondary leading-[1] opacity-20 uppercase select-none text-center">
            HAPPY
            <br />
            CLIENTS
          </h2>
        </div>

        {/* Sticky 3-Strip Showcase */}
        <div className="w-full h-screen sticky top-0 -mt-[100vh] flex justify-between px-[7vw] portfolio-card-container z-2 overflow-hidden pointer-events-auto">
          {/* Left Strip */}
          <div className="w-[23vw] h-fit flex flex-col gap-[4vw] items-center left-strip will-change-transform">
            {PATIENTS.map((p, idx) => (
              <div
                key={`left-${idx}`}
                className="group w-[90%] h-[27vw] rounded-2xl overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute bottom-[8%] left-[8%] overflow-hidden pointer-events-none">
                  <p className="text-white text-[1.8vw] font-medium leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                    {p.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Strip */}
          <div className="w-[28%] h-fit flex flex-col gap-[7vw] items-center mid-strip will-change-transform pt-12">
            {[...PATIENTS].reverse().map((p, idx) => (
              <div
                key={`mid-${idx}`}
                className="group w-[90%] h-[34vw] rounded-2xl overflow-hidden relative shadow-xl cursor-pointer transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute bottom-[8%] left-[8%] overflow-hidden pointer-events-none">
                  <p className="text-white text-[2vw] font-medium leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                    {p.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Strip */}
          <div className="w-[23vw] h-fit flex flex-col gap-[4vw] items-center right-strip will-change-transform pt-24">
            {PATIENTS.map((p, idx) => (
              <div
                key={`right-${idx}`}
                className="group w-[90%] h-[27vw] rounded-2xl overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute bottom-[8%] left-[8%] overflow-hidden pointer-events-none">
                  <p className="text-white text-[1.8vw] font-medium leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                    {p.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section Break Banner */}
        <div className="w-full h-screen sticky top-0 flex justify-center items-center pointer-events-none z-10 px-[12vw]">
          <div className="w-[75%] text-center bg-white/90 backdrop-blur-md p-10 rounded-3xl border border-gray-100 shadow-xl">
            <p className="text-oris-secondary font-normal text-[2.8vw] leading-[1.3]">
              From modern treatment rooms to advanced sterilization systems,
              every space is designed around patient comfort, clinical
              excellence, and lasting trust.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Grid Alternative */}
      <div className="hidden w-full bg-white text-oris-secondary max-[1025px]:block px-6 py-20 max-md:py-14">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 max-md:gap-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="max-[1025px]:text-[6vw] max-md:text-[7.5vw] font-normal leading-tight">
              Reviews
            </h2>
            <p className="oris-text22 text-oris-secondary/80 mt-2 max-w-xl">
              Real experiences and radiant smiles from patients who trust Oris
              Dental.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2">
            {PATIENTS.map((p, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl relative aspect-[3/4] shadow-md"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-xs px-2 py-0.5 rounded">
                  {p.name}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl px-6 py-8 text-center bg-[#3365e2] mt-4 shadow-lg">
            <p className="oris-text22 max-md:w-full max-[1025px]:w-[90%] max-[1025px]:mx-auto max-md:text-base font-normal leading-[1.4] text-white">
              From modern treatment rooms to advanced sterilization systems,
              every space is designed around patient comfort, clinical
              excellence, and lasting trust.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
