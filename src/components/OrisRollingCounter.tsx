import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface RollingDigitProps {
  digit: number;
  delay?: number;
  duration?: number;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function RollingDigit({
  digit,
  delay = 0,
  duration = 1.6,
  triggerRef,
}: RollingDigitProps) {
  const columnRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const col = columnRef.current;
    const trigger = (triggerRef && triggerRef.current) || col;
    if (!col || !trigger) return;

    gsap.set(col, { y: "0%" });

    const st = ScrollTrigger.create({
      trigger: trigger,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(col, {
          y: `-${digit * 10}%`,
          duration: duration,
          delay: delay,
          ease: "power3.out",
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [digit, delay, duration, triggerRef]);

  return (
    <span className="inline-block h-[1em] overflow-hidden leading-none align-baseline">
      <span ref={columnRef} className="flex flex-col select-none will-change-transform">
        {DIGITS.map((n) => (
          <span
            key={n}
            className="flex h-[1em] items-center justify-center leading-none"
          >
            {n}
          </span>
        ))}
      </span>
    </span>
  );
}

interface CounterStatProps {
  value: string;
  label: string;
  delay?: number;
}

export function OrisStatCounter({ value, label, delay = 0 }: CounterStatProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse digits vs symbols like '+' or '%'
  const characters = value.split("");

  return (
    <div ref={containerRef} className="flex flex-col shrink-0">
      <span className="inline-flex items-baseline oris-text64 font-normal! text-oris-secondary leading-none">
        {characters.map((char, i) => {
          const num = parseInt(char, 10);
          if (!isNaN(num)) {
            return (
              <RollingDigit
                key={i}
                digit={num}
                delay={delay + i * 0.15}
                duration={1.8}
                triggerRef={containerRef}
              />
            );
          }
          return (
            <span key={i} className="inline-block leading-none">
              {char}
            </span>
          );
        })}
      </span>
      <p className="oris-text22 text-oris-secondary mt-[1.2vw] max-[1025px]:mt-2 max-w-[22vw] max-[1025px]:max-w-full leading-snug">
        {label}
      </p>
    </div>
  );
}
