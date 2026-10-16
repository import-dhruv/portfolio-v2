import avatarImg from "@/assets/avatar.png";

export default function Polaroid() {
  return (
    <div className="relative w-fit mx-auto sm:mx-0">
      {/* Sticker */}
      <div
        className="absolute -top-2 sm:-top-3 left-1/2 z-10 -translate-x-1/2 rotate-[-4deg] rounded-md bg-background px-2 sm:px-3 py-1 shadow-sm ring-1 ring-border"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        <span className="text-base sm:text-lg leading-none text-foreground">Hey, I'm Dhruv</span>
        <span className="ml-1">👋</span>
      </div>

      {/* Photo */}
      <img
        src={avatarImg}
        alt="Dhruv Patel"
        width={640}
        height={640}
        className="h-44 w-44 rounded-full object-cover sm:h-52 sm:w-52"
      />
    </div>
  );
}
