import avatarImg from "@/assets/avatar.png";

export default function Polaroid() {
  return (
    <div className="relative w-fit">
      {/* Sticker */}
      <div
        className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-[-4deg] rounded-md bg-background px-3 py-1 shadow-sm ring-1 ring-border whitespace-nowrap"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        <span className="text-lg leading-none text-foreground">Hey, I'm Dhruv</span>
        <span className="ml-1">👋</span>
      </div>

      {/* Photo */}
      <img
        src={avatarImg}
        alt="Dhruv Patel"
        width={640}
        height={640}
        className="h-40 w-40 sm:h-48 sm:w-48 rounded-full object-cover object-top"
      />
    </div>
  );
}
