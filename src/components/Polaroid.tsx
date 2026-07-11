import avatarImg from "@/assets/avatar.png";

export default function Polaroid() {
  return (
    <div className="relative w-fit">
      {/* Sticker */}
      <div
        className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-[-4deg] rounded-md bg-background px-3 py-1 shadow-sm ring-1 ring-border"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        <span className="text-lg leading-none text-foreground">
          Hey, I'm Dhruv
        </span>
        <span className="ml-1">👋</span>
      </div>

      {/* Scribble frame */}
      <div className="relative">
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M8,10 C40,4 90,6 140,8 C170,9 194,12 192,40 C194,80 196,130 190,170 C188,192 150,194 110,192 C70,196 30,194 12,188 C4,160 6,110 8,70 C6,44 4,20 8,10 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/70"
          />
        </svg>
        <img
          src={avatarImg}
          alt="Dhruv Patel"
          width={640}
          height={640}
          className="relative h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52"
        />
      </div>
    </div>
  );
}
