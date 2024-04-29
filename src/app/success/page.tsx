import localFont from "next/font/local";

const seravek = localFont({ src: "../../../public/seravek.ttf" });

export default function Success() {
  return (
    <div className="flex flex-col justify-between items-center w-[89.743vw] xs:w-[350px] h-[56.923vw] xs:h-[222px] mt-[55.128vw] xs:mt-[215px] sm:mt-[356px] md:mt-[301px] mb-[78.718vw] xs:mb-[307px] sm:mb-[455px] md:mb-[401px]">
      <div className="relative w-[89.743vw] xs:w-[350px] h-[45.384vw] xs:h-[177px] bg-[url('/big-logo.png')] bg-contain bg-no-repeat"></div>
      <span
        className={`${seravek.className} text-[#000000] text-[5.128vw] xs:text-[20px] font-black leading-[5.128vw] xs:leading-5 tracking-[.020em]`}
      >
        Thank you for registering!
      </span>
    </div>
  );
}
