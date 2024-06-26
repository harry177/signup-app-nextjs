import localFont from "next/font/local";

const myFont = localFont({ src: "../../../public/seravek.ttf" });

export const FormHeader = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-fit">
      <h1
        className={`${myFont.className} font-extrabold text-[8.205vw] xs:text-[32px] text-[#000000]`}
      >
        Sign up
      </h1>
      <h2 className="h-[6.410vw] xs:h-[25px] text-[4.102vw] xs:text-[16px] text-[#5b5b5b] mr-1 leading-[8.205vw] xs:leading-8">
        Please provide your name and email
      </h2>
    </div>
  );
};
