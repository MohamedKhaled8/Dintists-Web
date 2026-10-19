import { useI18n } from "@/lib/i18n";

interface UtopiaLogoProps {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
  size?: "sm" | "md" | "lg";
}

export function UtopiaLogo({ className = "", inverted = false, compact = false, size = "md" }: UtopiaLogoProps) {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  const primaryBlue = inverted ? "#60A5FA" : "#0B4FC7";
  const navyText = inverted ? "#FFFFFF" : "#0B1B3A";
  const captionBlue = inverted ? "#93C5FD" : "#0B4FC7";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Outline Tooth-and-Arch Mark in --primary */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={size === "sm" ? "32" : size === "lg" ? "44" : "38"}
          height={size === "sm" ? "32" : size === "lg" ? "44" : "38"}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Elegant Arch Base */}
          <path
            d="M6 35V18C6 10.268 12.268 4 20 4C27.732 4 34 10.268 34 18V35"
            stroke={primaryBlue}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Stylized Modern Tooth Contours Inside Arch */}
          <path
            d="M14 16C14 13.5 16.5 11 20 11C23.5 11 26 13.5 26 16C26 21 24.5 25 24 28C23.5 31 22 31.5 20 30C18 31.5 16.5 31 16 28C15.5 25 14 21 14 16Z"
            stroke={primaryBlue}
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Subtle Dynamic Light Spark */}
          <path
            d="M20 7V9M20 15V17M17 13H19M21 13H23"
            stroke={primaryBlue}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Caption */}
      <div className="flex flex-col">
        {isAr ? (
          <div className="flex flex-col leading-none">
            <span
              className="font-bold text-xl sm:text-2xl tracking-tight"
              style={{ color: navyText }}
            >
              يوتوبيا
            </span>
            {!compact && (
              <span
                className="text-[10px] font-bold tracking-widest mt-1 uppercase"
                style={{ color: captionBlue }}
              >
                عيادات طب وتجميل الأسنان
              </span>
            )}
          </div>
        ) : (
          <div className="flex flex-col leading-none">
            <span
              className="font-bold text-xl sm:text-2xl tracking-tight font-sans"
              style={{ color: navyText }}
            >
              Utopia
            </span>
            {!compact && (
              <span
                className="text-[9.5px] font-bold tracking-[0.22em] mt-1 uppercase font-sans"
                style={{ color: captionBlue }}
              >
                DENTAL CLINICS
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
