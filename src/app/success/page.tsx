import localFont from "next/font/local";

const seravek = localFont({ src: "../../../public/seravek.ttf" });

export default function Success() {
  return (
    <div className="flex flex-col justify-between items-center w-[350] h-[222px]">
      <div className="relative w-[350px] h-[177px] bg-[url('/big-logo.png')] bg-contain bg-no-repeat"></div>
      <span
        className={`${seravek.className} text-[#000000] text-[20px] font-black leading-5 tracking-[.020em]`}
      >
        Thank you for registering!
      </span>
    </div>
  );
}
